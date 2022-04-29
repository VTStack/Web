import { gql } from 'graphql-request';

export const updateWelcome = gql`
  mutation UpateWelcome($guildId: String, $enabled: Boolean!, $channelId: String, $message: String) {
    updateWelcome(
      guild: {
        guildId: $guildId
        enabled: $enabled
        channelId: $channelId
        afterAuth: false
        message: $message
      }
    ) {
      enabled
      channelId
    }
  }
`;
