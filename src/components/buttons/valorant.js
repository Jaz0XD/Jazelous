module.exports = {
    data: {
      name: `Valorant`,
    },
    async execute(interaction, client) {
        
        const AgentList = [
            "PHOENIX",
            "RAZE",
            "JETT",
            "YORU",
            "NEON",
            "REYNA",
            "SAGE",
            "CYPHER",
            "CHAMBER",
            "KILLJOY",
            "OMEN",
            "VIPER",
           "BRIMSTONE",
           "ASTRA",
           "HARBOR",
           "SOVA",
           "BREACH",
           "SKYE",
           "KAY/O",
           "FADE",
           "GEKKO",
        ]
        
        let Agents = AgentList[Math.floor(Math.random() * AgentList.length)];
      await interaction.reply({
        content: `${Agents}`,
      });
    },
  };
  