import { createLibp2p } from 'libp2p'
import { webRTC } from '@libp2p/webrtc'
import { webRTCStar } from '@libp2p/webrtc-star'
import { noise } from '@libp2p/noise'
import { pipe } from 'it-pipe'
import Dexie from 'dexie'
import type { Multiaddr } from '@multiformats/multiaddr'

export interface Message {
	id: string
	from: string
	to: string
	text: string
	time: number
	type: 'text' | 'file' | 'link'
	read: boolean
	file?: { name: string; size: number; cid: string }
	link?: string
}

class ChatDB extends Dexie {
		messages!: Dexie.Table<Message, string>
	
	constructor() {
		super('P2PChat')
		this.version(1).stores({
			messages: 'id, from, to, time, read'
		})
	}
}

export const db = new ChatDB()

export class P2PService {
	node: any = null
	connecting = false
	connected = false
	peerId = ''
	messages: Message[] = []
	peers: string[] = []
	rooms: string[] = []
	currentRoom = ''
	subscription: ((msg: Message[]) => void) | null = null

	async init() {
		const wrtcStar = await webRTCStar()
		this.node = await createLibp2p({
			// @ts-expect-error - type mismatch in libp2p webrtc-star
			transports: [await webRTC(), wrtcStar.transport],
			security: [noise()]
		})
		this.peerId = this.node.peerId.toString()
		
		this.node.handle('/chat/1.0.0', async ({ stream }: any) => {
			for await (const data of stream.source) {
				const msg = JSON.parse(new TextDecoder().decode(data)) as Message
				msg.read = true
				this.messages.push(msg)
				await db.messages.add(msg)
			}
		})
		
		await this.loadMessages()
		return this.peerId
	}

	async loadMessages() {
		this.messages = await db.messages.orderBy('time').toArray()
	}

	async connectToPeer(peerId: string, signalingServer: string) {
		if (!this.node) return
		this.connecting = true
		try {
			await this.node.dial(`/dnsaddrwss/${signalingServer}/${peerId}` as unknown as Multiaddr)
			this.connecting = false
			this.connected = true
			if (!this.peers.includes(peerId)) this.peers.push(peerId)
		} catch (e) {
			console.error('Connection failed:', e)
			this.connecting = false
		}
	}

	async sendMessage(toPeerId: string, text: string, signalingServer: string) {
		if (!this.node) return

		const msg: Message = {
			id: Math.random().toString(36).slice(2, 11),
			text,
			from: this.peerId,
			to: toPeerId,
			time: Date.now(),
			type: 'text',
			read: false
		}
		this.messages.push(msg)
		await db.messages.add(msg)

		try {
			const addr = `/dnsaddrwss/${signalingServer}/${toPeerId}` as unknown as Multiaddr
			const stream = await this.node.dial(addr, '/chat/1.0.0')
			await pipe([Buffer.from(JSON.stringify(msg))], stream.source)
		} catch (e) {
			console.error('Send failed:', e)
		}
	}

	async sendFile(toPeerId: string, file: File, signalingServer: string) {
		const msg: Message = {
			id: Math.random().toString(36).slice(2, 11),
			text: file.name,
			from: this.peerId,
			to: toPeerId,
			time: Date.now(),
			type: 'file',
			read: false,
			file: { name: file.name, size: file.size, cid: '' }
		}
		this.messages.push(msg)
		await db.messages.add(msg)
	}

	async createRoom(roomId: string) {
		this.currentRoom = roomId
		this.rooms.push(roomId)
	}

	onUpdate(callback: (msg: Message[]) => void) {
		this.subscription = callback
	}
}

export const p2p = new P2PService()