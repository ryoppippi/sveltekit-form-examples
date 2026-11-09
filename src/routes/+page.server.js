import { wait } from '#lib/utils.js';

export const actions = {
	default: async function ({ request }) {
		const data = await request.formData();
		const username = data.get('username');

		const waitSec = data.get('waitSec') ?? '';

		await wait(Number(`${waitSec}`) * 1000);
		return { msg: `Hello ${username}!` };
	}
};
