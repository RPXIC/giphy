import { css } from '@emotion/core'

const pageErrorStyles = css`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
text-align: center;
margin: .5rem auto;
`
const codeErrorStyles = css`
font-size: 4.5rem;
font-weight: bold;
font-style: italic;
`

const msgErrorStyles = css`
font-size: 1.5rem;
margin: 1rem auto;
`
const SIZE = '350px'

const gifErrorStyles = css({
margin: "0 auto",
width: SIZE,
height: SIZE,
objectFit: 'cover'
})

export {
    pageErrorStyles,
    codeErrorStyles,
    msgErrorStyles,
    gifErrorStyles
}