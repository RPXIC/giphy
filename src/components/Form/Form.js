import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import useUser from 'hooks/useUser'
import { Feedback } from 'components'
import './Form.sass'

const Form = ({title, history, onClose}) => {
    const { login, isLogged, loadingLogin, error } = useUser()
    
    useEffect(() => {
        if (isLogged) {
            history.push('/')
            onClose && onClose()
        }
    }, [isLogged, history, onClose])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        login(username, password)
    }

    if (loadingLogin) return <p className='loading'>Loading...</p>

    return (
        <div className='content'>
            <Link to={'/'} className="logo">Giphy</Link>
            <h2 className='title'>{title}</h2>
            <form onSubmit={handleSubmit} className='form'>
                <input className='form__input' name='username' placeholder='username' autoFocus />
                <input className='form__input' type='password' name='password' placeholder='password' />
                <button className='form__button'>{title}</button>
                { error && <Feedback error={error} />}
            </form>
        </div>
    )
}
export default withRouter(Form)