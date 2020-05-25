const discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
 

    const categoryId = "665379534308245514";
 

    var userName = message.author.username;

    var userDiscriminator = message.author.discriminator;
 

    var bool = false;
 

    message.guild.channels.forEach((channel) => {
 

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
 
            message.channel.send("Você já criou um ticket");
 
            bool = true;
 
        }
 
    });
 

    if (bool == true) return;
 
    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Oi, " + message.author.username)
        .setFooter("Canal de suporte criado");
 
    message.channel.send(embedCreateTicket);
 

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { 

        createdChan.setParent(categoryId).then((settedParent) => { 
           

            settedParent.overwritePermissions(message.guild.roles.find('name', "[✨] Ajudante"), { "READ_MESSAGES": true });
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            

            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new discord.RichEmbed()
                .setTitle("Olá, " + message.author.username.toString())
                .setDescription("Indique-nos a sua dúvida e aguarde por uma resposta.");
 
            settedParent.send(embedParent);

        var logChannel = message.guild.channels.find("name", "tickets");
        if (!logChannel) return message.channel.send("O canal não existe");

    logChannel.send(userName + "\ Abriu um ticket!")
        }).catch(err => {
            message.channel.send("Algo deu errado.");
        });
 
    }).catch(err => {
        message.channel.send("Algo deu errado.");
    });
 
}
 