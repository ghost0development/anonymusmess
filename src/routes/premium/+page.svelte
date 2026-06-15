<script>
	function upgradeToPremium() {
		alert('Premium upgrade coming soon! This is an enterprise feature.');
	}
</script>

<div class="premium-card">
	<h1>Premium Enterprise</h1>
	<ul>
		<li>✓ End-to-end encryption</li>
		<li>✓ Unlimited messages</li>
		<li>✓ Priority support</li>
		<li>✓ Advanced features</li>
	</ul>
	<button class="primary" onclick={upgradeToPremium}>
		Upgrade Now
	</button>
	<button class="premium-link" onclick={() => window.location.href = '/'}>Back to Home</button>
</div>

<style>
	.premium-card {
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
	
	ul {
		list-style: none;
		padding: 0;
		margin: 16px 0;
		text-align: left;
	}
	
	ul li {
		margin: 8px 0;
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
		margin-bottom: 16px;
	}
	
	.premium-link {
		color: #667eea;
		text-decoration: none;
	}
	
	.premium-link:hover {
		text-decoration: underline;
	}
</style>