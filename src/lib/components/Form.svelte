<script>
	import { enhance, applyAction } from '$app/forms';

	let loading = false;
	let waitSec = 1;
</script>

<form
	action=""
	method="POST"
	use:enhance={() => {
		loading = true;

		return async ({ result }) => {
			await applyAction(result);
			loading = false;
		};
	}}
>
	<label for="username">Username</label>
	<input type="text" id="username" name="username" value="John" />

	<label for="waitSec">
		Respond after {waitSec} second(s)
		<input type="range" min="0" max="5" step="0.1" id="waitSec" name="waitSec" bind:value={waitSec} />
	</label>

	<button type="submit" aria-busy={loading}>Login</button>
</form>
