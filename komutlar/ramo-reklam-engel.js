const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
     if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
const kanal = message.mentions.channels.first() || message.channel
const ramo = args[0]
if (!ramo) return message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x800d0d').setDescription(`Reklam Engel Sistemini Açmak İçin **${prefix}reklam-engel aç** Yazmalısın`))
  if (ramo == 'aç') { 
  let açıkkapalı = await db.fetch(`reklamengelramo_${kanal.id}`)
  if(açıkkapalı) return message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x800d0d').setDescription(`Reklam Engel Sistemi Zaten Aktif!`).then(m => m.delete({timeout: 7000})))
    
db.set(`reklamengelramo_${kanal.id}`,'açık')
message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x348f36').setDescription(`Reklam Engel Sistemi Başarıyla aktif edildi.`).then(m => m.delete({timeout: 7000})))
  }
  
  if (ramo == 'kapat') {
  let açıkkapalı = await db.fetch(`reklamengelramo_${kanal.id}`)
  if(!açıkkapalı) return message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x800d0d')(`Reklam Engel Sistemi Zaten Aktif Değil!`).then(m => m.delete({timeout: 7000})))
    
db.delete(`reklamengelramo_${kanal.id}`)
message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x800d0d')(`<a:nullsyes:776103575167434802> Reklam engel sistemi başarıyla bu kanalda/belirttiğiniz kanalda deaktif edildi!`).then(m => m.delete({timeout: 7000})))
}
};
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['reklamengel','reklam-engelleme'],
  permLevel: 3
};
exports.help = {
  name: 'reklam-engel',
  description: 'reklam engellemeyi açar',
  usage: 'Code-WENZY'
}