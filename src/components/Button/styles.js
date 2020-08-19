import { Link as LinkRouter } from 'react-router-dom'
import styled from '@emotion/styled'

export const Link = styled(LinkRouter)`
    border: 1px solid transparent;
    padding: .5rem 1rem;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textColor};
    font-weight: 600;
    cursor: pointer;
    font-size: 1rem;
    margin: 1rem auto;
    text-decoration: none;

    &:hover {
        background-color: #7e437e;
    }

    [disabled] {
        opacity: .3;
        pointer-events: none;
    }
`
export const Button = Link.withComponent('button')