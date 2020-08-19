const {Discord,MessageEmbed,  } = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new MessageEmbed()
          .setTitle("___TOTAL MEMBERS___")
          .setColor(0x7d1a8a)
          .setDescription(`${message.guild.memberCount}`)
          .setTimestamp()
          .setFooter('OFFlimits', 'https://media.discordapp.net/attachments/727010840074780674/745468746474455050/off.png?width=452&height=452');
        message.channel.send(embed);
    }
module.exports.config = {
        name: "membercount",
        description: "sever membercount",
        usage: "!membercount",
        aliases: ["mc"]
}