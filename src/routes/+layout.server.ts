import { redirect } from '@sveltejs/kit';

export function load({ locals }) {
  return { currentUser: locals.currentUser };
}
