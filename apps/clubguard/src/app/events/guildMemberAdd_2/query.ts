import { gql } from 'graphql-request';

export const createQuery = (guildId: string): string => {
  return gql`
  {
    welcome(guildId: "${guildId}") {
      enabled
      message
      channelId
      afterAuth
    }
    auth(guildId: "${guildId}" ) {
      enabled
    }
  }
  `;
};
