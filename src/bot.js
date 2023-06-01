require("dotenv").config();
const { JAZELOUS_TOKEN, databaseToken } = process.env;
const { connect } = require("mongoose");
const { Player } = require("discord-player");
const { Client, Collection, GatewayIntentBits, PermissionFlagsBits, Permissions, MessageManager, Embed, Events } = require("discord.js");
const fs = require("fs");
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { EmbedBuilder } = require("@discordjs/builders");
const { QuickDB } = require('quick.db')

//const { YoutubePoster } = require("discord-youtube");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates],
});

client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}
client.distube = new DisTube(client, {
  emitNewSongOnly: true,
  leaveOnFinish: false,
  emitAddSongWhenCreatingQueue: false,
  plugins: [new SpotifyPlugin()],
});

const db = new QuickDB();


client.on(Events.GuildMemberAdd, async (member) => {
    const channelID = await db.get(`welchannel_${member.guild.id}`)
    const channel = member.guild.channels.cache.get(channelID)
    const message = `**Welcome to the server, ${member}**`

    if (channelID == null) return;

    channel.send(message)
})

// client.ytp = new YoutubePoster(client, {
//   loop_delay_in_min: 1,
// });

//Sending a message randomly every hour

// setInterval(() => {
//   const channel = client.channels.cache.get("1044293774370676738");
//   if (!channel) return console.error("Invalid channel ID.");

//   const embed = new EmbedBuilder()
//     .setTitle("WHATEVER YOU DO. DON`T FALL ASLEEP")
//     .setColor(0x0a0075);

//   channel.send({ embeds: [embed] }).catch(console.error);
// }, 30 * 60 * 1000); // 30 mins

// setInterval(() => {
//   const channel = client.channels.cache.get("1044293774370676738");
//   if (!channel) return console.error("Invalid channel ID.");

//   const embed = new EmbedBuilder()
//     .setTitle("FAT ASS PANDA")
//     .setColor(0x3efa70);

//   channel.send({ embeds: [embed] }).catch(console.error);
// }, 45 * 60 * 1000); // 45 mins

// setInterval(() => {
//   const channel = client.channels.cache.get("1044293774370676738");
//   if (!channel) return console.error("Invalid channel ID.");

//   const embed = new EmbedBuilder()
//     .setTitle("<@840220285419388989>")
//     .setColor(0xfa513e);

//   channel.send("<@714512199523237938>").catch(console.error);
// }, 1000); // 1 sec

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(JAZELOUS_TOKEN);
(async () => {
  await connect(databaseToken).catch(console.error);
})();
