import client from 'gql/config/apollo'

const gqlFetch = async(tag) => {
    const res = await client.query({
        query: tag
    })
    return res.data
}
export default gqlFetch