import { TextChannel } from 'discord.js';
import { AppClient } from '../client';

export const getChannel = <T = TextChannel>({
  client,
  channelId
}: {
  channelId: string;
  client: AppClient;
}): T => client.channels.cache.get(channelId) as unknown as T;
