import { API_KEY, API_URL } from './settings'

const getGifs = async ({ limit = 15, keyword = 'random', rating = 'g', language = 'en', page = 0 }) => {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=${language}`

  const result = await fetch(apiURL)
  const { data } = await result.json()
  const _gifs = data.map((img) => {
    const { images, title, id } = img
    const { url } = images.downsized_medium
    return { title, id, url }
  })
  return _gifs
}

export default getGifs
