import { wait } from '$lib/utils';

export const actions = {
	default: async function ({ request }) {
		const data = await request.formData();
		const username = data.get('username');

		const waitSec = data.get('waitSec') ?? '';

		await wait(Number(`${waitSec}` ?? 0) * 1000);
		return { msg: `Hello ${username}!` };
	}
};
