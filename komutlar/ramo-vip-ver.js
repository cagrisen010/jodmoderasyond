const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    
if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('8b0606').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

const vipramo = message.guild.roles.cache.find(r => r.id === 'Vip Rolü İD')
 
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!member) return message.channel.send(new MessageEmbed().setColor('8b0606').setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(`Bir Kullanıcı Etiketlemelisin`))
  
member.roles.add(vipramo)
  
const ramoembed = new MessageEmbed()
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setDescription(`${member} Adlı Kullanıcıya ${vipramo} Vip Rolü Verildi.`)
.setColor('0x348f36')
message.channel.send(ramoembed)
}

exports.conf = {
    aliases: ['vip-ver'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'vip'
  };