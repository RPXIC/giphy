import { memo } from 'react'
import { CategoryTitle, CategoryList, CategoryListItem, CategoryLink } from './styles'

const Category = ({ name, options = [] }) => (
  <div>
    <CategoryTitle>{name}</CategoryTitle>
    <CategoryList>
      {options.map((singleOption, index) => (
        <CategoryListItem key={`${singleOption}-${index}`} index={index}>
          <CategoryLink to={`/search/${singleOption.replace(/ /g, '%20')}/g/en`}>{singleOption}</CategoryLink>
        </CategoryListItem>
      ))}
    </CategoryList>
  </div>
)

export default memo(Category)
