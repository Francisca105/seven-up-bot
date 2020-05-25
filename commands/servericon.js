const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed()

    .setImage(message.guild.displayAvatarURL)
    .setColor([54, 57, 64])
    .setFooter(message.author.username, client.user.avatarURL)
    .setTimestamp();
  
  message.channel.send(embed);
}
