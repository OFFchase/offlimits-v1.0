const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const msg = await message.channel.send(`🏓 Pinging....`);

    // Edit the message
    msg.edit(`🏓 Pong!\ ${Math.floor(msg.createdAt - message.createdAt)}ms`);
}


module.exports.config = {
    name: "ping",
    description: "ping",
    usage: "!ping",
    accessableby: "Members",
    aliases: []
}