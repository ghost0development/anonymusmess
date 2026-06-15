<script>
	import { onMount } from 'svelte';
	import { formatPeerId, generatePeerId } from '$lib/utils';
	
	let messages = $state([]);
	let message = $state('');
	let peerId = $state('');
	let otherPeerId = $state('');
	
	onMount(() => {
		peerId = localStorage.getItem('peerId') || generatePeerId();
		localStorage.setItem('peerId', peerId);
		messages.push({ id: 1, from: 'System', text: 'Welcome to P2P Chat Enterprise', time: new Date() });
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
	}
	
	function handleKey(e) {
		if (e.key === 'Enter') sendMessage();
	}
	
	function goBack() {
		window.location.href = '/';
	}
</script>

<div class="chat-card">
	<div class="chat-header">
		<button onclick={goBack} class="secondary">Back</button>
		<strong>P2P Chat</strong>
		<span class="peer-id-display">{formatPeerId(peerId)}</span>
	</div>
	
	<div class="messages">
		{#each messages as msg (msg.id)}
			<div class="message {msg.from === peerId ? 'own' : ''}">
				<strong>{msg.from === peerId ? 'You' : msg.from}:</strong> {msg.text}
			</div>
		{/each}
	</div>
	
	<div class="input-area">
		<input 
			bind:value={message}
			onkeydown={handleKey}
			type="text" 
			placeholder="Type a message..."
		/>
		<button class="primary" onclick={sendMessage}>Send</button>
	</div>
</div>

<style>
	.chat-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 24px;
		width: 100%;
		max-width: 400px;
		height: 80vh;
		padding: 20px;
		display: flex;
		flex-direction: column;
	}
	
	.chat-header {
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		align-items: center;
		gap: 12px;
		margin-bottom: 16px;
		padding-bottom: 16px;
		display: flex;
	}
	
	.peer-id-display {
		color: #667eea;
		font-family: monospace;
		font-size: 12px;
		margin-left: auto;
	}
	
	.messages {
		flex: 1;
		overflow-y: auto;
		margin-bottom: 16px;
	}
	
	.message {
		margin-bottom: 8px;
		padding: 8px 12px;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 12px;
	}
	
	.message.own {
		background: rgba(102, 126, 234, 0.3);
		margin-left: auto;
		text-align: right;
	}
	
	.input-area {
		margin-top: auto;
	}
	
	.input-area input {
		width: 100%;
		margin-bottom: 8px;
		padding: 12px;
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: rgba(255, 255, 255, 0.05);
		color: #fff;
	}
	
	.secondary {
		color: #fff;
		cursor: pointer;
		background: #333;
		border: none;
		border-radius: 10px;
		padding: 10px 20px;
	}
	
	.primary {
		color: #fff;
		cursor: pointer;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border: none;
		border-radius: 10px;
		width: 100%;
		padding: 14px;
		font-weight: 600;
	}
</style>