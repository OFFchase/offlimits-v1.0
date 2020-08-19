const Discord = require('discord.js');
const { prefix, token } = require('./botsettings.json');
const { readdirSync } = require('fs');
const bot = new Discord.Client();
const delay = (msec) => new Promise((response) => setTimeout(response, msec));
const name = "John";

bot.on('message', async msg => {
    if(msg.author.bot || !msg.content.startsWith(prefix)) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`);
        commandFile.run(bot, msg, args, name);
    } catch(e) {
        return;
    }
})

bot.on('ready', async () => {
    const files = readdirSync('./commands/');
    files.forEach(file => {
        if(file.endsWith('.js')){
            console.log(`Loaded ${file}`);
        }
    })
    console.log(`Loaded ${files.length} commands.`)
    await delay(2000);
    console.log(`Everything is loaded and the bot works with a latency of ${bot.ws.ping}ms.`)
})

bot.login(token);