import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { App } from './App'
const client = new ApolloClient({
  uri: 'https://petgram-server-sual-sugheiry-alcala.vercel.app/graphql',
  cache: new InMemoryCache()
})

createRoot(document.getElementById('app'))
  .render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
