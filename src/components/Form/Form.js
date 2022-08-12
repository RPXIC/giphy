import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Feedback, Spinner, Button } from 'components'
import useUser from 'hooks/useUser'
import './Form.sass'

const Form = ({ title, onClose }) => {
  const navigate = useNavigate()
  const { login, registerUser, isLogged, loadingLogin, loadingRegister, error } = useUser()
  const { register, handleSubmit, errors } = useForm()

  const onLogin = title === 'Login'
  const onRegister = title === 'Register'

  const onSubmit = (values) => {
    const username = values.username
    const password = values.password
    if (onLogin) login(username, password)
    if (onRegister) {
      registerUser(username, password).then((res) => {
        if (res) navigate('/login')
      })
    }
  }

  useEffect(() => {
    if (isLogged && (onLogin || onRegister)) {
      navigate('/')
      onClose && onClose()
    }
  }, [isLogged, navigate, onClose, onLogin, onRegister])

  if (loadingLogin || loadingRegister) return <Spinner />

  return (
    <div className='content'>
      <Link to={'/'} className='logo'>
        Giphy
      </Link>
      <h2 className='title'>{title}</h2>
      <form onSubmit={handleSubmit((data) => onSubmit(data))} className='form'>
        <input className='form__input' name='username' placeholder='username' autoFocus {...register('username', { required: true, message: 'iep' })} />
        {errors?.username && <Feedback error={errors.username.message} />}

        <input className='form__input' type='password' name='password' placeholder='password' {...register('password', { required: true })} />
        {errors?.password && <Feedback error={errors.password.message} />}

        <Button>{title}</Button>
        {onLogin && (
          <Link to={'/register'} className='form__link'>
            Free register
          </Link>
        )}
        {error && <Feedback error={error} />}
      </form>
    </div>
  )
}
export default Form
