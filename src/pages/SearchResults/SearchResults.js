import { useCallback, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ListOfGifs, Header } from 'components'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import Spinner from 'components/Spinner/Spinner'

const SearchResults = () => {
  const { keyword, rating, language } = useParams()
  const { loading, gifs, setPage } = useGifs({ keyword, rating, language })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

  const title = gifs ? `${gifs.length} results of ${keyword}` : ''

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 500),
    [setPage]
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title} | Giphy</title>
          </Helmet>
          <Header />
          <h3 style={{ textTransform: 'uppercase' }}>{keyword}</h3>
          <ListOfGifs gifs={gifs} />
          <div id='visor' ref={externalRef}></div>
        </>
      )}
    </>
  )
}
export default SearchResults
