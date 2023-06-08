import { redirect } from '@sveltejs/kit';

export function load({ locals, url }) {
  // console.log({ locals, url });
  if (locals.currentUser === null && url.pathname !== '/login') {
    throw redirect(302, '/login');
  }
  return {
    currentUser: locals.currentUser
  };
}
