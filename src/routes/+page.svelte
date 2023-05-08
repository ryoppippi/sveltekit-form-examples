<script lang="ts">
	export let form;

	import Form from '$lib/components/Form.svelte';
</script>

<Form />

<p>{form?.msg ?? 'type your name'}</p>
