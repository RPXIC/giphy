import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import useUser from 'hooks/useUser'
import { Feedback } from 'components'
import './Form.sass'

const Form = ({title, history, onClose}) => {
    const { login, registerUser, isLogged, loadingLogin, loadingRegister, error } = useUser()
    const onLogin = title === 'Login'
    const onRegister = title === 'Register'
    
    useEffect(() => {
        if (isLogged && onLogin) {
            history.push('/')
            onClose && onClose()
        }
    }, [isLogged, history, onClose, onLogin])
    
    const handleSubmit = e => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        if (onLogin) login(username, password)
        if (onRegister) {
            registerUser(username, password)
            history.push('/login')
        }
    }

    if (loadingLogin || loadingRegister) return <p className='loading'>Loading...</p>

    return (
        <div className='content'>
            <Link to={'/'} className="logo">Giphy</Link>
            <h2 className='title'>{title}</h2>
            <form onSubmit={handleSubmit} className='form'>
                <input className='form__input' name='username' placeholder='username' autoFocus />
                <input className='form__input' type='password' name='password' placeholder='password' />
                <button className='form__button'>{title}</button>
                { onLogin && <Link to={'/register'} className='form__link'>Free register</Link> }
                { error && <Feedback error={error} />}
            </form>
        </div>
    )
}
export default withRouter(Form)