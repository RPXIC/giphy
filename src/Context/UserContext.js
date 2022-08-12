import { useState, useEffect, createContext } from 'react'
import { GET_FAVS } from 'gql/tags'
import gqlFetch from 'utils/glqFetch'

const Context = createContext({})

export function UserContextProvider({ children }) {
  const [favs, setFavs] = useState([])
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem('jwt'))

  useEffect(() => {
    if (!jwt) return setFavs([])
    gqlFetch(GET_FAVS).then((data) => setFavs(data.getFavs))
  }, [jwt])

  return <Context.Provider value={{ favs, setFavs, jwt, setJwt }}>{children}</Context.Provider>
}

export default Context
