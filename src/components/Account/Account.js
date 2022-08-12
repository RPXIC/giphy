import { memo } from 'react'
import { Link } from 'react-router-dom'
import useUser from 'hooks/useUser'
import './Account.sass'

const Account = () => {
  const { isLogged, logout } = useUser()

  return (
    <>
      {!isLogged ? (
        <Link to={'/login'} className='link'>
          login
        </Link>
      ) : (
        <Link to={'/'} onClick={logout} className='link'>
          logout
        </Link>
      )}
    </>
  )
}
export default memo(Account)
