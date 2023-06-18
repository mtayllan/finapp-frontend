import type { Transaction } from '$lib/pb/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
  const transactions = await locals.pb.collection('transactions').getFullList<Transaction>({
    sort: '-date',
    expand: 'account,category'
  });
  return { transactions: structuredClone(transactions) };
}) satisfies PageServerLoad;
