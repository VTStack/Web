import { MessageEmbed } from 'discord.js';
import { AppClient } from '../client';

export const createEmbed = ({
  title,
  description,
  client,
  authorName,
  authorIconUrl,
  authorUrl
}: {
  title: string;
  description: string;
  client: AppClient;
  authorName?: string;
  authorUrl?: string;
  authorIconUrl?: string;
}) => {
  const profilePic = client.user.displayAvatarURL();

  return new MessageEmbed({
    footer: { text: client.user.username, iconURL: profilePic },
    description,
    author: {
      name: authorName,
      url: authorUrl,
      iconURL: authorIconUrl
    },
    title,
    timestamp: new Date().getTime(),
    color: 0x5737d6
  });
};
