const Discord = require("discord.js")

exports.run = async (client, message, args) => {
   let S = args.slice(0)
                .join(" ");
        if (!S) return message.reply("Por favor escreva alguma coisa!!!")
  
  let embed = new Discord.RichEmbed()
    .setAuthor("Sugestão")
    .setDescription(S)
    .setColor([0, 153, 255])
    .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
    .setTimestamp();
  
    const m = await message.guild.channels.get("667808378516668426").send(embed);
    m.react("✅");
    m.react("❎");

    
}