const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");
const { pathToFileURL } = require("url");

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync(`./src/commands`);
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      const { commands, commandArray } = client;

      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);

        if (!command || !command.data) {
          console.error(`${folder}: ❌ | ${file}`);
          continue;
        }
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        console.log(`${folder}: ✅ | ${command.data.name}`);
      }
    }
    const clientId = "1091995784725147668";
    const guildId = "1044293773569572874";
    const rest = new REST({ version: "9" }).setToken(
      process.env.JAZELOUS_TOKEN
    );
    try {
      console.log("Started refreshing application (/) commands.");

      await rest.put(Routes.applicationCommands(clientId, guildId), {
        body: client.commandArray,
      });
      console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
      console.error(error);
    }
  };
  client.on("interactionCreate", (interaction) => {
    console.log(
      `Command: \x1b[32m${interaction.commandName}\x1b[0m | User: \x1b[33m${
        interaction.user.tag
      }\x1b[0m | UserID: \x1b[34m${
        interaction.user.id
      }\x1b[0m | Time: \x1b[31m${new Date().toLocaleString()}\x1b[0m`
    );
  });
};
