import { gql } from 'graphql-request';

export const createGuildQuery = (guildId: string) => gql`
  mutation {
    createGuild(guildId: "${guildId}") {
      ok
    }
  }
`;
