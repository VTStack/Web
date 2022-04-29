import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, CacheType } from 'discord.js';
import { ChannelType } from 'discord-api-types/v9';
import { AppClient } from '../../client';
import { request } from '../../helpers';
import { dispayStatus } from '../../helpers/displayStatus';
import { Command } from '../../models/command';
import { getStatusQuery } from '../status/query';
import { updateWelcome } from './query';

export default class extends Command {
  name = 'welcome';
  description?: string = 'just a test';
  options(T: SlashCommandBuilder) {
    return T.addStringOption(option =>
      option
        .setName('action')
        .addChoices({ name: 'enable', value: 'ENABLE' }, { name: 'disable', value: 'DISABLE' })

        .setDescription('What action to take')
        .setRequired(true)
    ).addChannelOption(option =>
      option
        .addChannelTypes(ChannelType.GuildText)
        .setName('channel')
        .setDescription('The channel to send the welcome message to')
        .setRequired(false)
    );
  }

  async run(interaction: CommandInteraction<CacheType>, client: AppClient): Promise<void> {
    const { options } = interaction;
    const action = options.getString('action');
    const channel = options.getChannel('channel');
    if (action === 'ENABLE') {
      // TODO: This
      if (!channel) return interaction.reply('no channel specified');
      await request(updateWelcome, {
        guildId: '816003068067577887',
        enabled: true,
        channelId: channel.id,
        message: 'Hi {user_name}, Welcome to {server_name}.'
      });
    } else
      await request(updateWelcome, {
        guildId: null,
        enabled: false,
        channelId: null,
        message: null
      });
    const { user, auth, welcome } = await request(getStatusQuery(), {
      guildId: interaction.guild.id
    });
    dispayStatus({
      welcomeEnabled: welcome.enabled,
      authEnabled: auth.enabled,
      interaction
    });
  }
}
