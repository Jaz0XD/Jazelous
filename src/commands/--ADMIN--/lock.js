const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  AttachmentBuilder,
  PermissionsBitField,
  ChannelType,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lock")
    .setDescription("This locks the given channel")
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("The channel you want to lock")
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)
    ),

  async execute(interaction) {
      if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels))
      return interaction.reply({
        content: `You don't have permissions to execute this command`,
      });

    let channel = interaction.options.getChannel("channel");

    channel.permissionsOverwrites.create(interaction.guild.id, {
      SendMessages: false,
    });

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setDescription(":white_check_mark: ${channel} has been **LOCKED**");

    await interaction.reply({ embeds: [embed] });
  },
};
