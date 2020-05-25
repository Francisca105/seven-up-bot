const Discord = require('discord.js');


module.exports.run = async (client,  message, args) => {
      

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("você não tem permissão para utilizar este comando. Acha que algo está errado?");
  if(!tomute) return message.channel.send(new Discord.RichEmbed().setAuthor("Opa! Um erro.").addField(`Erro:`, `Você deve mencionar um usuário para que ele seja mutado.`));
  let muterole = message.guild.roles.find(role => role.name === '[⚠️] Mutado');
  let verificado = message.guild.roles.find(role => role.name === '[✔️] Verificado');

  if(!muterole){
    try{
      muterole = await message.guild.createRole({ 
        name: "[⚠️] Mutado",
        color: "RANDOM",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }


  await(tomute.removeRole(verificado.id))  
  await(tomute.addRole(muterole.id));
  message.channel.send(new Discord.RichEmbed().setAuthor("Um usuário foi mutado!").addField("Usuário:", `<@${tomute.id}>`))
  message.channels.get('665373983465799693').send(new Discord.RichEmbed().setAuthor("Um usuário foi mutado!").addField("Usuário:", `<@${tomute.id}>`))

  
}