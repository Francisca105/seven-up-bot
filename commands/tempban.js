const Discord = require('discord.js');
const ms = require("ms");

module.exports.run = async (client,  message, args) => {     

    var logChannel = message.guild.channels.find("name", "punições");
    if (!logChannel) return message.channel.send("O canal não existe");
 

  let toban = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("você não tem permissão para utilizar este comando. Acha que algo está errado?");
  if(!toban) return message.channel.send(new Discord.RichEmbed().setAuthor("Opa! Um erro.").addField(`Erro:`, `Você deve mencionar um usuário para que ele seja banido.`));

  if(!toban.bannable)
return message.reply("Eu não posso banir esse usuário, ele pode ter um cargo maior que o meu.")

  let bantime = args[1];
  if(!bantime) return message.channel.send(new Discord.RichEmbed().setAuthor("Opa! Um erro foi encontrado.").addField(`Erro:`, `Você deve especificar o tempo para que o usuário seja banido.`));


  await(toban.ban())

      message.channel.send("Usuário banido com sucesso!"),
      logChannel.send(new Discord.RichEmbed().setAuthor("Um usuário foi banido!").addField("Usuário:", `<@${toban.id}>`).addField(`Tempo banido:`, `${ms(ms(bantime))}`))

  setTimeout(function(){
        toban.unban();
        logChannel.send(new Discord.RichEmbed().setAuthor("Usuário desbanido!").addField(`Desbanido:`, ` <@${toban.id}> foi desbanido.`));
  }, ms(bantime));

}