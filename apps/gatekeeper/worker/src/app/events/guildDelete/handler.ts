import { Guild } from 'discord.js';
import { request } from '../../helpers';
import { Event } from '../../models/event';
import { guildQuery } from './query';

export default class extends Event {
  event = 'guildDelete';

  run = async (guild: Guild) => {
    await request(guildQuery(guild.id));
  };
}
