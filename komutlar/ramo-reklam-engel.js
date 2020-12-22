const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
   if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

const kanal = message.mentions.channels.first() || message.channel
const kanall = args[0]
if(!kanall) return message.channel.send(new MessageEmbed().setDescription(`Sitem`))
}