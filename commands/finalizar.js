const discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {

    var PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI('acfa47fe6ee47eb786d04ae83d6496cd');

    const categoryId = "665379534308245514";
 

    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Por favor, coloque este comando em um canal de ticket.");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle(message.channel.name)
        .setDescription("O ticket foi marcado como **completo**.")
        .setFooter(message.author.username);


    var logChannel = message.guild.channels.find("name", "tickets");
    if (!logChannel) return message.channel.send("O canal não existe");
 
    logChannel.send(embedCloseTicket);
 
}