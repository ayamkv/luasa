
import { fail, redirect } from '@sveltejs/kit'
// import { invalidate } from '$app/navigation'
import { directus } from '../lib/server/directus';

const msg = directus.items('msg');

async function sendMessage(to, message, color) {

    await msg.createOne({
        to: to,
        messages: message,
        color: color
    });

  };


export const actions = {
    sendMsg: async ({ request }) => {
      const data = await request.formData();
      const msg = String(data.get('message'));
      const to = String(data.get('to'));
      const color = String(data.get('color'));

      if (!msg) {
        return fail(400, { msg, missing: true })
      }
      
      sendMessage(to, msg, color);
//      invalidate(() => true);
      // throw redirect(303, '/')
      return {
        success: true
      }
    }
  };

