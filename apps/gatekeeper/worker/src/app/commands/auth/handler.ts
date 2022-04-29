import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { request } from '../../helpers';
import { dispayStatus } from '../../helpers/displayStatus';
import { Command } from '../../models/command';
import { getStatusQuery } from '../status/query';
import { enableAuth, removeAuth } from './query';

export default class extends Command {
  name = 'auth';
  description = 'authenticate with the bot';
  options(command: SlashCommandBuilder) {
    return command
      .addStringOption(option =>
        option
          .setName('action')
          .setDescription('description')
          .setRequired(true)
          .addChoices({ name: 'enable', value: 'enable' }, { name: 'disable', value: 'DISABLE' })
      )
      .addRoleOption(option => option.setName('role').setDescription('description').setRequired(false));
  }

  async run(interaction: CommandInteraction) {
    const { guildId, options } = interaction;

    const role = options.getRole('role');
    const action = options.getString('action');
    if (action === 'enable') {
      if (!role) return interaction.reply('no role specified');
      await request(enableAuth({ guildId, roleId: role.id }));
    } else await request(removeAuth({ guildId }));

    const { auth, welcome } = await request(getStatusQuery(), { guildId });
    dispayStatus({
      welcomeEnabled: welcome.enabled,
      authEnabled: auth.enabled,
      interaction
    });
  }
}
