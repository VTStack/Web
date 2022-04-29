import { GuildMember } from 'discord.js';
import { AppClient } from '../../client';
import { request } from '../../helpers';
import { createEmbed } from '../../helpers/embed';
import { Event } from '../../models/event';
import { guildQuery } from './queries';
import { CloseButton, TermsButtons } from './styles';

export default class extends Event {
  event = 'guildMemberAdd';

  run = async (member: GuildMember, client: AppClient) => {
    if (member.user.bot) return;
    const { auth: response } = await request(guildQuery(member.guild.id.toString()));
    if (!response.enabled) return;

    const embed = createEmbed({
      description:
        'Hi! You need to accept the terms and rules for this discord server. By accepting you agree to the rules of the server and the terms of this discord bot. Do you accept the terms?',
      title: 'Terms and Rules',
      client
    });
    await member.user.createDM();
    const message = await member.user.dmChannel.send({
      embeds: [embed],
      components: [TermsButtons]
    });

    const collector = message.createMessageComponentCollector({ max: 1 });
    collector.on('end', async results => {
      message.delete();

      const isAccepted = results.at(0).customId === 'ACCEPT';

      const msgToDelete = await message.channel.send({
        content: `You have ${isAccepted ? 'accepted' : 'denied'} the terms of the bot and for **${
          member.guild.name
        }**.`,
        components: [CloseButton]
      });

      const collector = msgToDelete.createMessageComponentCollector({ max: 1 });
      collector.on('end', () => {
        msgToDelete.delete();
      });
      if (isAccepted) {
        const role = member.guild.roles.cache.get(response.roleId);
        member.roles.add(role);
      }
    });
  };
}
