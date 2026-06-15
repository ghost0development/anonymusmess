<script>
	import { formatPeerId } from '$lib/utils';
	
	let messages = $state([
		{ id: 1, from: 'System', text: '✓ Connected to P2P Network', time: new Date(), sys: true },
		{ id: 2, from: 'Peer', text: 'Hello from decentralized world!', time: new Date(), sys: false }
	]);
	let message = $state('');
	let peerId = $state('');
	
	$effect(() => {
		if (typeof window !== 'undefined') {
			peerId = localStorage.getItem('peerId') || 'guest-' + Math.random().toString(36).slice(2, 9);
		}
	});
	
	function sendMessage() {
		if (!message.trim()) return;
		messages.push({
			id: Date.now(),
			from: peerId,
			text: message,
			time: new Date()
		});
		message = '';
		setTimeout(() => {
			messages.push({
				id: Date.now() + 1,
				from: 'Network',
				text: '✓ Message delivered via P2P',
				time: new Date(),
				sys: true
			});
		}, 500);
	}
	
	function handleKey(e) {
		if (e.key === 'Enter') sendMessage();
	}
	
	function goBack() {
		window.location.href = '/';
	}
</script>

<div class="chat-container">
	<div class="chat-header">
		<button onclick={goBack} class="icon-btn">←</button>
		<div class="header-info">
			<h2>P2P Chat Room</h2>
			<span class="status">● Live</span>
		</div>
		<span class="peer-tag">{formatPeerId(peerId)}</span>
	</div>
	
	<div class="messages">
		{#each messages as msg (msg.id)}
			<div class="message {msg.sys ? 'system' : ''} {msg.from === peerId ? 'own' : ''}">
				{#if !msg.sys}
					<strong>{msg.from === peerId ? 'You' : msg.from}</strong>
				{/if}
				<span>{msg.text}</span>
			</div>
		{/each}
	</div>
	
	<div class="input-wrapper">
		<input 
			bind:value={message}
			onkeydown={handleKey}
			type="text" 
			placeholder="Type your message... (Enter to send)"
		/>
		<button class="send-btn" onclick={sendMessage}>Send</button>
	</div>
</div>

<style>
	.chat-container {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 24px;
		width: 100%;
		max-width: 440px;
		height: 85vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
	}
	
	.chat-header {
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px 20px;
	}
	
	.icon-btn {
		background: none;
		border: none;
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		padding: 4px;
		opacity: 0.7;
		transition: opacity 0.2s;
	}
	
	.icon-btn:hover {
		opacity: 1;
	}
	
	.header-info {
		flex: 1;
	}
	
	h2 {
		margin: 0;
		font-size: 18px;
		font-weight: 600;
	}
	
	.status {
		color: #4ade80;
		font-size: 12px;
	}
	
	.peer-tag {
		background: rgba(102, 126, 234, 0.2);
		color: #667eea;
		font-family: monospace;
		font-size: 11px;
		padding: 4px 8px;
		border-radius: 6px;
	}
	
	.messages {
		flex: 1;
		overflow-y: auto;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	
	.message {
		max-width: 70%;
		padding: 10px 14px;
		border-radius: 16px;
		background: rgba(255, 255, 255, 0.05);
		font-size: 14px;
		animation: fadeIn 0.3s ease-out;
	}
	
	.message.system {
		background: rgba(74, 222, 128, 0.15);
		color: #4ade80;
		font-size: 12px;
		align-self: center;
		max-width: 80%;
	}
	
	.message.own {
		background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
		align-self: flex-end;
		border-bottom-right-radius: 4px;
	}
	
	.message:not(.own):not(.system) {
		align-self: flex-start;
		border-bottom-left-radius: 4px;
	}
	
	.message strong {
		display: block;
		font-size: 12px;
		opacity: 0.7;
		margin-bottom: 4px;
	}
	
	.input-wrapper {
		padding: 16px 20px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		display: flex;
		gap: 12px;
	}
	
	input {
		flex: 1;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		padding: 12px 16px;
		color: #fff;
		font-size: 14px;
		outline: none;
		transition: border-color 0.2s, box-shadow 0.2s;
	}
	
	input:focus {
		border-color: rgba(102, 126, 234, 0.5);
		box-shadow: 0 0 10px rgba(102, 126, 234, 0.2);
	}
	
	.send-btn {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: #fff;
		border: none;
		border-radius: 12px;
		padding: 12px 20px;
		font-weight: 500;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}
	
	.send-btn:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
	}
	
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>