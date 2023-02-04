// import { PUBLIC_DIRECTUS_URL } from '$env/static/public'
let publicUrl = import.meta.env.VITE_DIRECTUS_URL;


export const load = async ({ fetch }) => {

    const fetchMsgData = async () => {
        const msgRes = await fetch(`${publicUrl}/items/msg`)
        const msgData = await msgRes.json()
        return msgData.data
    }


    return {
        messages: fetchMsgData()
        
    }
}



