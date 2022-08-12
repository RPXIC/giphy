//using gqlFetch utils
import client from 'gql/config/apollo'
import { GET_FAVS } from 'gql/tags'

export default async function getFavs() {
  const res = await client.query({
    query: GET_FAVS
  })
  return res.data.getFavs
}
