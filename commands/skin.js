const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
    let player = args.slice(0)
                .join(" ");
        if (!player) return message.reply("Por favor escreva alguma coisa!!!")
    let url = `https://minotar.net/body/` + player + `/100.png`
      
  
  message.channel.send("Era isto que procuravas?\n" + url);

    }
