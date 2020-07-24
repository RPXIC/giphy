import React from 'react'

const Feedback = ({ error }) => {
    const regex = /GraphQL error: /gi

    error = error.replace(regex, '')
    
    return <p style={{color: '#747474' ,marginTop: '.5rem'}} >- {error} -</p>
}
export default Feedback