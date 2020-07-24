import React from 'react'
import { withRouter } from 'react-router-dom'
import useUser from 'hooks/useUser'
import './Like.sass'

const Fav = ({ history, id }) => {
    const { isLogged } = useUser()

    const handleClick = () => {
        if (!isLogged) return history.push('/login')
        console.log(id)
    }

    return (
        <i className="far fa-thumbs-up" onClick={handleClick}></i>
    )
}
export default withRouter(Fav)