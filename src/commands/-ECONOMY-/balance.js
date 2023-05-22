const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("balance")
    .setDescription("Check your or other user's balance")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user you'd like to view the balance")
    ),
  async execute(interaction, client) {
    const selectedUser =
      interaction.options.getUser("target") || interaction.user;
    const storedBalance = await client.getBalance(
      selectedUser.id,
      interaction.guild.id
    );

    if (!storedBalance) {
      return await interaction.reply({
        content: `${selectedUser.username} doesn't have a balance`,
      });
    } else {
      const embed = new EmbedBuilder()
        .setTitle(`${selectedUser.username}'s Balance: `)
        .setTimestamp()
        .addFields([
          {
            name: `$${storedBalance.balance}`,
            value: `\u200b`,
          },
        ])
        .setFooter({
          text: client.user.tag,
          iconURL: client.user.displayAvatarUrl(),
        });

      await interaction.reply({
        embeds: [embed],
      });
    }
  },
};
