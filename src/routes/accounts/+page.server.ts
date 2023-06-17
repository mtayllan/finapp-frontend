import type { Account } from '$lib/pb/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
  const accounts = await locals.pb.collection('accounts').getFullList<Account>({
    sort: 'name'
  });
  return { accounts: structuredClone(accounts) };
}) satisfies PageServerLoad;
