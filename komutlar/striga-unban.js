const { MessageEmbed } = require('discord.js')
const datab = require('quick.db')

exports.run = async (client, message, args) => {

if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
  
let kullanici = message.mentions.users.first() || client.users.cache.get(args[0])
if(!kullanici)return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Kimin yasağını kaldırmam gerekiyorsa ID'sini gir.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
message.guild.unban(kullanici)
message.channel.send(new MessageEmbed().setDescription(`${message.author} tarafından ${kullanici} adlı kullanıcının sunucu yasağı kaldırıldı.`).setColor('0x0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic:true })).then(x => x.delete({ timeout: 5000})));
  
  
  
  
  
}