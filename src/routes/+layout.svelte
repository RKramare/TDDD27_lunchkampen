<script>
	import '../app.pcss';
</script>

<div class="main-content">
	<slot></slot>
</div>

<style>
	.main-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
