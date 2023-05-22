const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Timeouts the member provided")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The member you'd like to timeout")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("time")
        .setDescription("The amount of minutes to timeout a member")
    )

    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("The reason for kicking this member")
    ),
  async execute(interaction, client) {

    if (!interaction.member.hasPermission("ADMINISTRATOR")) {
      return interaction.reply({
        content: "You don't have permission to use this command!",
        ephemeral: true,
      });
    }

    const user = interaction.options.getUser("target");
    let reason = interaction.options.getString("reason");
    let time = interaction.options.getInteger("time");
    const member = await interaction.guild.members
      .fetch(user.id)
      .catch(console.error);

    if (!reason) reason = "No reason provided.";
    if (!time) time = null;

    await member.timeout(time == null ? null : time * 60 * 1000, reason).catch(console.error);

    await interaction.reply({
      content: `${user.tag} has been Timed out for ${time}!`,
    });
  },
};
