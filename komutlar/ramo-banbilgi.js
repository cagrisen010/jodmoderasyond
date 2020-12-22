const { MessageEmbed, Discord } = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
  let ramo = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if(!args[0] || isNaN(args[0])) return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`Bir Kullanıcı İdsi Belirtmelisin`))
  try {
    message.guild.fetchBan(args.slice(0).join(' '))
    .then(({ user, reason }) => message.channel.send(new MessageEmbed().setAuthor(user.tag, user.avatarURL()).setColor('RANDOM').addField('Banlanan Kullanıcı', `${user.tag} \`(${user.id})\``).setDescription(`**Ban Sebebi:** ${reason}`)))
  } catch(err) { message.reply('**Belirtilen ID numarasına sahip members.banlanmış kullanıcı bulamadım veya bir sorun oluştu!**') }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['members.banbilgi', 'members.baninfo'],
  permLevel: 0
};

exports.help = {
  name: 'ban-bilgi',
  kategori: 'yetkili'
};