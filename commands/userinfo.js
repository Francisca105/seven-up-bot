const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  try {    
    let user = message.mentions.members.first() || message.member;
    
    let embed = new Discord.RichEmbed()
    .setAuthor("Informacao do Membro", user.user.avatarURL)
    .setTitle(user.user.username)
    .setDescription(` `)
    .addField("Nome", ":hole: " + user.user.username, true)
    .addField("Id", ":key: " + user.id, true)
    .addField("Avatar", ":bookmark_tabs: " + user.user.avatarURL, true)
    .addField("Conta criada a...", ":calendar_spiral: " + user.user.createdAt, true)
    .addField("A jogar", ":video_game: " + user.user.presence.game || 'nada', true)
    .addField("Status", + user.user.presence.status.toUpperCase(), true)
    .addField("Nome + Tag", ":star2: " + user.user.tag, true)
    .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
    .setTimestamp()
    .setColor('#eeeeee');
    
    message.channel.send(embed);
  } catch (err) {
    message.channel.send('Houve um erro!\n' + err).catch();
  }
};
