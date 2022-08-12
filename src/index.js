import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { ApolloProvider } from '@apollo/client'
import client from './gql/config/apollo'
import { ThemeProvider } from '@emotion/react'
import { theme } from 'styles/styles'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
)

serviceWorker.unregister()
