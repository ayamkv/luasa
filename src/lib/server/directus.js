import { Directus } from '@directus/sdk';
import { env } from '$env/dynamic/private';


const directusToken = env.DIRECTUS_API_TOKEN;
const publicUrl = import.meta.env.VITE_DIRECTUS_URL;

console.log(directusToken);


if (!directusToken) {
    throw Error("Make sure to add the Directus API Token in your environment variables.")
}

if (!publicUrl) {
    throw Error("Make sure to add the Directus URL in your environment variables.")
}
// const directus = new Directus(publicUrl)
// const config = {
// 	auth: {
// 		mode: 'json',
// 		autoRefresh: false
// 	}
// };

// await directus.auth.static(directusToken);

export const directus = new Directus(publicUrl, {
    auth: {
        staticToken: directusToken
    }
});


