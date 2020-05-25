const Discord = require('discord.js')
 
exports.run = async (client, message, args) => {

        const helpinicial = new Discord.RichEmbed()
            .setTitle(`| **Menu de Ajuda** | `)
            .setColor("0x0000FF")
            .setThumbnail(message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription("🎉| Reaja de acordo com a categoria do comando desejado |🎉:")
            .addField("Comandos de utilidade em geral", "📜")            
            .addField("Comandos de diversâo", "😜") 
            .addField("Comandos de jogos", "🎮")    
            .addField("Comandos do discord", "🎛️")                   
            .addField("Comandos de moderaçâo", "🔧")
            .addField("Comandos da staff", "👮‍♀️")            
            .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
        message.channel.send(helpinicial).catch(e => message.channel.send(helpinicial))
            .then(async (msg) => {
                await msg.react("📜")
                await msg.react("😜")          
                await msg.react("🎮")  
                await msg.react("🎛️")    
                await msg.react("👮‍♀️")
                await msg.react("🔧")                
                await msg.react("🔙")
                const filter = (reaction, user) => ['📜', '🔙', '😜', '🔧', '👮‍♀️', '🎛️', '🎮'].includes(reaction.emoji.name) && user.id === message.author.id
                const collector = msg.createReactionCollector(filter, { time: 90000 })
                collector.on("collect", r => {
             
                    switch (r.emoji.name) {
                        case '🔧':
                            const embedmod = new Discord.RichEmbed()
                            .setTitle(`| **Menu de Ajuda** | `)
                                .setColor("0x0000FF")
                                .setThumbnail(message.author.displayAvatarURL)
                                .setTimestamp()
                                .setDescription("<a:aVerified:670962155524194423>| Meus Comandos de moderação:")
                                .addField("Ban", "Ao executares este comando irá banir uma pessoa.")
                                .addField("Clear", "Limpa as mensagens do chat.")
                                .addField("Kick", "Irá expulsar um usuário do servidor.")
                                .addField("Mute", "Irá mutar permanentemente um user.")
                                .addField("Tempban", "Bane temporáriamente uma pessoa.")
                                .addField("Tempmute", "Muta temporáriamente uma pessoa.")
                                .addField("Unban", "Desbane uma pessoa.")
                                .addField("Unmute", "Desmuta um usuário.")
                                .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
                            msg.edit(embedmod)
                            break;
                            case '📜':
                                const embedgerl = new Discord.RichEmbed()
                                .setTitle(`| **Menu de Ajuda** | `)
                                    .setColor("0x0000FF")
                                    .setThumbnail(message.author.displayAvatarURL)
                                    .setTimestamp()
                                    .setDescription("<a:loading:670962115103686659>| Meus Comandos de moderação :")
                                    .addField("Ticket", "Abre um ticket de suporte!")
                                    .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
                                msg.edit(embedgerl)
                                break;                            
                        case '👮‍♀️':
                            const embedstaff = new Discord.RichEmbed()
                            .setTitle(`| **Menu de Ajuda** | `)
                                .setColor("0x0000FF")
                                .setThumbnail(message.author.displayAvatarURL)
                                .setTimestamp()
                                .setDescription("<a:Pin:670962168149311509>| Meus Comandos da staff:")
                                .addField("Addcargo", "Para adicionar um cargo a um membro do servidor")
                                .addField("Anuncio", "Faz um anúncio no canal onde o comando foi realizado.")
                                .addField("Anunciopv", "Faz um anúncio no privado de todos os membros.")                                    
                                .addField("Delcargo", "Para remover um cargo a um membro do servidor")
                                .addField("Votacao", "Faz uma votação no servidor.")
                                .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)


                                msg.edit(embedstaff)
                                break;                            
                        case '😜':
                            const embedfun = new Discord.RichEmbed()
                            .setTitle(`| **Menu de Ajuda** | `)
                                .setColor("0x0000FF")
                                .setThumbnail(message.author.displayAvatarURL)
                                .setTimestamp()
                                .setDescription("<a:Neon_Heart:670962164323844096>| Meus Comandos de diversão:")
                                .addField("Beijar", "Beija uma pessoa <3.")
                                .addField("Corrida", "Desafia um membro a competir numa corrida!")
                                .addField("Fakemsg", "Manda uma mensagem de um usuário qualquer com o texto que quiseres!")
                                .addField("Moeda", "Manda a moeda ao ar!")
                                .addField("Numero", "Ao executar o comando, irá enviar um número aleatório.")
                                .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
                                    msg.edit(embedfun)
                                    break;
                        case '🎛️':
                            const embedds = new Discord.RichEmbed()
                            .setTitle(`| **Menu de Ajuda** | `)
                            .setColor("0x0000FF")
                            .setThumbnail(message.author.displayAvatarURL)
                            .setTimestamp()
                            .setDescription("<a:discord:670962100473954344>| Meus Comandos do discord:")
                            .addField("Avatar", "Manda o teu avatar ou de um membro do servidor.")
                            .addField("Botinfo", "Manda as informações do bot.")
                            .addField("Convite", "Manda um convite do servidor no chat.")
                            .addField("Ping", "Manda o ping da api e do bot.")
                            .addField("Reiniciar", "Reinicia o bot.")  
                            .addField("Servericon", "Manda o icon do servidor.")
                            .addField("Serverinfo", "Manda as informações do servidor.")   
                            .addField("Sugestao", "Envia uma sugestão para o servidor!")  
                            .addField("Userinfo", "Manda as informações de um usuário.")                
                            .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
                            
                                msg.edit(embedds)    
                            break;
                                case '🎮':
                                    const embedjg = new Discord.RichEmbed()
                                    .setTitle(`| **Menu de Ajuda** | `)
                                        .setColor("0x0000FF")
                                        .setThumbnail(message.author.displayAvatarURL)
                                        .setTimestamp()
                                        .setDescription("<a:Minecraft:670962098268012554>| Meus Comandos de jogos:")
                                        .addField("Skin", "Digita um nick e o bot manda a skin de minecraft.")
                                        .setFooter("Lojinha da Fran © 2020", client.user.avatarURL)
        
        
                                        msg.edit(embedjg)
                                        break;                                              
                        break;
                        case '🔙':
                                    msg.edit(helpinicial)                                  
                    }

                })})}         
