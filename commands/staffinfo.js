const {Discord,MessageEmbed,  } = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new MessageEmbed()
          
          .setColor(0x7d1a8a)
          .setDescription(" \n___**OFFlimits staff team**___\n \n___MANAGERS:___\nNiklaus  <@644614223917219872>\nPrincess  <@716825649418862602>\n \n___STAFF:___\nHashim  <@723528473607667763>\nProfsor  <@638829730660876348>\nMaAZ  <@716828143410741318>")
          .setTimestamp()
          .setFooter('OFFlimits', 'https://media.discordapp.net/attachments/727010840074780674/745468746474455050/off.png?width=452&height=452');
        message.channel.send(embed);
    }
module.exports.config = {
        name: "staffteam",
        description: "shows information about the staff team",
        usage: "!st",
        accessableby: "Members",
        aliases: ['st']
}