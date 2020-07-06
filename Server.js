const Discord = require("discord.js");
const client = new Discord.Client();
 
// Set the prefix
let prefix = "!";


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  
  client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return; // If message doesn't start with the prefix it returns.
  // Or if the message author is a bot. if (message.author.bot), usually returns "false".

  const args = message.content.slice(prefix.length).split(' '); // Argument. 
  const cmd = args.shift().toLowerCase(); // Command.
  
  if (cmd === 'say') {
let word = args.slice(0).join(' ');
message.delete();
message.channel.send(word)
}

if (cmd === 'help') {
message.channel.send("The only thing i can do is talk. Do !say {your text} to make me talk!")
}

if (cmd === 'embed'){
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Embed")
.setDescription("How did you find this. It was not shown in the !help command.... Well this is an embed")
message.channel.send(embed)
}

client.login("YOUR BOTS TOKEN");
