import { MessageActionRow, MessageButton } from 'discord.js';

export const TermsButtons = new MessageActionRow().addComponents(
  new MessageButton().setLabel('Yes').setCustomId('ACCEPT').setStyle('PRIMARY'),
  new MessageButton().setLabel('No').setCustomId('DENY').setStyle('DANGER'),
  new MessageButton().setLabel('Bot website').setURL('https://clubguard.v-thomas.me').setStyle('LINK')
);

export const CloseButton = new MessageActionRow().addComponents(
  new MessageButton().setLabel('Close').setCustomId('CLOSE').setStyle('SECONDARY')
);
