const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {
    let embed = new Discord.RichEmbed()
    .setTitle(message.guild.name)
    .setDescription(`Informações do servidor!`)
    .setThumbnail(message.guild.iconURL)
    .addField("Dono", ":crown: " + message.guild.owner, true)   
    .addField("Id do servidor", + message.guild.id, true)
    .addField("Criado a...", ":calendar: " + message.guild.createdAt, true)
    .addField("Membros", ":joystick: " + message.guild.memberCount, true)
    .addField("Acrónimo", ":paperclip: " + message.guild.nameAcronym, true)
    .addField("Região", ":map: " + message.guild.region, true)
    .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
    .setTimestamp()
    .setColor(105, 105, 105);
    
    message.channel.send(embed);
  } catch (err) {
    message.channel.send('Houve um erro!\n' + err).catch();
  }
};