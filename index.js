const Discord = require('discord.js');
const config = require("./config.json");

const client = new Discord.Client();
client.prefix = config.prefix;

const active = new Map();
//Atividade
client.on("ready", () => {
  console.log('Bot iniciado com ' + client.users.size + ' usuários, em ' + client.channels.size + ' canais de ' + client.guilds.size + ' servidores.');
  client.user.setPresence({ game: { name: 'fofura', type: 1, url: 'https://fantasyhosting.com.br/financeiro/aff.php?aff=93'} });
});
//Entrada-saida
client.on("guildMemberAdd", async member => {
  member.send("Bem-vindo");
  client.channels.get('665376887320608792').send(`😄 **${member.user.username}** entrou no servidor!`);
  client.guilds.get("664908878449737735").channels.get("665293571397517350").setName( 'Membros: '+ client.users.size);
});

client.on("guildMemberRemove", async member => {
  client.channels.get('665376887320608792').send(`__${member.user.username}__ saiu do servidor. 😢`);
  client.guilds.get("664908878449737735").channels.get("665293571397517350").setName( 'Membros: '+ client.users.size);
});

//Sistema de cargos por reação
client.on('raw', async dados => {
  if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
  if(dados.d.message_id != "665288847978004501") return

  let servidor = client.guilds.get("664908878449737735")
  let membro = servidor.members.get(dados.d.user_id)

  let cargo1 = servidor.roles.get('664909233111957514'),
      cargo2 = servidor.roles.get('607247608926306334'),
      cargo3 = servidor.roles.get('607248790856007701')

  if(dados.t === "MESSAGE_REACTION_ADD"){
      if(dados.d.emoji.id === "607334781285433385"){
          if(membro.roles.has(cargo1)) return
          membro.addRole(cargo1)
      }else if(dados.d.emoji.name === "✅"){
          if(membro.roles.has(cargo1)) return
          membro.addRole(cargo1)
      }else if(dados.d.emoji.name === "📠"){
          if(membro.roles.has(cargo3)) return
          membro.addRole(cargo3)
      }
  }
  if(dados.t === "MESSAGE_REACTION_REMOVE"){
      if(dados.d.emoji.id === "607334781285433385"){
          if(membro.roles.has(cargo1)) return
          membro.removeRole(cargo1)
      }else if(dados.d.emoji.name === "🛒"){
          if(membro.roles.has(cargo2)) return
          membro.removeRole(cargo2)
      }else if(dados.d.emoji.name === "📠"){
          if(membro.roles.has(cargo3)) return
          membro.removeRole(cargo3)
      }
  }

})

client.on("message", async message => {
  let msg = message.content.toLowerCase();
  if (message.author.bot) return undefined;
  let user = message.author;
//resposta a mencao
  
  if (message.content.startsWith(`<@${client.user.id}>`)){
    message.channel.send("Olá! Ainda não nos conhece-mos? Eu sou a Flan e estou aqui para te ajudar! O meu prefixo é **-** e podes fazer todos os meus comandos através do comando ``-ajuda``.")
  }
//Black list de palavras
let WordArray = message.content.split(" ")

let blaclist = ["fuck", "fuder", "foder", "foda-se", "fodasse", "puta", "otário", "otario", "cabrão", "cabrao", "caralho", "merda"]

for (var i = 0; i < blaclist.length; i++){
  if(WordArray.includes(blaclist[i])){
    message.delete(),
    message.reply("A sua mensagem foi apagada!\n Motivo: Na sua mensagem encontra-se uma palvra que está na nossa **Lista de Palavras Proibídas**!")
  }
}
//invit
//sistema de perguntas
  if (message.content.startsWith("Bot, como te chamas?")){
    message.channel.send(`Olá, eu chamo-me ${client.user.username}!`)
}
//invites
  let convite = /(discord.gg|discordapp.com)\/(invite)?/ig.test(message.content)
if(convite === true) {
if(message.member.hasPermission('BAN_MEMBERS')) return;
message.delete()
message.reply('Não pode divulgar convites de outros servidores aqui!!! 😡')
}
//SISTEMA DE INVITES

// Initialize the invite cache
const invites = {};

// A pretty useful method to create a delay without blocking the whole script.
const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  // "ready" isn't really ready. We need to wait a spell.
  wait(1000);

  // Load all invites for all guilds and save them to the cache.
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on('guildMemberAdd', member => {
  // To compare, we need to load the current invite list.
  member.guild.fetchInvites().then(guildInvites => {
    // This is the *existing* invites for the guild.
    const ei = invites[member.guild.id];
    // Update the cached invites for the guild.
    invites[member.guild.id] = guildInvites;
    // Look through the invites, find the one for which the uses went up.
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    // This is just to simplify the message being sent below (inviter doesn't have a tag property)
    const inviter = client.users.get(invite.inviter.id);
    // A real basic message with the information we need. 
    client.channels.get('665604625503879228').send(`${member.user.tag} entrou usando o convite ${invite.code} de ${inviter.tag}. (O convite já foi usado ${invite.uses} vezes desde que foi criado.)`);
  });
});
  if (message.content.indexOf(client.prefix) !== 0) return;
  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    
    let ops = {
      active: active
    }
    
    let commands = require(`./commands/${command}.js`);
    commands.run(client, message, args, ops);
    
  } catch (e) {
    console.log(e);
  } finally {}

});

client.login(config.token);