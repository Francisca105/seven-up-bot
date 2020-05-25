exports.run = async (client, message, args) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! :ping_pong:\nLatency é **${m.createdTimestamp - message.createdTimestamp}**ms.\nAPI Latency é **${Math.round(client.ping)}**ms.`);
  }