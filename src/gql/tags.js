import { gql } from '@apollo/client'

const LOGIN = gql`
    mutation authenticate($input: AuthenticateInput!) {
        authenticate(input: $input) {
            token
            user {
                id
                username
                created
            }
        }
    }
`

const REGISTER = gql`
    mutation register($input: UserInput!){
        register (input: $input)
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
    REGISTER,
    GET_FAVS,
    FAV
}
    