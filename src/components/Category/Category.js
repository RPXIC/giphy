import React from 'react'
import { Link } from 'react-router-dom'
import './Category.sass'

const Category =  ({ name, options = [] }) => {
    return (
        <div className="category">
            <h3 className="category__title">{name}</h3>
            <ul className="category__list">
                {options.map((singleOption) => (
                <li key={singleOption}>
                    <Link className="category__link" to={`/search/${singleOption}`}>
                        {singleOption}
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    )
}
export default React.memo(Category)