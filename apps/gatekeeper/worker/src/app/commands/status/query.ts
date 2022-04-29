import { gql } from 'graphql-request';

export const getStatusQuery = () => {
  return gql`
    query ($guildId: String!) {
      user(guildId: $guildId) {
        enabled
        channelId
      }

      auth(guildId: $guildId) {
        enabled
        roleId
      }

      welcome(guildId: $guildId) {
        enabled
        message
        channelId
        afterAuth
      }
    }
  `;
};
