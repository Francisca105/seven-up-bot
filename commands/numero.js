exports.run = async (client, message, args, level) => {
    try {
      let number = Math.floor(Math.random() * 50);
      
      message.channel.send('**Número escolhido:** ' + number);
    } catch (err) {
      message.channel.send('Houve um erro!\n' + err).catch();
    }
  };