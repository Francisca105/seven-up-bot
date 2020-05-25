const Discord = require('discord.js');
const c = require('../config.json')
module.exports.run = async (client, message, args) => {
    let ip = args[0]
    let porta = args[1]
    var fip = (`https://mcapi.us/server/status?ip=` + ip)    
    var fporta = (`https://mcapi.us/server/status?ip=` + ip + "&port=" + porta) 
    let msg = message.channel.send("Calculando o status do servidor...")
    if(!ip) return message.reply(` Para poderes executar este comando faz ${c.prefix}status *ip* (a porta é opcional)`)

    if(!porta) 

    fetch(fip)
    .then(res => res.json()).then(body => {
        body = JSON.parse(body)
        if(!body) return message.reply("Ocorreu um erro!")

        let mIpEmbed = new RichEmbed()
        .setColor(cyan)
        .setDescription(`Server Status!`)
        .addField("Estado", `${body.online}`)
        .addField("Players Online", `${body.players.now}`)
        .addField("Número máximo de players", `${body.players.max}`)
        .addField("Versões do servidor", `${body.server.name}`)
        .addField("Ip do servidor", ip )        
        .setImage(body.favicon)
        .setTimestamp()
        .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            msg.edit(mIpEmbed);

    if(porta)            
    fetch(fporta)
    .then(res => res.json()).then(body => {
        body = JSON.parse(body)
        
        if(!body) return message.reply("Ocorreu um erro!")

        let mPtEmbed = new RichEmbed()
        .setColor(cyan)
        .setDescription(`Server Status!`)
        .addField("Estado", `${body.online}`)
        .addField("Players Online", `${body.players.now}`)
        .addField("Número máximo de players", `${body.players.max}`)
        .addField("Versões do servidor", `${body.server.name}`)
        .addField("Ip do servidor", ip + porta)        
        .setImage(body.favicon)
        .setTimestamp()
        .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            msg.edit(mPtEmbed);
    })
    
})
    if(err) return message.reply(err)
}