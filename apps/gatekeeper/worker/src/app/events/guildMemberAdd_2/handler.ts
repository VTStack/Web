import { GuildMember, TextChannel } from 'discord.js';
import { Event } from '../../models/event';
import { userMention } from '@discordjs/builders';
import { getChannel, request } from '../../helpers';
import { createQuery } from './query';
import { AppClient } from '../../client';
export default class extends Event {
  event = 'guildMemberAdd';

  query(guildId: string) {
    return createQuery(guildId);
  }

  run = async (member: GuildMember, client: AppClient) => {
    const { welcome } = await request(this.query(member.guild.id));
    if (!welcome.enabled) return;
    const channel = getChannel<TextChannel>({
      channelId: welcome.channelId as string,
      client
    });
    channel.send(
      welcome.message
        .replace('{user_name}', userMention(member.user.id))
        .replace('{server_name}', `**${member.guild.name}**`)
    );
  };
}
