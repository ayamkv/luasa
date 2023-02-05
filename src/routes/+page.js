// import { PUBLIC_DIRECTUS_URL } from '$env/static/public'
let publicUrl = import.meta.env.VITE_DIRECTUS_URL;


export const load = async ({ fetch }) => {

    const fetchMsgData = async () => {
        const msgRes = await fetch(`${publicUrl}/items/msg?sort=-date_created`)
        const msgData = await msgRes.json()
        return msgData.data
    }


    return {
        messages: fetchMsgData()
        
    }
}



