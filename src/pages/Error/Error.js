/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line
import React from 'react'
import { Helmet } from 'react-helmet'
import { Header, Button } from 'components'
import { jsx } from '@emotion/core'
import { pageErrorStyles, codeErrorStyles, msgErrorStyles, gifErrorStyles } from './styles'

const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I']

const Error = () => {
    const randomImage = () => {
        return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1 ]}/giphy.gif`
    }

    return (
        <>
            <Helmet>
                <title>Error 404 | Giffy</title>
            </Helmet>
            <Header />
            <div>
                <div css={pageErrorStyles}>
                    <span css={codeErrorStyles}>404</span>
                    <span css={msgErrorStyles}>Sometimes gettings lost isn't that bad</span>
                    <img css={gifErrorStyles} src={randomImage()} alt="alt-page-404"/>
                    <Button href='/'>Go back home</Button>
                </div>
            </div>
        </>
    )
}
export default Error