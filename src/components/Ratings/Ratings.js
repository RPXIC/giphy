import { useLocation } from 'react-router-dom'
import { Fav /*, Like, Dislike */ } from 'components'
import './Ratings.sass'

const Ratings = ({ id }) => {
  const { pathname } = useLocation()
  const stayInDetail = pathname === `/gif/${id}`

  return (
    <div className={stayInDetail ? 'ratings--detail' : 'ratings'}>
      {/* <Like id={id} /> */}
      <Fav id={id} />
      {/* <Dislike id={id} /> */}
    </div>
  )
}

export default Ratings
