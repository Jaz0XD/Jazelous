const {
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  ActionRowBuilder,
    StringSelectMenuOptionBuilder,
  EmbedBuilder
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help2")
    .setDescription("Sends the list of commands"),
    async execute(interaction, client) {

        const embed = new EmbedBuilder()
            .setColor("Aqua")
            .setTitle('------------- Welcome to XDF -------------\n\nHere is the list of features provided by Jazelous')
            .setDescription(`You are currently viewing **Help** page\n\n**Admin Commands**\n**Utility tools Commands**\n**Fun Community Commands**\n**Premium Commands**\n**Music Commands**`);

        const embed1 = new EmbedBuilder()
            .setColor("DarkAqua")
            .setTitle('ADMIN')
            .setDescription(`Ban - Bans a user\nKick - Kicks a user\nTimeout - Mutes a user from all channels\nPurge - Clears a set of messages\nWarn - Warn a user\Warnings - Check a user's warning\nClearwarn - remove a user's warning\nlock - Lock a channel\nUnlock - Unlock a channel`)


        const menu = new StringSelectMenuBuilder()
      .setCustomId(`help`)
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new StringSelectMenuOptionBuilder({
            label: `ADMIN`,
            value: [embed1],
          /*value: `Ban - Bans a user`,
            value: `Kick - Kicks a user`,
            value: `Timeout - Mutes a user from all channels`,
            value: `Purge - Clears a set of messages`,
            value: `Warn - Warn a user`,
            value: `Warnings - Check a user's warning`,
            value: `Clearwarn - remove a user's warning`,
            value: `lock - Lock a channel`,
            value: `Unlock - Unlock a channel`,
          */
          
        }),
          new StringSelectMenuOptionBuilder({
          label: `UTILITY`,
            value: `XYZ`,
        })
      );
        await interaction.reply({
            embeds: [embed],
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
