import React from 'react'
import { CategoryContent, CategoryTitle, CategoryList, CategoryListItem, CategoryLink } from './styles'

const Category =  ({ name, options = [] }) => {
    return (
        <CategoryContent>
            <CategoryTitle>{name}</CategoryTitle>
            <CategoryList>
                {options.map((singleOption, index) => (
                    <CategoryListItem key={singleOption} index={index}>
                        <CategoryLink to={`/search/${singleOption}`}>
                            {singleOption}
                        </CategoryLink>
                    </CategoryListItem>
                ))}
            </CategoryList>
        </CategoryContent>
    )
}
export default React.memo(Category)