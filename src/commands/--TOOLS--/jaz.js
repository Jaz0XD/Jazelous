const {
  SlashCommandBuilder,
  EmbedBuilder,
  InteractionCollector,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("jaz")
    .setDescription("Short Description on JazXD"),
  async execute(interaction, client, self) {
    const jazId = `759985755585773610`
    const jaz = client.users.cache.get(jazId);
    const embed = new EmbedBuilder()
      .setTitle(`About Me`)
      .setDescription(
        "Hello there! My name is JazXD, and I am a passionate gamer who loves streaming Minecraft, Valorant, and Apex Legends. Gaming has always been a huge part of my life, and I love nothing more than sharing my adventures with others.\n\nWhen I'm not streaming, you can usually find me exploring new Minecraft worlds, battling it out in Valorant matches, or dropping into Apex Legends arenas with my squad. I'm always looking for new challenges and ways to improve my skills, and I'm not afraid to take risks to get there. \n\nAs a streamer, I strive to create a fun and engaging experience for my viewers. Whether it's cracking jokes, sharing gaming tips, or simply hanging out with my community. I love interacting with my viewers and getting to know each and every one of them."
      )
      .setColor(0x18e1ee)
      .setImage(client.user.displayAvatarURL())
      //.setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: `https://jaz0xd.github.io/Portfolio/`,
        iconURL: jaz.displayAvatarURL(),
        name: jaz.tag,
      })
      .setFooter({
        iconURL: interaction.user.displayAvatarURL(),
        text: interaction.user.tag,
      })
      .setURL(`https://jaz0xd.github.io/Portfolio/`);

    await interaction.reply({
      embeds: [embed],
      components: [
        new ActionRowBuilder().setComponents(

          //! JazXD YouTube channel
          new ButtonBuilder()
            .setURL("https://www.youtube.com/channel/UCs7_hYKF2pf1n1QY19yrJWg")
            .setLabel("Subscribe")
            .setStyle(ButtonStyle.Link)
            .setEmoji("<:YouTube:1096128179137155112>"),

            //! Jaz0XD Twitch channel
          new ButtonBuilder()
            .setURL("https://www.twitch.tv/jaz0xd")
            .setLabel("Follow")
            .setStyle(ButtonStyle.Link)
            .setEmoji("<:Twitch_Logo:1096128993683570828>"),

            //! XD Franchise Instagram account
          new ButtonBuilder()
            .setURL("https://www.instagram.com/xd_franchise/")
            .setLabel("Instagram")
            .setStyle(ButtonStyle.Link)
            .setEmoji("<:instagram:1096129022758486016>"),

            //! JazXD Twitter account
          new ButtonBuilder()
            .setURL("https://twitter.com/JazXD15583083")
            .setLabel("Twitter")
            .setStyle(ButtonStyle.Link)
            .setEmoji("<:twitter:1096129072649748592>")
        ),
      ],
    });
  },
};
