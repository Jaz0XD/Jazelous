const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionsBitField,
} = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clearwarn")
    .setDescription("Clears a member's warnings")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The member you want to clear the warns of")
        .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("number")
        .setDescription("The number of warns you want to clear")
        .setRequired(true)
    ),

  async execute(interaction, client) {
    if (
      !interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)
    )
      return await interaction.reply({
        content: `You don't have permission to execute this command!`,
      });

    const member = interaction.options.getUser("target");
    const warnNum = interaction.options.getNumber("number");
    const mention = member.toString();
    let warns = await db.get(`warns_${member}`);
    if (warns == null) warns = 0;

    if (warnNum > warns)
      return await interaction.reply({
        content: `You can only clear a max of ${warns} warnings from ${member.tag}`,
      });

    let afwarns = await db.sub(`warns_${member}`, warnNum);

    const embed = new EmbedBuilder()
      .setColor("Green")
      .setDescription(
        `🟢 ---------- WARNING ---------- 🟢\n\n **Warning(s) Removed**\n\n**USER:** ${member.tag}\n\n**WARNINGS LEFT:** ${afwarns}\n\n**BY:** ${interaction.user}`
      )
      .setTimestamp();

    await interaction.reply({
      content: `${mention} **YOUR WARNINGS HAVE BEEN REMOVED**`,
      embeds: [embed],
    });
  },
};
