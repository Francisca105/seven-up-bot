const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) {

        return message.channel.send("Não tens permissão para executar este comando.").then(msg => msg.delete(15*1000))
    }

  if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) 
    return message.channel.send(`Não tenho permissão para executar este comando!`)

  
  message.guild.unban(args[0]).then(msg =>{message.channel.send(`${message.author}, Usuário desbanido com sucesso!`)})
    
  var logChannel = message.guild.channels.find("name", "punições");
  if (!logChannel) return message.channel.send("O canal não existe");

    logChannel.send(unban)

    var unban = new discord.RichEmbed()
    .setTitle("Unban")
    .setDescription("Usuário desbanido: <@" + args[0] + ">")
    .setFooter(message.author.username);
}