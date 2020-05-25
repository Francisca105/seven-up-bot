exports.run = (client, message, args) => {

message.channel.send("Todos os servidores onde o bot se encontra \n "+ client.guilds.map(g => message.channel.send(`${g.id} - ${g.name}`)))

}