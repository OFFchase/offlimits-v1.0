const {Discord,MessageEmbed,  } = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (message.deletable) message.delete();
        if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("Cool right? but you cant use it, ADMINS ONLY!!!").then(m => m.delete(300));
        let argsresult;
        let mChannel = message.mentions.channels.first()
        if(mChannel) {
            argsresult = args.slice(1).join(" ")
            mChannel.send(argsresult)
    } 
}
module.exports.config = {
    name: "say",
    description: "message thru the bot",
    usage: "!say",
    aliases: ['s']
}