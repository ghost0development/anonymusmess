<script>
	let peerId = $state('');
	let isGenerating = $state(false);
	let showQr = $state(false);
	
	async function generatePeerId() {
		isGenerating = true;
		await new Promise(r => setTimeout(r, 1000));
		peerId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		showQr = true;
	}
	
	function connect() {
		window.location.href = '/chat';
	}
	
	function goToPremium() {
		window.location.href = '/premium';
	}
</script>

<div class="auth-card">
	<h1>P2P Chat Enterprise</h1>
	
	{#if !showQr}
		<button class="primary" onclick={generatePeerId} disabled={isGenerating}>
			{isGenerating ? 'Generating...' : 'Generate Peer ID'}
		</button>
		
		<div class="or">or</div>
		
		<input type="text" placeholder="Enter peer ID" />
		<button class="secondary">Connect</button>
		
		<button class="premium-link" onclick={goToPremium}>View Premium Features</button>
	{:else}
		<div class="qr-container">
			<div class="qr-placeholder">QR Code</div>
		</div>
		<div class="peer-id">
			<code>{peerId}</code>
			<span>Your Peer ID</span>
		</div>
		<button class="primary" onclick={connect}>Connect</button>
	{/if}
</div>

<style>
	.auth-card {
		backdrop-filter: blur(40px);
		text-align: center;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 24px;
		width: 100%;
		max-width: 400px;
		padding: 40px;
	}
	
	h1 {
		margin-bottom: 16px;
		font-size: 28px;
	}
	
	.or {
		color: #666;
		margin: 16px 0;
	}
	
	input {
		color: #fff;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 12px;
		width: 100%;
		margin: 12px 0;
		padding: 16px;
		font-size: 16px;
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
	
	.primary:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	
	.secondary {
		color: #fff;
		cursor: pointer;
		background: #333;
		border: none;
		border-radius: 10px;
		width: 100%;
		padding: 14px;
	}
	
	.qr-container {
		background: #fff;
		border-radius: 20px;
		width: 160px;
		height: 160px;
		margin: 0 auto 20px;
		padding: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		font-weight: bold;
	}
	
	.peer-id {
		margin: 16px 0;
	}
	
	.peer-id code {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 6px;
		padding: 6px 10px;
		font-family: monospace;
		font-size: 14px;
	}
	
	.peer-id span {
		color: #667eea;
		margin-top: 8px;
		display: block;
	}
	
	.premium-link {
		color: #667eea;
		margin-top: 16px;
		text-decoration: none;
		cursor: pointer;
	}
	
	.premium-link:hover {
		text-decoration: underline;
	}
</style>