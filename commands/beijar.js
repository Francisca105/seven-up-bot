const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Tens de mencionar alguém!")

  try {
    message.channel.send(`${message.author} beijou ${member}`, new Discord.Attachment('https://tenor.com/view/kiss-love-anime-gif-12837192.gif'))
  } catch (err) {
    message.channel.send('Houve um erro!\n' + err).catch();
  }
};