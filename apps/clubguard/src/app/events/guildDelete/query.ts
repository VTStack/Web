import { gql } from 'graphql-request';

export const guildQuery = (guildId: string) => gql`
  mutation {
    removeGuild(guildId: "${guildId}") {
      ok
    }
  }
`;
