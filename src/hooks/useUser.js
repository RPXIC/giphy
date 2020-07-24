import { useContext, useCallback, useState } from 'react'
import Context from 'Context/UserContext'
import { useMutation } from '@apollo/client'
import client from 'gql/config/apollo'
import { LOGIN, FAV } from 'gql/tags'

const useUser = () => {
    const { favs, jwt, setFavs, setJwt } = useContext(Context)
    const [ authenticate ] = useMutation(LOGIN)
    const [ toggleFav ] = useMutation(FAV)
    const [ error, setError] = useState()

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('jwt')
        client.resetStore()
        setJwt(null)
    }, [setJwt])

    const fav = useCallback(async(id) => {
        try {
            const { data } = await toggleFav({
                variables: {
                    input: {
                        id
                    }
                }
            })
            const favs = await data.toggleFav
            setFavs(favs)
        } catch (error) {
            setError(error.message)
        }
    }, [toggleFav, setFavs])

    const login = useCallback(async(username, password) => {
        try {
            const { data } = await authenticate({
                variables: {
                    input: {
                        username,
                        password
                    }
                }
            })
            const { token } = data.authenticate
            window.sessionStorage.setItem('jwt', token)
            setJwt(token)
        } catch (error) { 
            window.sessionStorage.removeItem('jwt')
            setError(error.message)
        }
    }, [setJwt, authenticate])

    return {
        isLogged: Boolean(jwt),
        login,
        logout,
        fav,
        favs,
        error
    }
}
export default useUser