<script>
	let { children } = $props();
</script>

<div class="bg">
	<div class="bg-animation">
		<div class="gradient-1"></div>
		<div class="gradient-2"></div>
	</div>
</div>
<div class="app">
	{@render children()}
</div>

<style>
	.bg {
		position: fixed;
		inset: 0;
		background: #000;
		overflow: hidden;
	}
	
	.bg-animation {
		position: absolute;
		inset: 0;
	}
	
	.gradient-1 {
		position: absolute;
		top: -20%;
		left: -10%;
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, rgba(30, 58, 138, 0.3) 0%, transparent 70%);
		animation: float 15s infinite ease-in-out;
	}
	
	.gradient-2 {
		position: absolute;
		bottom: -20%;
		right: -10%;
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, rgba(118, 75, 162, 0.3) 0%, transparent 70%);
		animation: float 18s infinite ease-in-out reverse;
	}
	
	.app {
		justify-content: center;
		align-items: center;
		padding: 20px;
		display: flex;
		position: fixed;
		inset: 0;
		z-index: 1;
	}
	
	@keyframes float {
		0%, 100% { transform: translate(0, 0) scale(1); }
		25% { transform: translate(20px, 20px) scale(1.1); }
		50% { transform: translate(-20px, 20px) scale(0.9); }
		75% { transform: translate(-20px, -20px) scale(1.05); }
	}
</style>