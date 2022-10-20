import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink, ApolloLink } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import Context from './Context'
import { App } from './App'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')

  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }

  return forward(operation)
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-sual-sugheiry-alcala.vercel.app/graphql'
    })
  ])
})

createRoot(document.getElementById('app'))
  .render(
    <Context.Provider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </Context.Provider>
  )
