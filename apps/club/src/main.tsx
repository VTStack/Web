/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render } from 'react-dom';
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './app/app';
import { StrictMode } from 'react';

const httpLink = new HttpLink({
  uri: 'http://localhost:3333/graphql'
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink])
});

const frontendApi = 'clerk.35aal.6a6sb.lcl.dev';

render(
  <StrictMode>
    {/*  @ts-ignore */}
    <ClerkProvider frontendApi={frontendApi}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ClerkProvider>
  </StrictMode>,
  document.getElementById('root') as Element
);
