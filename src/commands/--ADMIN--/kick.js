const {
  SlashCommandBuilder,
  PermissionsBitField,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kicks the member provided")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The member you'd like to kick")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("The reason for kicking this member")
    ),
  async execute(interaction, client) {
    if (
      !interaction.member.permissions.has(
        PermissionsBitField.Flags.Administrator
      )
    ) {
      return interaction.reply({
        content: "You don't have permission to use this command!",
        ephemeral: true,
      });
    }

    const user = interaction.options.getUser("target");
    let reason = interaction.options.getString("reason");
    const member = await interaction.guild.members
      .fetch(user.id)
      .catch(console.error);

    if (!reason) reason = "No reason provided.";

    await member.kick(reason).catch(console.error);
    const embed = new EmbedBuilder()
      .setColor("DarkOrange")
      .setDescription(
        `🔴 **---------- KICKED ----------** 🔴\n\n**USER:** ${user.tag}\n\n**REASON:** ${reason}\n\n**BY:** ${interaction.user}`
      )
      .setTimestamp();
    await interaction.reply({
      embeds: [embed],
    });
  },
};
