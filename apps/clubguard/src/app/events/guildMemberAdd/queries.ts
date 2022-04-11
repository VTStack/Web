import { gql } from 'graphql-request';

export const guildQuery = (guildId: string) => gql`
  {
    auth(guildId: "${guildId}") {
      enabled
      roleId
      guildId
    }
  }
`;
