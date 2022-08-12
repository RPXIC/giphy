import { memo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Ratings } from 'components'
import './Gif.sass'

const Gif = ({ title, id, url }) => {
  const { pathname } = useLocation()
  const stayInDetail = pathname === `/gif/${id}`
  let _title
  _title = title.replace('GIF', '')
  _title = _title.replace(/ {1,}/g, ' ')

  return (
    <>
      {_title && id && url && (
        <div className={stayInDetail ? 'gif-container--detail' : 'gif-container'}>
          <Link to={`/gif/${id}`} className={stayInDetail ? 'gif-container__link--detail' : 'gif-container__link'}>
            <h6 className={stayInDetail ? 'gif-container__title--detail' : 'gif-container__title'}>{_title}</h6>
            <img className={stayInDetail ? 'gif-container__img--detail' : 'gif-container__img'} alt={_title} src={url}></img>
          </Link>
          <Ratings className='gif-container__ratings' id={id} />
        </div>
      )}
    </>
  )
}
export default memo(Gif)
