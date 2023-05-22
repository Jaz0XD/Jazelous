const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("msg")
    .setDescription("Sends a message to the current channel.")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to send.")
        .setRequired(true)
    ),
  async execute(interaction) {
    const message = interaction.options.getString("message");

    await interaction.channel.send(message);

    await interaction.reply({
      content: `Message sent`,
      ephemeral: true,
    });
  },
};
