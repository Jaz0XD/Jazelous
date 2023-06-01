const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionsBitField,
} = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("warn")
    .setDescription("Warns a member")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user you would like to warn")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("The reason for warning the user")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    /*if (!interaction.member.hasPermission("ADMINISTRATOR")) {
            return interaction.reply({
                content: "You don't have permission to use this command!",
                ephemeral: true,
            });
        }
        */

    if (
      !interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)
    )
      return await interaction.reply({
        content: `You don't have permission to execute this command!`,
      });

    const member = interaction.options.getUser("target");
    let reason = interaction.options.getString("reason");
    const mention = member.toString();

    if (!reason) reason = "No reason provided!";

    const dmEmbed = new EmbedBuilder()
      .setColor("Orange")
      //.setDescription(`⚠ You have been **warned** in ${interaction.guild.name} | ${reason} ⚠`)
      .setDescription(
        `🟠 ---------- WARNING ---------- 🟠\n\n **You have been warned**\n\n**GUILD:** ${interaction.guild.name}\n\n**REASON:** ${reason}\n\n**BY:** ${interaction.user}`
      )
      .setTimestamp();

    const embed = new EmbedBuilder()
      .setColor("Orange")
      //.setDescription(`:white_check_mark: ${member.tag} has been **warned** | ${reason}`)
      .setDescription(
        `🟠 ---------- WARNING ---------- 🟠\n\n **You have been warned**\n\n**USER:** ${member.tag}\n\n**REASON:** ${reason}\n\n**BY:** ${interaction.user}`
      )
      .setTimestamp();

    await interaction.reply({
      content: `${mention} **YOU HAVE BEEN WARNED**`,
      embeds: [embed],
    });
    await member.send({ embeds: [dmEmbed] }).catch((err) => {
      return;
    });

    db.add(`warns_${member}`, 1);
  },
};
