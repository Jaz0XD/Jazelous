const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionsBitField,
} = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setwelchannel")
    .setDescription("This sets a welcome channel")
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription(
          `This is the channel where you want the welcome messages to be sent`
        )
        .setRequired(true)
    ),
  async execute(interaction) {
    if (
      !interaction.member.permissions.has(
        PermissionsBitField.Flags.Administrator
      )
    )
      return await interaction.reply({
        content: `You must have Administrator permissions to set a welcome channel`,
      });

    const channel = interaction.options.getChannel("channel");
    const embed = new EmbedBuilder()
      .setColor("Aqua")
      .setDescription(
        `:white_check_mark: Your welcome channel has been set to ${channel}`
      );

    await db.set(`welchannel_${interaction.guild.id}`, channel.id);
    await interaction.reply({ embeds: [embed] });
  },
};
