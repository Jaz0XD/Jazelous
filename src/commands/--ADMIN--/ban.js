const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Bans the member provided")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The member you'd like to ban")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("The reason for banning this member")
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

    await member
      .ban({
        deleteMessageDays: 1,
        reason: reason,
      })
      .catch(console.error);
      const embed = new EmbedBuilder()
          .setColor("DarkRed")
          .setDescription(
              `🔴 **---------- BANNED ----------** 🔴\n\n**USER:** ${user.tag}\n\n**REASON:** ${reason}\n\n**BY:** ${interaction.user}`
          )
          .setTimestamp();
      await interaction.reply({
          embeds: [embed],
      });
    
  },
};
