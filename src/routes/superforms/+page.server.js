import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate, message } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters/zod4';
import { wait } from '#lib/utils.js';

const schema = z.object({
	username: z.string().min(1).default('John'),
	waitSec: z.number().min(0).max(10).default(1)
});

export const load = async () => {
	const form = await superValidate(zod(schema));
	return { form };
};

export const actions = {
	default: async function ({ request }) {
		const form = await superValidate(request, zod(schema));
		if (!form.valid) return fail(400, { form });
		const { username, waitSec } = form.data;
		await wait(waitSec * 1000);
		return message(form, `Hello ${username}!`);
	}
};
