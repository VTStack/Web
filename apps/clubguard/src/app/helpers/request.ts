import Request, { gql } from 'graphql-request';

export const request = (query: string) => Request('http://localhost:3333/graphql', query);
