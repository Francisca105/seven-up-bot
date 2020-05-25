const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR'))  return message.reply("Não tens permissão para esse comando!")
  
  let membro = message.mentions.members.first();
      if(!membro) return message.reply('Para poder executar o comando, tem que mencionar um membro!')

  let role = message.mentions.roles.first();
      if(!role) return message.reply('Para poder executar o comando, tem que mencionar um cargo!')

  if(membro.roles.has(role)) return message.reply("O membro mencionado já possui esse cargo.")
  
  let embed = new Discord.RichEmbed()
        .setTitle("Cargo Update")
        .setDescription(`Executado por: ${message.author.username}\n${membro} recebeu o cargo: <@&${role.id}> `)
        .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
        .setColor(`RANDOM`)
        .setTimestamp();

  membro.addRole(role).then(
  message.guild.channels.get('665373098324787201').send(embed),
  message.channel.send("Cargo adicionado ao usuário com sucesso!")
  )};
  