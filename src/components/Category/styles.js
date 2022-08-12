import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const CategoryTitle = styled.h3`
  color: #e31313;
  font-size: 2.5rem;
  margin: 0.9rem 0 0 0;
  padding: 0.5rem 0 0 0;
`

export const CategoryList = styled.ul`
  padding: 0;
  margin: 1rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) flex-direction: column;
`

const generateMulticolorCategory = (props) => {
  const NEED_WHITE_COLOR = [3, 4]
  const colorIndex = (props.index % 5) + 1
  const needWhite = NEED_WHITE_COLOR.includes(colorIndex)
  const colorText = needWhite ? 'white' : 'var(--theme-body-bg)'

  return `
        background-color: var(--brand-color_${colorIndex});
        color: ${colorText};
    `
}

export const CategoryListItem = styled.li`
  list-style: none;
  padding: 0.3rem;
  margin: 0.2rem;
  font-size: 1.2rem;

  ${generateMulticolorCategory}
`

export const CategoryLink = styled(Link)`
  color: inherit;
  font-size: 1em;
  text-decoration: none;
  font-size: 1em;
  transition: color ease-in 0.1s;
`
