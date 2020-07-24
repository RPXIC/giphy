import React from 'react'
import { withRouter } from 'react-router-dom'
import { Fav, Like, Dislike } from 'components'
import './Ratings.sass'

const Ratings = ({ history, id }) => {
    const stayInDetail = history.location.pathname === `/gif/${id}`

    return (
        <div className={
            stayInDetail 
            ? "ratings--detail"
            : "ratings"
        }>
            <Like id={id} />
            <Fav id={id}/>
            <Dislike id={id} />
        </div>
    )
}
export default withRouter(Ratings)