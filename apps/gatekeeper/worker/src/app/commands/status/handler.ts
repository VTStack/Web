import { CommandInteraction } from 'discord.js';
import { request } from '../../helpers';
import { dispayStatus } from '../../helpers/displayStatus';
import { Command } from '../../models/command';
import { getStatusQuery } from './query';

export default class extends Command {
  name = 'status';
  description?: string = 'check status';

  async run(interaction: CommandInteraction) {
    const { auth, welcome } = await request(getStatusQuery(), {
      guildId: interaction.guild.id
    });
    dispayStatus({
      welcomeEnabled: welcome.enabled,
      authEnabled: auth.enabled,
      interaction
    });
  }
}
