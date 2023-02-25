let publicUrl = import.meta.env.VITE_DIRECTUS_URL;

export const load = ({ fetch, params }) => {

    const fetchMsgData = async (id) => {
        const msgRes = await fetch(`${publicUrl}/items/msg/${id}`)
        const msgData = await msgRes.json()
        return msgData.data
    }

    return {
        msg: fetchMsgData(params.id),
        id: params.id
    }
}