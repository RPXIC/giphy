import React from 'react'
import { Link } from 'react-router-dom'
import useUser from 'hooks/useUser'
import './Account.sass'

const Account = () => {
    const { isLogged, logout } = useUser()

    return(
        <>
            { 
                !isLogged ?
                    <Link to={'/login'} className="link">login</Link>
                :
                    <Link to={'/'} onClick={logout} className="link">Logout</Link>
            }
        </>
    )
}
export default React.memo(Account)