import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useUser from 'hooks/useUser'
import { Feedback } from 'components'
import './Form.sass'

const Form = ({title, history, onClose}) => {
    const { login, registerUser, isLogged, loadingLogin, loadingRegister, error } = useUser()
    const { register, handleSubmit, errors } = useForm()

    const onLogin = title === 'Login'
    const onRegister = title === 'Register'
    
    const onSubmit = values => {
        const username = values.username
        const password = values.password
        if (onLogin) login(username, password)
        if (onRegister) {
            registerUser(username, password)
                .then(res => {if (res) history.push('/login')})
        }
    }
    
    useEffect(() => {
        if (isLogged && (onLogin || onRegister)) {
            history.push('/')
            onClose && onClose()
        }
    }, [isLogged, history, onClose, onLogin, onRegister])
    

    if (loadingLogin || loadingRegister) return <p className='loading'>Loading...</p>

    return (
        <div className='content'>
            <Link to={'/'} className="logo">Giphy</Link>
            <h2 className='title'>{title}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <input className='form__input' name='username' placeholder='username' autoFocus ref={register({ required: 'username is required'})} />
                {errors.username && <Feedback error={errors.username.message} />}

                <input className='form__input' type='password' name='password' placeholder='password' ref={register({ required: 'password is required'})} />
                {errors.password && <Feedback error={errors.password.message} />}

                <button className='form__button'>{title}</button>
                { onLogin && <Link to={'/register'} className='form__link'>Free register</Link> }
                { error && <Feedback error={error} />}
            </form>
        </div>
    )
}
export default withRouter(Form)