import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import useUser from 'hooks/useUser'
import { Feedback } from 'components'
import './Form.sass'

const Form = ({title, history}) => {
    const { login, isLogged, error } = useUser()
    
    useEffect(() => {
        if (isLogged) history.push('/')
    }, [isLogged, history])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        login(username, password)
    }

    return (
        <div>
            <Link to={'/'} className="logo">Giphy</Link>
            <h2>{title}</h2>
            <form onSubmit={handleSubmit} className='form'>
                <input className='form__input' name='username' placeholder='username' />
                <input className='form__input' type='password' name='password' placeholder='password' />
                <button className='form__button' >{title}</button>
                { error && <Feedback error={error} />}
            </form>
        </div>
    )
}
export default withRouter(Form)