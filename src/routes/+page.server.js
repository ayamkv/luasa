
import { fail } from '@sveltejs/kit'
// import { invalidate } from '$app/navigation'
import { directus } from '../lib/server/directus';

const msg = directus.items('msg');

async function sendMessage(to, message) {

    await msg.createOne({
        to: to,
        messages: message
    });

  };


export const actions = {
    sendMsg: async ({ request }) => {
      // TODO log the user in
      const data = await request.formData();
      const msg = String(data.get('message'));
      const to = String(data.get('to'))

      if (!msg) {
        return fail(400, { msg, missing: true })
      }
      
      sendMessage(to, msg);
//      invalidate(() => true);

      return {
        success: true
      }
    }
  };

