import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import useUser from 'hooks/useUser'
import { Modal, Form } from 'components'
import './Fav.sass'

const Fav = ({ history, id }) => {
    const { isLogged, fav, favs } = useUser()
    const [ showModal, setShowModal ] = useState(false)

    const isFaved = favs.some(favId => favId === id)

    const handleClick = () => {
        // if (!isLogged) return history.push('/login')
        if (!isLogged) return setShowModal(true)
        fav(id)
    }

    const handleClose = () => setShowModal(false)

    return (
        <>
        {
        isFaved 
        ? <i className="far fa-heart faved" aria-label="Remove from favorites" onClick={handleClick}></i>
        : <i className="far fa-heart" aria-label="Add to favorites" onClick={handleClick}></i>
        }

        {showModal && <Modal onClose={handleClose}> <Form title='login' onClose={handleClose}/> </Modal>}
        </>
    )
}
export default withRouter(Fav)