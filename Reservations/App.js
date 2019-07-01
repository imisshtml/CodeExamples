import fetch from 'node-fetch';
import React, {Component} from 'react';
import { Root } from "native-base";
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import MainNavigation from 'src/navigation/MainNavigation';
import { graphqlURL } from 'src/configs/config';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: graphqlURL,
  fetch: fetch,
});

const client = new ApolloClient({
  link,
  cache
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Root>
          <MainNavigation />
        </Root>
      </ApolloProvider>
    );
  }
}