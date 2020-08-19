const {Discord,MessageEmbed,  } = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("Cool right? but you cant use it, ADMINS ONLY!!!").then(m => m.delete(300));
        if (message.deletable) message.delete();
        const embed = new MessageEmbed()
        
          .setTitle("__OFFlimits Scrims__")
          .setColor(0x7d1a8a)
          .setDescription("Id and password from the lobby are sent 15 minutes before the start of the first match, a break between matches of 10 minutes\n \nId и пароль от лобби отправляются за 15 минут до начала первого матча, перерыв между матчами 10 мин\n \nيتم إرسال المعرف وكلمة المرور قبل 15 دقيقة من بداية المباراة الأولى ، واستراحة بين المباريات لمدة 10 دقائق ");
        message.channel.send(embed);
   
    }
module.exports.config = {
        name: "sroom",
        description: "id-pass-channel message",
        usage: "!sroom",
        aliases: ['!id-pass']
}