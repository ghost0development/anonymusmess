<script>
	let { children } = $props();
</script>

<div class="bg"></div>
<div class="app">
	{@render children()}
</div>

<style>
	.bg {
		background: radial-gradient(circle at 30% 20%, rgba(30, 58, 138, 0.2), transparent 40%),
					radial-gradient(circle at 70% 80%, rgba(124, 58, 237, 0.2), transparent 40%);
		position: fixed;
		inset: 0;
	}
	.app {
		justify-content: center;
		align-items: center;
		padding: 20px;
		display: flex;
		position: fixed;
		inset: 0;
	}
</style>