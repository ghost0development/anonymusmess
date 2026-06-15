<script>
	let features = [
		'End-to-end encryption',
		'Unlimited P2P connections',
		'Priority message routing',
		'Advanced analytics',
		'Dedicated support',
		'Custom themes',
		'API access'
	];
	
	function upgrade() {
		alert('🔒 Premium subscription processing...\n\nThis feature is coming soon! For now, enjoy the free tier.');
	}
</script>

<div class="premium-card">
	<div class="badge">PREMIUM</div>
	<h1>P2P Chat<span class="gradient">Enterprise</span></h1>
	<p class="subtitle">Unlock the full potential</p>
	
	<ul class="features">
		{#each features as feature}
			<li class="feature">
				<span class="check">✓</span>
				{feature}
			</li>
		{/each}
	</ul>
	
	<button class="primary" onclick={upgrade}>
		Subscribe Now - $9.99/mo
	</button>
	
	<button class=" secondary" onclick={() => window.location.href = '/'}>
		← Back to Home
	</button>
</div>

<style>
	.premium-card {
		backdrop-filter: blur(40px);
		text-align: center;
		background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 28px;
		width: 100%;
		max-width: 440px;
		padding: 52px 32px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		position: relative;
	}
	
	.badge {
		position: absolute;
		top: -12px;
		left: 50%;
		transform: translateX(-50%);
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: #fff;
		font-size: 11px;
		font-weight: 700;
		padding: 4px 16px;
		border-radius: 20px;
	}
	
	h1 {
		margin: 0 0 8px;
		font-size: 32px;
		font-weight: 700;
	}
	
	.gradient {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	
	.subtitle {
		color: rgba(255, 255, 255, 0.5);
		margin: 0 0 32px;
		font-size: 15px;
	}
	
	.features {
		list-style: none;
		padding: 0;
		margin: 0 0 32px;
		text-align: left;
	}
	
	.feature {
		padding: 10px 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
		display: flex;
		align-items: center;
		gap: 12px;
	}
	
	.feature:last-child {
		border-bottom: none;
	}
	
	.check {
		color: #4ade80;
		font-weight: bold;
	}
	
	.primary {
		color: #fff;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		border: none;
		border-radius: 14px;
		width: 100%;
		padding: 16px;
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 16px;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}
	
	.primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
	}
	
	.secondary {
		color: rgba(255, 255, 255, 0.6);
		background: none;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		width: 100%;
		padding: 14px;
		font-size: 14px;
		cursor: pointer;
		transition: background 0.2s;
	}
	
	.secondary:hover {
		background: rgba(255, 255, 255, 0.05);
	}
</style>