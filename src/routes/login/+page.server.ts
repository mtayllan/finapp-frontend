import { redirect, type Actions, fail, error } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';

export const actions: Actions = {
  default: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData()) as {
      email: string;
      password: string;
    };

    try {
      await locals.pb.collection('users').authWithPassword(data.email, data.password);
    } catch (e) {
      console.log({ e }); ta dando fetch failed nao sei pq
      if (e instanceof ClientResponseError) {
        return fail(422, {
          ...data,
          error: e.response.message
        });
      }

      throw error(500, 'Something went wrong logging in');
    }

    throw redirect(303, '/');
  }
};
