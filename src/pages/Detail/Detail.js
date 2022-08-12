import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Gif, Spinner, Header } from 'components'
import useDetailGif from 'hooks/useDetailGif'

const Detail = () => {
  const { id } = useParams()
  const { gif, loading, error } = useDetailGif({ id })
  const title = gif ? gif.title : ''

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    )
  }

  if (error) return <Navigate to='/404' />
  if (!gif) return null

  return (
    <>
      <Helmet>
        <title>{title} || Giphy</title>
      </Helmet>
      <Header />
      <Gif {...gif} />
    </>
  )
}
export default Detail
