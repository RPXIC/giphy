import React from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Header, TrendingSearches, ListOfGifs } from 'components'
import useGifs from 'hooks/useGifs'

const Home = (({ history }) => {
    const stayHome = history.location.pathname === '/'
    const { gifs } = useGifs()

    return ( 
        <>
            <Helmet>
                <title>Home | Gyphy</title>
            </Helmet>
            <Header />
            { stayHome ? <ListOfGifs gifs={gifs} /> : null }
            { stayHome ? <TrendingSearches /> : null }
        </>
    )
})
export default React.memo(withRouter(Home))