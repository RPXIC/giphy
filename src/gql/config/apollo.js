import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const URI = process.env.REACT_APP_URI

const link = createHttpLink({
  uri: URI,
  fetch
})

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('jwt')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache()
})

export default client
