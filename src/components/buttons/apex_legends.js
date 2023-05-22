module.exports = {
    data: {
      name: `ApexLegends`,
    },
    async execute(interaction, client) {
        
        const LegendsList = [
            "ASH",
          "BANGLORE",
          "BLOODHOUND",
          "CATALYST",
          "CAUSTIC",
          "CRYPTO",
          "FUSE",
          "GIBRALTAR",
          "HORIZON",
          "LIFELINE",
          "LOBA",
          "MAD MAGGIE",
          "MIRAGE",
          "NEWCASTLE",
          "OCTANE",
          "PATHFINDER",
          "RAMPART",
          "REVENANT",
          "SEER",
          "VALKYRIE",
          "VANTAGE",
          "WATTSON",
          "WRAITH",
        ]
        
        let Legends = LegendsList[Math.floor(Math.random() * LegendsList.length)];
      await interaction.reply({
        content: `${Legends}`,
      });
    },
  };
  