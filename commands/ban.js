const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {
     if(!message.member.hasPermission('BAN_MEMBERS')) {
        return message.channel.send("Não possuis permissão para executar esse comando!")
    }
    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Por favor mencione um usuário válido !")
    if(!member.bannable)
      return message.reply("Eu não posso banir esse usuário, ele pode ter um cargo maior que o meu.")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Nenhuma razão fornecida"
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido ao: erro ${error}`))

      message.channel.send(`${message.author}, o usuário foi banido com sucesso!`)

      let pEmbed = new Discord.RichEmbed()
          .setTitle(":hammer: Ban")
          .addField("Membro Banido:", `${member.user.tag}`)
          .addField("Banido por:", `${message.author.tag}`)
          .addField("Motivo:", `${reason}`)
          .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
          .setColor("DARK_RED").setTimestamp()

          message.channels.get('665373983465799693').send(pEmbed)
          
}