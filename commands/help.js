const {Discord,MessageEmbed,  } = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new MessageEmbed()
        
          .setTitle("___OFFlimits bot commands___")
          .setColor(0x7d1a8a)
          .setDescription("PREFIX<!>\n**help**\n_to show this message_\n**ping**\n**say**\nsay <#channel> <message>\n**sroom**\nFOR id-pass message\n**membercount** or **mc**\nServer membercount\n**staffteam** or **st**\nInfo about our team\n**Clear**, **C** or **purge**\nclear <number> to delete messages\n**Version** or **v**\nbot info ")
          .setTimestamp()
          .setFooter('OFFlimits', 'https://media.discordapp.net/attachments/727010840074780674/745468746474455050/off.png?width=452&height=452');
        message.channel.send(embed);
   
        
    }
module.exports.config = {
        name: "help",
        description: "shows all commands list",
        usage: "!help",
        accessableby: "Members",
        aliases: []
}