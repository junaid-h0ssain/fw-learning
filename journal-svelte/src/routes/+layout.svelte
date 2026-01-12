<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../styles/global.css';
	import '../styles/theme.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Gratitude Journal</title>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="min-h-screen">
	{@render children()}
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
