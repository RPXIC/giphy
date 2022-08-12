import { memo } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Header, TrendingSearches, ListOfGifs } from 'components'
import useGifs from 'hooks/useGifs'

const Home = () => {
  const { pathname } = useLocation()
  const stayHome = pathname === '/'
  const { gifs } = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Gyphy</title>
      </Helmet>
      <Header />
      {stayHome ? <ListOfGifs gifs={gifs} /> : null}
      {stayHome ? <TrendingSearches /> : null}
    </>
  )
}
export default memo(Home)
