const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  
  let embed = new Discord.RichEmbed()
     .setTitle("Sorteio")
     .setThumbnail("https://tenor.com/view/hotel-transylvania-bingo-skulls-gif-3524090")
     .setDescription("Clique no emoji 🎉 para participar do sorteio")
     .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
const msg = await message.channel.send(embed);
msg.react('🎉');//bot irá reagir na mensagem

const filter = (r, u) => r.emoji.name === '🎉' && u.equals(message.author), //filtro para pegar o emoji e autor da reacão
  collector = msg.createReactionCollector(filter, { max: 100, time: 60 * 10000 });
/*Em time: é tempo que irá durar o coletor, no caso aqui eu coloquei um minuto, mas voces podem colocar o tempo que quiserem,
E o max: é máximo de pessoas que podem reagir nesta mensagem, caso passe desse 'número' o coletor irá ser finalizado.
*/
collector.on('end', (collected) => {//evento end, quando acaba o coletor (1 min)
  const winner = collected.size === 0 ? 'Ninguém ganhou o sorteio.' : collected.first().users.filter((user) => !user.bot).random().toString(), //pegando o primeiro item da coleção e filtrando usuários que não sejam bot's e  dps pegando um usuário aleatório com a função random(), e o toString() menciona o usuário
    participants = collected.size === 0 ? 'Ninguém participou do sorteio' : collected.first().users.filter((user) => !user.bot).size;

  return message.channel.send(`O sorteio foi finalizado\nParticipantes: ${participants}\nGanhador: ${winner}`);
});
}