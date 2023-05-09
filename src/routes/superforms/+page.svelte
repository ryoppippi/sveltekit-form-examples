<script lang="ts">
	export let data;

	// import { enhance, applyAction } from '$app/forms';
	import { superForm } from 'sveltekit-superforms/client';
	const { form, message, enhance } = superForm(data.form, {
		taintedMessage: false,
		dataType: 'json',
		onSubmit: () => (loading = true),
		onResult: () => (loading = false)
	});

	let loading = false;
	// let waitSec = 1;
</script>

<form action="" method="POST" use:enhance>
	<label for="username">Username</label>
	<input type="text" id="username" name="username" bind:value={$form.username} />

	<label for="waitSec">
		Respond after {$form.waitSec} second(s)
		<input type="range" min="0" max="5" step="0.1" id="waitSec" name="waitSec" bind:value={$form.waitSec} />
	</label>

	<button type="submit" aria-busy={loading}>Login</button>
</form>

<p>{$message ?? 'type your name'}</p>
