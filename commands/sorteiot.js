exports.run = async (client, message, args) => {
    const Discord = require('discord.js')
    message.delete()
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('você não possui permissão para executar esse comando.').then(msg => msg.delete(8000))

    let reason = args.slice(0).join(" ");
    let item = args.slice(1).join(" ")

    if (reason.length < 1) return message.reply("defina o tempo do sorteio.").then(msg => msg.delete(8000));

    var numero = args[0].replace(/m/g, "").replace(/h/g, "").replace(/d/g, "").replace(/s/g, "")
    var res = args[0].replace(`${numero}m`, 60 * Number(numero)).replace(`${numero}h`, 3600 * Number(numero)).replace(`${numero}d`, 86400 * Number(numero)).replace(`${numero}`, 1 * Number(numero)).replace(`${numero}s`, 1 * Number(numero))
    var conta = res
    var time = res / 60 + ` minuto(s)`; // tempo normal
    if (conta < 60) {
        time = res + ` segundos`
    } // Segundos
    if (conta == 2 - 1) {
        time = res + ` segundo`
    } // Segundos
    if (conta > 60 * 60 * 2 - 1) {
        time = res / 60 / 60 + ` horas`
    } // Minutos para horas
    if (conta == 3600) {
        time = res / 60 / 60 + ` hora`
    } // Minutos para horas
    if (conta > 86400 - 1) {
        time = res / 60 / 60 / 24 + ` dia`
    } // horas para dias
    if (conta > 86400 * 2 - 1) {
        time = res / 60 / 60 / 24 + ` dias`
    } // horas para dias
    if (conta < 10) return message.reply("O tempo minímo do sorteio é de 10 segundos.").then(msg => msg.delete(8000));
    if (!item) return message.reply("é necessário definir o item sorteado.").then(msg => msg.delete(8000))


    const embed = new Discord.RichEmbed()
        .setAuthor("Harmony - Sorteios", client.user.avatarURL)
        .setDescription(`Prêmio do sorteio: **${item}**
O sorteio acaba em: ${time}

**Reaja com 🎉 para participar do sorteio!**
`)
        .setThumbnail(client.user.avatarURL)
        .setFooter("Encerra em: ", message.author.avatarURL)
        .setColor("GREEN")
        .setTimestamp(Number(Date.now()) + Number(res) * 1000)
    message.channel.send(embed).then(g => {
        g.react("🎉")

        var collector = g.createReactionCollector((r, u) => (r.emoji.name === "🎉"));
        collector.on('end', r => {
            if (!r.first()) {
                const embed2 = new Discord.RichEmbed()
                    .setAuthor("Harmony - Sorteios", client.user.avatarURL)
                    .setDescription(`Ninguém participou do sorteio! 😢
Prêmio do sorteio: **${item}**`)
                    .setColor("DARK")
                    .setThumbnail(client.user.avatarURL)
                    .setFooter(`Sorteio finalizado!`)
                g.clearReactions()
                return g.edit(embed2);
            }

            var user = r.first().users.filter(user => !user.bot).random();
            const embed3 = new Discord.RichEmbed()
                .addField("Temos um ganhador!", `O ganhor foi: **${user}**
Prêmio para o vencedor: **${item}**`)
                .setThumbnail(client.user.avatarURL)
                .setColor("BLUE")
                .setAuthor("Harmony - Sorteios", client.user.avatarURL)
                .setFooter(`Sorteio completo!`)
            g.edit(embed3);
            message.channel.send(`:tada: ${user}, você ganhou o sorteio de **${item}**!`);
        });
        setTimeout(() => {
            collector.stop();
        }, Number(res) * 1000);
    });



}