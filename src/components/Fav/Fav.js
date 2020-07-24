import React from 'react'
import { withRouter } from 'react-router-dom'
import useUser from 'hooks/useUser'
import './Fav.sass'

const Fav = ({ history, id }) => {
    const { isLogged, fav, favs } = useUser()

    const isFaved = favs.some(favId => favId === id)

    const handleClick = () => {
        if (!isLogged) return history.push('/login')
        fav(id)
    }

    return (
        isFaved 
        ? <i className="far fa-heart faved" aria-label="Remove from favorites" onClick={handleClick}></i>
        : <i className="far fa-heart" aria-label="Add to favorites" onClick={handleClick}></i>
    )
}
export default withRouter(Fav)