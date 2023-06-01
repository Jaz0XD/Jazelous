const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionsBitField,
} = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("warnings")
    .setDescription("Gets a member's warnings")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The member you want to check the warns on")
        .setRequired(true)
    ),

  async execute(interaction, client) {
    const member = interaction.options.getUser("target");
    let warns = await db.get(`warns_${member}`);

    if (warns == null) warns = 0;

    const embed = new EmbedBuilder()
      .setColor("Yellow")
      .setDescription(
        `🟡 ---------- WARNINGS ---------- 🟡\n\n**USER:** ${member.tag}\n\n**WARNINGS:** ${warns}`
      )
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
