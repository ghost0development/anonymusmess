<script lang="ts">
</script>

<div class="landing">
	<header class="header">
		<div class="logo">P2PChat</div>
		<nav>
			<a href="#features">Features</a>
			<a href="#premium">Premium</a>
			<a href="/chat">Launch App</a>
		</nav>
	</header>

	<main>
		<section class="hero">
			<h1>The First truly<br/>Decentralized Messenger</h1>
			<p class="subtitle">Zero censorship. No servers. No middlemen. Connect directly with anyone, anywhere.</p>
			<div class="cta">
				<a href="/chat" class="btn-primary">Launch App</a>
				<a href="/premium" class="btn-secondary">See Premium</a>
			</div>
			<div class="proof">
				<span class="tag">🔒 Zero Censorship</span>
				<span class="tag">📡 P2P Network</span>
				<span class="tag">🔐 End-to-End Encrypted</span>
			</div>
		</section>

		<section class="features" id="features">
			<div class="feature">
				<div class="icon">🔐</div>
				<h3>True P2P</h3>
				<p>WebRTC mesh network. Zero servers. Zero tracking.</p>
			</div>
			<div class="feature">
				<div class="icon">📁</div>
				<h3>Unlimited Files</h3>
				<p>Share anything. No restrictions. No filters.</p>
			</div>
			<div class="feature">
				<div class="icon">⚡</div>
				<h3>Ludicrous Speed</h3>
				<p>Direct connections with up to 1GB file transfers.</p>
			</div>
		</section>

		<section class="premium" id="premium">
			<div class="premium-card">
				<h2>✨ P2PChat Premium</h2>
				<ul>
					<li>✓ Unlimited peer connections</li>
					<li>✓ 1GB+ file transfers</li>
					<li>✓ Custom .p2p domains</li>
					<li>✓ Priority network access</li>
					<li>✓ Priority support</li>
				</ul>
				<code>P2P-PREMIUM-2026</code>
			</div>
		</section>
	</main>
</div>

<style>
	* { margin: 0; padding: 0; box-sizing: border-box; }
	:global(body) { 
		background: #000; 
		color: #fff; 
		font-family: 'Inter', system-ui, sans-serif;
	}

	.landing { min-height: 100vh; display: flex; flex-direction: column; }
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 40px;
		border-bottom: 1px solid rgba(255,255,255,0.1);
		position: sticky;
		top: 0;
		background: rgba(0,0,0,0.8);
		backdrop-filter: blur(20px);
		z-index: 100;
	}
	.logo { font-size: 24px; font-weight: 800; }
	nav { display: flex; gap: 32px; }
	nav a { color: #aaa; text-decoration: none; font-size: 14px; }
	nav a:hover { color: #fff; }

	main { max-width: 1200px; margin: 0 auto; padding: 80px 40px; }

	.hero { text-align: center; margin-bottom: 80px; }
	.hero h1 { font-size: 64px; font-weight: 900; letter-spacing: -2px; margin-bottom: 16px; }
	.subtitle { font-size: 24px; color: #888; max-width: 600px; margin: 0 auto 32px; }
	.cta { display: flex; gap: 16px; justify-content: center; margin-bottom: 32px; }
	.btn-primary {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: 16px 32px;
		border-radius: 12px;
		text-decoration: none;
		font-weight: 600;
	}
	.btn-secondary {
		color: #aaa;
		text-decoration: none;
		padding: 16px 32px;
		border: 1px solid rgba(255,255,255,0.2);
		border-radius: 12px;
	}
	.proof { display: flex; gap: 16px; justify-content: center; }
	.tag { background: rgba(255,255,255,0.05); padding: 8px 16px; border-radius: 20px; font-size: 13px; }

	.features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 32px;
		margin-bottom: 80px;
	}
	.feature { text-align: center; padding: 32px; background: rgba(255,255,255,0.02); border-radius: 20px; }
	.icon { font-size: 48px; margin-bottom: 16px; }
	.feature h3 { font-size: 20px; margin-bottom: 8px; }
	.feature p { color: #888; }

	.premium { margin-top: 40px; }
	.premium-card {
		background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 178, 0.1));
		border: 1px solid rgba(102, 126, 234, 0.3);
		border-radius: 24px;
		padding: 40px;
		text-align: center;
	}
	.premium-card h2 { margin-bottom: 24px; }
	.premium-card ul { text-align: left; margin-bottom: 24px; }
	.premium-card code { font-family: monospace; background: rgba(255,255,255,0.1); padding: 8px 16px; border-radius: 8px; }
</style>