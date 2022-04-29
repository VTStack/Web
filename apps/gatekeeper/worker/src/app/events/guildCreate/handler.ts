import { Guild } from 'discord.js';
import { Event } from '../../models/event';
import { request } from '../../helpers';
import { createGuildQuery } from './queries';

export default class extends Event {
  event = 'guildCreate';

  run = async (guild: Guild) => {
    await request(createGuildQuery(guild.id));
  };
}
