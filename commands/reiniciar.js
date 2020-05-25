const Discord = require('discord.js')

exports.run = async (bot, message) => {

    if (message.author.id !== '290092310002270218') return;
    resetBot(message.channel)
    async function resetBot(channel) {
        let token = bot.token;
        await message.react('😋')
            .then(message => bot.destroy())
            .then(message => bot.destroy())
            .then(() => bot.login(token));
            message.channel.send(`O bot foi reiniciado com sucesso pelo usuario **${message.author.username}**`)
            console.log("Bot reiniciado.")
    }
}