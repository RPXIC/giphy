import { gql } from '@apollo/client'

const LOGIN = gql`
    mutation authenticate($input: AuthenticateInput!) {
        authenticate(input: $input) {
            token
        }
    }
`

const GET_FAVS = gql`
    query getFavs{
        getFavs
    }
`

const FAV = gql`
    mutation toggleFav($input: FavInput!) {
        toggleFav(input: $input)
    }
`

export {
    LOGIN,
    GET_FAVS,
    FAV
}
    