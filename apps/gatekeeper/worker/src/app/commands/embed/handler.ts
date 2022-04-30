import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { AppClient } from '../../client';
import { createEmbed } from '../../helpers';
import { Command } from '../../models/command';

export default class extends Command {
  name = 'embed';
  description = 'creates an embed';

  options(T: SlashCommandBuilder) {
    return T.addStringOption(
      option => option.setName('title').setDescription('the title of the embed')
      // .setRequired(true).
    );
    // .addStringOption((option) =>
    //   option
    //     .setName('description')
    //     .setDescription('The description of the embed')
    //     .setRequired(true)
    // );
  }

  run({ options, reply, user }: CommandInteraction, client: AppClient) {
    const title = options.getString('title');
    const description = options.getString('description');
    const embed = createEmbed({
      title,
      description,
      client,
      authorName: user.username,
      authorIconUrl: user.displayAvatarURL()
    });
    reply({ embeds: [embed] });
  }
}
