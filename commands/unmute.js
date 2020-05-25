const Discord = require('discord.js');

module.exports.run = async (client,  message, args) => {
      

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("você não tem permissão para utilizar este comando. Acha que algo está errado?");

  if(!tomute) return message.channel.send("Você deve mencionar um usuário para que ele seja mutado.")
  let muterole = message.guild.roles.find(role => role.name === '[⚠️] Mutado');
  let verificado = message.guild.roles.find(role => role.name === '[✔️] Verificado');


  await(tomute.addRole(verificado.id))  
  await(tomute.removeRole(muterole.id));
  message.channel.send(new Discord.RichEmbed().setAuthor("Um usuário foi desmutado!").addField("Usuário:", `<@${tomute.id}>`))
  message.channels.get('665373983465799693').send(new Discord.RichEmbed().setAuthor("Um usuário foi desmutado!").addField("Usuário:", `<@${tomute.id}>`))

}