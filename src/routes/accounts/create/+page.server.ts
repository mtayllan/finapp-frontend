import type { Account } from '$lib/pb/types';
import { type Actions, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ locals, request, params }) => {
    const data = Object.fromEntries(await request.formData()) as {
      name: string;
      initial_balance: string;
    };

    await locals.pb.collection('accounts').create({ ...data, user: locals.currentUser?.id });
    throw redirect(303, '/accounts');
  }
} satisfies Actions;
