import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
  return { currentUser: locals.currentUser };
}) satisfies LayoutServerLoad;
