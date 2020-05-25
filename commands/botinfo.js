const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let embed = new Discord.RichEmbed()
    .setColor([113, 149, 100])
    .setAuthor("Informações sobre o Bot", client.user.avatarURL)
    .setDescription("Servidor da criadora [__aqui__](https://discord.gg/ugf3WXn)!")
    .addField("Servidores", ":desktop: " + client.guilds.size, true)
    .addField("Membros", ":joystick: " + client.users.size, true)
    .addField("Canais", ":page_facing_up: " + client.channels.size, true)
    .addField("Versão do Bot", "v1.0.0", true)
    .addField("Fui criado no dia", ":calendar: " + client.user.createdAt)
    .addField("Pais", ":flag_pt: Portugal", true)
    .addField("Recursos", ":books: discord.js", true)
    .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
    .setTimestamp();

  message.channel.send(embed);

}

