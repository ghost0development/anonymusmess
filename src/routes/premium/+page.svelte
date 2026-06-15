<script lang="ts">
	import { goto } from '$app/navigation'
	
	let code = ''
	
	function activate(code: string) {
		if (code === 'P2P-PREMIUM-2026') {
			localStorage.setItem('p2p_premium', 'true')
			goto('/')
		}
	}
</script>

<div class="container">
	<h1>P2P Chat Premium</h1>
	<p>Unlock unlimited features:</p>
	
	<ul>
		<li>Unlimited peer connections</li>
		<li>Large file transfers (1GB+)</li>
		<li>Custom .p2p domains</li>
		<li>Priority signaling</li>
		<li>No rate limits</li>
	</ul>
	
	<div class="subscribe">
		<p><strong>Activation Code:</strong> P2P-PREMIUM-2026</p>
		<div class="input">
			<input bind:value={code} placeholder="Enter activation code" />
			<button onclick={() => activate(code)}>Activate</button>
		</div>
		<p class="small">No payment required - open source messenger</p>
	</div>
	
	<button onclick={() => goto('/')} class="back">← Back to Chat</button>
</div>

<style>
	.container { max-width: 500px; margin: 100px auto; padding: 20px; font-family: system-ui; }
	ul { text-align: left; margin: 20px 0; padding-left: 20px; }
	li { margin: 8px 0; }
	.subscribe { background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }
	.input { display: flex; gap: 10px; margin: 10px 0; }
	input { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
	button { padding: 10px 20px; border: none; background: #007bff; color: white; border-radius: 4px; cursor: pointer; }
	.small { font-size: 12px; color: #666; }
	.back { background: #666; margin-top: 20px; }
</style>