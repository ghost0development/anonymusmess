<script lang="ts">
	import { onMount } from 'svelte'
	import { p2p } from '$lib/p2p'
	import QRCode from 'qrcode'

	let nick = $state('')
	let email = $state('')
	let password = $state('')
	let targetPeer = $state('')
	let message = $state('')
	let messages = $state([] as any[])
	let panelOpen = $state(false)
	let qrCanvas = $state(null as HTMLCanvasElement | null)
	let myPeerId = $state('')
	let currentToken = $state(localStorage.getItem('p2p_token') || '')
	let user = $state(null as any)

	onMount(async () => {
		if (currentToken) {
			await checkAuth()
		}
		myPeerId = await p2p.init()
		if (qrCanvas && myPeerId) {
			await QRCode.toCanvas(qrCanvas, myPeerId)
		}
	})

	async function checkAuth() {
		const res = await fetch('/api/me', {
			headers: { Authorization: `Bearer ${currentToken}` }
		})
		user = await res.json()
		if (user && !user.peer_id) {
			await fetch('/api/peer-id', {
				method: 'POST',
				headers: { 
					'Authorization': `Bearer ${currentToken}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ peerId: myPeerId })
			})
		}
	}

	async function register() {
		const res = await fetch('/api/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password, nick })
		})
		if (res.ok) {
			const data = await res.json()
			if (data.success) {
				await login()
			}
		}
	}

	async function login() {
		const res = await fetch('/api/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		})
		const data = await res.json()
		if (data.token) {
			currentToken = data.token
			localStorage.setItem('p2p_token', data.token)
			user = data.user
		}
	}

	async function connect() {
		if (targetPeer) {
			await p2p.connectToPeer(targetPeer, 'star.signalrealmin.com')
			panelOpen = true
		}
	}

	async function send() {
		if (message && targetPeer) {
			await p2p.sendMessage(targetPeer, message, 'star.signalrealmin.com')
			message = ''
		}
	}
</script>

<div class="app">
	<div class="bg"></div>
	
	{#if !user}
	<div class="auth-card">
		<h1>P2PChat</h1>
		<input bind:value={nick} placeholder="Nickname" />
		<input bind:value={email} type="email" placeholder="Email" />
		<input bind:value={password} type="password" placeholder="Password" />
		<button onclick={register} class="primary">Sign Up</button>
		<p class="or">or</p>
		<button onclick={login} class="secondary">Log In</button>
	</div>
	{:else}
	{#if !panelOpen}
	<div class="main-card">
		<div class="qr-container">
			<canvas bind:this={qrCanvas}></canvas>
		</div>
		
		<div class="peer-id">
			<code>{myPeerId}</code>
			<span>👤 @{user.nick}</span>
		</div>

		<input bind:value={targetPeer} placeholder="Enter peer ID to chat" />
		<button onclick={connect} class="primary">Connect</button>

		{#if !user.premium}
		<a href="/premium" class="premium-link">🔒 Get Premium</a>
		{/if}
	</div>
	{:else}
	<div class="chat-card">
		<div class="chat-header">
			<button onclick={() => panelOpen = false}>←</button>
			<strong>Chat with {targetPeer?.slice(0, 12)}...</strong>
		</div>
		
		<div class="messages">
			{#each messages as msg}
				<div class="msg {msg.from === myPeerId ? 'me' : ''}">
					<div class="bubble">{msg.text}</div>
				</div>
			{/each}
		</div>
		
		<input bind:value={message} placeholder="Message" onkeydown={(e) => e.key === 'Enter' && send()} />
		<button onclick={send}>Send</button>
	</div>
	{/if}
	{/if}
</div>

<style>
	* { margin: 0; padding: 0; box-sizing: border-box; }
	:global(body) { 
		background: #000; 
		color: #fff; 
		font-family: 'Inter', system-ui, sans-serif;
		overflow: hidden;
	}

	.bg {
		position: fixed;
		inset: 0;
		background: radial-gradient(circle at 30% 20%, #1e3a8a30, transparent 40%),
					radial-gradient(circle at 70% 80%, #7c3aed30, transparent 40%);
	}

	.app {
		position: fixed;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
	}

	.auth-card, .main-card {
		background: rgba(255,255,255,0.05);
		border: 1px solid rgba(255,255,255,0.1);
		border-radius: 24px;
		padding: 40px;
		width: 100%;
		max-width: 400px;
		backdrop-filter: blur(40px);
		text-align: center;
	}

	h1 { font-size: 28px; margin-bottom: 16px; }
	.or { color: #666; margin: 16px 0; }

	input {
		width: 100%;
		background: rgba(255,255,255,0.05);
		border: 1px solid rgba(255,255,255,0.2);
		color: #fff;
		padding: 16px;
		border-radius: 12px;
		margin: 12px 0;
		font-size: 16px;
	}

	.primary {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border: none;
		padding: 14px;
		border-radius: 10px;
		font-weight: 600;
		cursor: pointer;
		width: 100%;
	}
	.secondary { background: #333; color: #fff; border: none; padding: 14px; border-radius: 10px; cursor: pointer; width: 100%; }

	.qr-container {
		width: 160px;
		height: 160px;
		margin: 0 auto 20px;
		background: #fff;
		border-radius: 20px;
		padding: 12px;
	}
	.qr-container canvas { width: 100%; height: 100%; }

	.peer-id { margin: 16px 0; }
	.peer-id code { font-family: monospace; font-size: 14px; background: rgba(255,255,255,0.1); padding: 6px 10px; border-radius: 6px; }
	.peer-id span { display: block; margin-top: 8px; color: #667eea; }

	.premium-link { margin-top: 16px; color: #667eea; }

	.chat-card {
		background: rgba(255,255,255,0.05);
		border-radius: 24px;
		border: 1px solid rgba(255,255,255,0.1);
		padding: 20px;
		width: 100%;
		max-width: 400px;
		height: 80vh;
		display: flex;
		flex-direction: column;
	}

	.chat-header {
		display: flex;
		align-items: center;
		gap: 12px;
		padding-bottom: 16px;
		border-bottom: 1px solid rgba(255,255,255,0.1);
		margin-bottom: 16px;
	}

	.messages {
		flex: 1;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.msg {
		max-width: 80%;
		padding: 10px 16px;
		border-radius: 16px;
		background: rgba(255,255,255,0.05);
	}
	.msg.me { margin-left: auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100); }
</style>