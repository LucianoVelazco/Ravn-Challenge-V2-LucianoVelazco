import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient ({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache()
});

const ApolloContext = ({ children }) => (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );

export default ApolloContext;