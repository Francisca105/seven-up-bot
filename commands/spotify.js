const fs = require("fs")
const discord = require("discord.js")

exports.run = (client, message, args) => {

    fs.readFile('./spotify.txt', function(err, data) {
        if(err) throw err;
        data = data + '';

        let random = contas[Math.random()*contas]


            message.author.send("**Conta de Spotify** \n ||http://ellevolaw.com/3EfB||")
            message.channel.send("Conta enviada com sucesso!")
    })
}

