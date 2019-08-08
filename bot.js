const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("609142638981152783")
setInterval(function() {
channel.send(`ana el pro by ahmed dragonov`);
}, 30)
})

client.login(process.env.BOT_TOKEN);