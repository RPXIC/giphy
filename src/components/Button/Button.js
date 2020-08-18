import React from 'react'
import { Link, Button } from './styles'

const ButtonComponent = ({children, href}) => {
    return href
    ? <Link to={href}>{children}</Link>
    : <Button>{children}</Button>
}
export default ButtonComponent