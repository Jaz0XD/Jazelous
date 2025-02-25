﻿const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionsBitField,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("This purges channel messages")
    .addIntegerOption((option) =>
      option
        .setName("amount")
        .setDescription("The amount of messages to delete")
        .setMinValue(1)
        .setMaxValue(100)
        .setRequired(true)
    ),
  async execute(interaction) {
    if (
      !interaction.member.permissions.has(
        PermissionsBitField.Flags.ManageMessages
      )
    )
      return interaction.reply({
        content: `You don't have permission to purge messages`,
      });

    let number = interaction.options.getInteger("amount");

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setDescription(`☠ Deleted ${number} message(s)`);

    await interaction.channel.bulkDelete(number);

    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("purge")
        .setEmoji("🗑")
        .setStyle(ButtonStyle.Primary)
    );

    const message = await interaction.reply({
        embeds: [embed],
        components: [button],
    });

    const collector = message.createMessageComponentCollector();

    collector.on("collect", async (i) => {
      if (i.customId === "purge") {
        if (!i.member.permissions.has(PermissionsBitField.Flags.ManageMessages))
          return;

        interaction.deleteReply();
      }
    });
  },
};
