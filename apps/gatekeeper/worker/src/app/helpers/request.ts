import Request from 'graphql-request';

export const request = (query: string, variables?: Record<string, unknown>) =>
  Request('http://localhost:3333/graphql', query, variables);
