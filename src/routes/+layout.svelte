<script>
    import './layout.css';
</script>

<div class="scene">
	<slot />
</div>

<svelte:head>
	<title>Threlte</title>
</svelte:head>

<style>
	.scene {
		height: 100%;
		width: 100%;
		position: relative;
		/* background: radial-gradient(hsl(220 14% 20%), hsl(220 20% 10%)); */
	}
</style>