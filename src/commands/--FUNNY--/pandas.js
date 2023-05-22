const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pandas")
    .setDescription("Sends a random Panda GIF"),

  async execute(interaction, client) {
    // let user = interaction.user.id;
    // const pandaGIF = [
    //   "https://media.tenor.com/06uIzDXgpzAAAAAd/panda.gif",
    //   "https://media.tenor.com/WUOH1uAMEwoAAAAC/keep-your-composure.gif",
    //   "https://media.tenor.com/re61LpcLMeYAAAAC/pandacheese.gif",
    //   "https://media.tenor.com/tjNnM6MwBrIAAAAC/panda-rage.gif",
    //   "https://media.tenor.com/y2q4q00YudkAAAAC/marah-panda-marah.gif",
    //   "https://media.tenor.com/56UJ4vr-dLcAAAAd/angry-panda.gif",
    //   "https://media.tenor.com/V8Q7lFyylxgAAAAC/panda-mad.gif",
    //   "https://media.tenor.com/PezPHRkzuhUAAAAd/panda-seulisasoo.gif",
    //   "https://media.tenor.com/3OMzo-QSVqEAAAAd/baby-hug.gif",
    //   "https://media.tenor.com/0zzx0ZlPFWwAAAAd/seulisasoo-resting.gif",
    //   "https://media.tenor.com/zWKCV2h7eugAAAAC/shake-upside-down.gif",
    //   "https://media.tenor.com/Xs8b21el-ZAAAAAd/panda-playing.gif",
    //   "https://media.tenor.com/5gtJrLv8s04AAAAC/mew-panda.gif",
    //   "https://media.tenor.com/ZZKQ0q7IwdYAAAAd/pull-nat-geo-wild.gif",
    //   "https://media.tenor.com/I2x449Tko0cAAAAC/panda-door.gif",
    //   "https://media.tenor.com/9npO4BTi6mUAAAAd/%E6%A1%8C%E5%AD%90%E5%A2%8A%E8%83%8C-%E6%B7%98%E6%B0%94.gif",
    //   "https://media.tenor.com/k2gM1FzbZFwAAAAC/nervpus-panda.gif",
    //   "https://media.tenor.com/BLBryXyWr30AAAAd/didnt-see-you-there-panda-startled.gif",
    //   "https://media.tenor.com/MagTDlQYIG8AAAAC/panda-panda-balaye.gif",
    // ];

    // let pandas = pandaGIF[Math.floor(Math.random() * pandaGIF.length)];
    // const embed = new EmbedBuilder().setImage(`${pandas}`);
    // const jazembed = new EmbedBuilder().setImage(
    //   `https://media.tenor.com/Vyd44hD5y20AAAAC/panda-hit-and-run.gif`
    // );

    // if (user === "714512199523237938") {
    //   await interaction.reply({
    //     embeds: [embed],
    //   });
    // } else if (user === "759985755585773610") {
    //   await interaction.reply({
    //     content: "Jaz Eliminated all Pandas :D",
    //     embeds: [jazembed],
    //   });
    // } else {
    //   return interaction.reply("Sorry you don't have rights to do that");
    // }

    const embed = new EmbedBuilder()
      .setTitle("This command has been removed in the name of revenge")
      .setColor(0xff0800);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
