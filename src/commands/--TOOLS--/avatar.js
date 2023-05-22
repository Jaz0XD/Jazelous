const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Send a user's profile pic")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("Mention the user")
        .setRequired(false)
    ),

  async execute(interaction, client) {
    user = interaction.options.getUser("user") || interaction.user;
    avatarURL = user.displayAvatarURL({ dynamic: true, size: 2048 });

    embed = new EmbedBuilder()
      .setTitle(`${user.username}'s Avatar`)
      .setImage(avatarURL)
      .setColor("Blue");

    await interaction.reply({
      embeds: [embed],
    });
  },
};
