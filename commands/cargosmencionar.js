exports.run = (client, message, args) => {

message.channel.send(message.guild.roles.map(a => `<@&${a.id}>`).join(", "))
}