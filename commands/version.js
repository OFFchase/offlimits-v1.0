const {Discord,MessageEmbed,  } = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new MessageEmbed()
        
          .setTitle("___OFFlimits bot___")
          .setColor(0x7d1a8a)
          .setDescription("Version 3.0.1")
          .setFooter('Developed by Niklaus', 'https://media.discordapp.net/attachments/727010840074780674/745468746474455050/off.png?width=452&height=452');
        message.channel.send(embed);
   
        
    }
module.exports.config = {
        name: "version",
        description: "bot information",
        usage: "!version",
        accessableby: "Members",
        aliases: ['v']
}