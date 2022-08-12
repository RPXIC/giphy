import { Gif } from '..'
import './ListOfGifs.sass'

const ListOfGifs = ({ gifs }) => (
  <div className='list-of-gifs'>
    {gifs.map(({ title, url, id }) => (
      <Gif key={id} title={title} url={url} id={id} />
    ))}
  </div>
)

export default ListOfGifs
