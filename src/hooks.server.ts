import PocketBase from 'pocketbase';
import { POCKETBASE_API_URL } from '$env/static/private';

export const handle = async ({ event, resolve }) => {
  event.locals.pb = new PocketBase(POCKETBASE_API_URL);
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

  if (event.locals.pb.authStore.isValid) {
    event.locals.currentUser = structuredClone(event.locals.pb.authStore.model);
  } else {
    event.locals.currentUser = null;
  }

  const response = await resolve(event);

  response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie());

  return response;
};
