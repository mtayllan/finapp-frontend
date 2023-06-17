import type { Account } from '$lib/pb/types';
import { error, type Actions, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
  try {
    const account = await locals.pb.collection('accounts').getOne<Account>(params.id);
    return { account: structuredClone(account) };
  } catch {
    throw error(404);
  }
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ locals, request, params }) => {
    const data = Object.fromEntries(await request.formData()) as {
      name: string;
      initial_balance: string;
    };

    await locals.pb.collection('accounts').update(params.id as string, data);
    throw redirect(303, '/accounts');
  }
} satisfies Actions;
