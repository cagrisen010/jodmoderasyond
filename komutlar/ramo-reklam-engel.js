const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const ayarlar = require('./ayarlar.json');
const prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
   if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

const kanal = message.mentions.channels.first() || message.channel
const kanall = args[0]
if(!kanall) return message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp().setColor('0x800d0d').setDescription(`Sitemi Kullanmak İçin ${prefix}reklam-engel aç Yazmalısın!`))
if (kanall == 'aç') {
let açık = await db.fetch(`reklamengelramo_${kanal.id}`)
if (!açık) return message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp().setColor('0x800d0d').setDescription(`Reklam Engel Sistemi Zaten Aktif!`))

db.set(`reklamengelramo_${kanal.id}`,'açık')
message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp().setColor('0x348f36').setDescription(`Reklam Engel Sistemi Başarıyla Aktif Edildi !`))
}
if (kanall == 'kapat') {
let açık = await db.fetch(`reklamengelramo_${kanal.id}`)
if (!açık) return message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setTimestamp().setColor('0x800d0d').setDescription(`Reklam Engel Sistemi Zaten Aktif!`))
}
}