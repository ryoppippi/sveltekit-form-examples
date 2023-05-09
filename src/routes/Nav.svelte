<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li><strong>Form Demo</strong></li>
	</ul>
	<ul>
		<li>
			{#if $page.route.id === '/'}
				sveltekit
			{:else}
				<a href="/"> sveltekit </a>
			{/if}
		</li>
		<li>
			{#if $page.route.id === '/superforms'}
				superforms
			{:else}
				<a href="/superforms">superforms</a>
			{/if}
		</li>
	</ul>
</nav>
