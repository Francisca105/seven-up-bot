const Discord = require("discord.js")

exports.run = async (client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Você não tem permissão!')  
  
   let BReason = args.slice(0)
                .join(" ");
        if (!BReason) return message.reply("Por favor escreva alguma coisa!!!")
        let C = message.channel;
        message.guild.members.forEach((f, i) => {

                setTimeout(function () {
                        message.guild.member(f)
                                .send(
                          embed
                        );
                }, 0)
                

        })
  let embed = new Discord.RichEmbed()
    .setAuthor("AVISO")
    .setDescription(BReason)
    .setColor([0, 153, 255])
    .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
    .setTimestamp();
  
  message.channel.send("Mensagem enviada para todos!");
}