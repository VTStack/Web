import { Message, MessageActionRow, MessageButton } from 'discord.js';
import { AppClient } from '../../client';
import { Event } from '../../models/event';

export default class extends Event {
  event = 'messageCreate';
  run = async (message: Message, client: AppClient) => {
    if (message.channel.id !== '963076831307771924') return;
    const threadChannel = await message.startThread({
      name: `${message.member.displayName} - ${message.content}`,
      reason: message.content
    });
    const Buttons = new MessageActionRow().addComponents(
      new MessageButton().setLabel('Remove Thread').setStyle('SECONDARY').setCustomId('REMOVING')
    );

    const message1 = await threadChannel.send({
      components: [Buttons]
    });
    const collector = message1.createMessageComponentCollector({
      filter: async ({ user }) => {
        const isOwnerOfMsg = user.id === message.member.id;
        const guild = await client.guilds.fetch(message.guild.id);
        const isAdmin = (await guild.members.fetch(user.id)).permissions.has('ADMINISTRATOR', true);

        const hasAccess = isOwnerOfMsg || isAdmin;
        if (hasAccess) return true;

        const channel = await user.createDM();
        await channel.send({ content: 'You are not allowed to do that!' });

        return false;
      },
      max: 1
    });
    collector.on('end', async () => {
      await threadChannel.delete();
      await message.delete();
    });
  };
}
