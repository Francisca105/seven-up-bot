const Discord = require('discord.js');

const agree    = "✅";
const disagree = "❎";

exports.run = async (client, msg, args) => {
    let V = args.slice(0)
    .join(" ");
if (!V) return message.reply("Por favor escreva alguma coisa!!!")

  let VOTE_TEXT = await msg.channel.send("**Votação!** \n " + V);
  await VOTE_TEXT.react(agree);
  await VOTE_TEXT.react(disagree);

  const reactions = await VOTE_TEXT.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 100000000});
  

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("Votação encerrada:", "----------------------------------------\n" +
                                          "Votos (✅): " + `${NO_Count-1}\n` +
                                          "Votos (❎): " + `${YES_Count-1}\n` +
                                          "----------------------------------------", true)

            .setColor("0x#FF0000")

  await msg.channel.send({embed: sumsum});

};