import { CommandInteraction, MessageEmbed } from 'discord.js';
import { AppClient } from '../client';

export const createEmbed = ({
  title,
  description,
  interaction,
  client,
  authorName,
  authorIconUrl,
  authorUrl
}: {
  title: string;
  description?: string;
  client?: AppClient;
  authorName?: string;
  authorUrl?: string;
  authorIconUrl?: string;
  interaction?: CommandInteraction;
}) => {
  const mngr = interaction.client || client;
  const profilePic = mngr.user.displayAvatarURL();

  return new MessageEmbed({
    footer: { text: mngr.user.username, iconURL: profilePic },
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
