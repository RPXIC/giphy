import { useNavigate } from 'react-router-dom'
import useForm from './hook'
import './Searcher.sass'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const RATINGS_TEXT = ['all', 'parental control', '+13', '+18']

const LANGUAGES = ['en', 'es']
const LANGUAGES_TEXT = ['english', 'spanish']

const Searcher = ({ initialRating = 'g', initialLanguage = 'en' }) => {
  const navigate = useNavigate()
  const { rating, language, /*times,*/ updateRating, updateLanguage, updateTimes } = useForm({
    initialRating,
    initialLanguage
  })

  const handleChangeRating = (e) => updateRating(e.target.value)

  const handleChangeTimes = (e) => updateTimes(e.target.value)

  const handleChangeLanguage = (e) => updateLanguage(e.target.value)

  return (
    <form
      className='searcher'
      onSubmit={(e) => {
        e.preventDefault()
        const query = e.target.query.value
        if (query.trim() === '') return
        navigate(`/search/${query}/${rating}/${language}`)
      }}>
      <input onChange={handleChangeTimes} className='searcher__input' type='text' name='query' placeholder='search' />
      <button className='searcher__button'>
        <i className='fas fa-search'></i>
      </button>
      {/* {times} */}

      <div>
        <select onChange={handleChangeRating} className='searcher__select' value={rating}>
          <option disabled>Rating content</option>
          {RATINGS.map((rating, index) => (
            <option key={rating} value={rating}>
              {RATINGS_TEXT[index]}
            </option>
          ))}
        </select>
        <select onChange={handleChangeLanguage} className='searcher__select' value={language}>
          <option disabled>Language</option>
          {LANGUAGES.map((language, index) => (
            <option key={language} value={language}>
              {LANGUAGES_TEXT[index]}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}

export default Searcher
