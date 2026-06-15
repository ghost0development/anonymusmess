<script>
	let peerId = $state('');
	let isGenerating = $state(false);
	let showQr = $state(false);
	let isClient = typeof window !== 'undefined';
	
	async function generatePeerId() {
		isGenerating = true;
		await new Promise(r => setTimeout(r, 800));
		peerId = crypto.randomUUID().slice(0, 12).replace(/-/g, '').slice(0, 8) + '-' + 
		         crypto.randomUUID().slice(0, 4).replace(/-/g, '');
		showQr = true;
		if (isClient) localStorage.setItem('peerId', peerId);
	}
	
	function connect() {
		window.location.href = '/chat';
	}
	
	function goToPremium() {
		window.location.href = '/premium';
	}
	
	if (isClient) {
		const saved = localStorage.getItem('peerId');
		if (saved) {
			peerId = saved;
			showQr = true;
		}
	}
</script>

<div class="auth-card">
	<div class="logo">
		<div class="hexagon"></div>
		<h1>P2P Chat<span class="gradient">Enterprise</span></h1>
	</div>
	
	{#if !showQr}
		<button class="primary" onclick={generatePeerId} disabled={isGenerating}>
			{isGenerating ? '⏳ Generating...' : '🔐 Generate Secure Peer ID'}
		</button>
		
		<div class="or"><span>or</span></div>
		
		<input type="text" placeholder="Enter peer ID to connect" />
		<button class="secondary">Connect Directly</button>
		
		<button class="premium-link" onclick={goToPremium}>✨ View Premium Features</button>
	{:else}
		<div class="qr-container">
			<div class="qr-code">{peerId.slice(0,8)}</div>
		</div>
		<div class="peer-id">
			<code>{peerId}</code>
			<span class="copy-hint" onclick={() => navigator.clipboard.writeText(peerId)}>📋 Copy</span>
		</div>
		<button class="primary" onclick={connect}>Start Chatting</button>
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
		max-width: 420px;
		padding: 48px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
	}
	
	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		margin-bottom: 32px;
	}
	
	.hexagon {
		width: 40px;
		height: 40px;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
	}
	
	h1 {
		margin: 0;
		font-size: 28px;
		font-weight: 700;
	}
	
	.gradient {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	
	.or {
		color: rgba(255, 255, 255, 0.3);
		margin: 24px 0;
		position: relative;
	}
	
	.or span {
		background: rgba(0, 0, 0, 0.5);
		padding: 0 12px;
	}
	
	input {
		color: #fff;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		width: 100%;
		margin: 12px 0;
		padding: 16px;
		font-size: 16px;
		transition: border-color 0.2s, box-shadow 0.2s;
	}
	
	input:focus {
		outline: none;
		border-color: rgba(102, 126, 234, 0.5);
		box-shadow: 0 0 20px rgba(102, 126, 234, 0.2);
	}
	
	.primary {
		color: #fff;
		cursor: pointer;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border: none;
		border-radius: 12px;
		width: 100%;
		padding: 16px;
		font-size: 16px;
		font-weight: 600;
		transition: transform 0.2s, box-shadow 0.2s;
	}
	
	.primary:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
	}
	
	.primary:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	
	.secondary {
		color: #fff;
		cursor: pointer;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		width: 100%;
		padding: 14px;
		font-weight: 500;
		transition: background 0.2s;
	}
	
	.secondary:hover {
		background: rgba(255, 255, 255, 0.15);
	}
	
	.qr-container {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 20px;
		width: 180px;
		height: 180px;
		margin: 0 auto 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: monospace;
		font-size: 20px;
		font-weight: bold;
		color: #fff;
	}
	
	.peer-id {
		margin: 20px 0;
		position: relative;
	}
	
	.peer-id code {
		background: rgba(255, 255, 255, 0.08);
		border-radius: 8px;
		padding: 10px 16px;
		font-family: 'Monaco', 'Menlo', monospace;
		font-size: 15px;
		color: #e5e5e5;
		word-break: break-all;
	}
	
	.copy-hint {
		display: block;
		margin-top: 8px;
		color: #667eea;
		font-size: 13px;
		cursor: pointer;
		transition: color 0.2s;
	}
	
	.copy-hint:hover {
		color: #764ba2;
	}
	
	.premium-link {
		margin-top: 24px;
		color: #667eea;
		font-size: 14px;
		cursor: pointer;
		transition: color 0.2s;
	}
	
	.premium-link:hover {
		color: #764ba2;
		text-decoration: underline;
	}
</style>