import React from 'react'
import { Link } from 'react-router-dom'
import {Searcher, Account} from '../'
import './Header.sass'


const Header = () => {

    return (
        <div className="header">
            <div className="header__top">
                <div></div>
                <Link to={'/'} className="header__logo">Giphy</Link>
                <Account />
            </div>
            <Searcher />
        </div>
    )
}
export default Header