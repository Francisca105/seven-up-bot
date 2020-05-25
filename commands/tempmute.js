const Discord = require('discord.js');
const ms = require("ms");

module.exports.run = async (client,  message, args) => {
    var logChannel = message.guild.channels.find("name", "punições");
    if (!logChannel) return message.channel.send("O canal não existe");
      

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("você não tem permissão para utilizar este comando. Acha que algo está errado?");
  if(!tomute) return message.channel.send(new Discord.RichEmbed().setAuthor("Opa! Um erro.").addField(`Erro:`, `Você deve mencionar um usuário para que ele seja mutado.`));
  let muterole = message.guild.roles.find(role => role.name === '[⚠️] Mutado');
  let verificado = message.guild.roles.find(role => role.name === '[✔️] Verificado');


  let mutetime = args[1];
  if(!mutetime) return message.channel.send(new Discord.RichEmbed().setAuthor("Opa! Um erro foi encontrado.").addField(`Erro:`, `Você deve especificar o tempo para que o usuário seja mutado.`));

  await(tomute.addRole(muterole.id)).then(tomute.removeRole(verificado.id))
    message.channel.send("Usuário mutado com sucesso!")
    logChannel.send(new Discord.RichEmbed().setAuthor("Um usuário foi mutado!").addField("Usuário:", `<@${tomute.id}>`).addField(`Tempo mutado:`, `${ms(ms(mutetime))}`))

  setTimeout(function(){
    tomute.addRole(verificado.id)
    tomute.removeRole(muterole.id);
    logChannel.send(new Discord.RichEmbed().setAuthor("Usuário desmutado!").addField(`Desmutado:`, ` <@${tomute.id}> foi desmutado.`));
  }, ms(mutetime));
  
}