<script>
	import Nav from './Nav.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
</svelte:head>

<header class="container">
	<Nav />
	<!-- <hgroup> -->
	<!-- 	<h1></h1> -->
	<!-- 	<h2>A starter example with all elements and components used in Pico design system.</h2> -->
	<!-- </hgroup> -->
</header>

<main class="container">
	<slot />
</main>
