import { API_KEY, API_URL } from './settings'

const fromApiResToGifs = res => {
    const { data } = res
    const { images, title, id } = data
    const { url } = images.downsized_medium
    return { title, id, url } 
}

export default async function getDetailGif ({ id }) {
    const res = await fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    const data = await res.json()
    return fromApiResToGifs(data)
}