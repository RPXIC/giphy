import { API_KEY, API_URL } from './settings'

const getTrendingGifs = async () => {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

  const result = await fetch(apiURL)
  const { data } = await result.json()

  return data
}

export default getTrendingGifs
