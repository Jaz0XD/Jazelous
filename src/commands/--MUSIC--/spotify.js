const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  AttachmentBuilder,
} = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("spotify")
    .setDescription("Displays a user's spotify status")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("This is the user you want to display the status of")
        .setRequired(true)
    ),

  async execute(interaction) {
    let user = interaction.options.getMember("user");

    if (user.bot)
      return await interaction.reply({
        content: `You can not get a bot's spotify status`,
      });

    let status;
    if (user.presence.activities.length === 1)
      status = user.presence.activities[0];
    else if (user.presence.activities.length > 1)
      status = user.presence.activities[1];

    if (
      user.presence.activities.length === 0 ||
      (status.name !== "Spotify" && status.type !== "LISTENING")
    ) {
      return await interaction.reply({
        content: `${user.user.username} is not listening to spotify!`,
      });
    }

    if (
      status !== null &&
      status.name === "Spotify" &&
      status.assets !== null
    ) {
      let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
        name = status.details,
        artist = status.state,
        album = status.assets.largeText;

      const card = new canvacord.Spotify()
        .setAuthor(artist)
        .setAlbum(album)
        .setStartTimestamp(status.timestamps.start)
        .setEndTimestamp(status.timestamps.end)
        .setImage(image)
        .setTitle(name)

      const Card = await card.build();
      const attachments = new AttachmentBuilder(Card, { name: "spotify.png" });
      const embed = new EmbedBuilder()
        .setTitle(`${user.user.username}'s Spotify Track`)
        .setImage(`attachment://spotify.png`)
        .setColor("Green")
        .setTimestamp()
        .setFooter({ text: "Spotify Tacker" });

      await interaction.reply({ embeds: [embed], files: [attachments] });
    }
  },
};
