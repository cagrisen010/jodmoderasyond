const { Discord , MessageEmbed } = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
db.set(`kufur_${message.guild.id}`, "acik")
message.channel.send(new MessageEmbed().setDescription(`${message.author} Sunucuda küfür filtresi \`açıldı\`.`).setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  return
}
if (args[0] === 'kapat') {
db.delete(`kufur_${message.guild.id}`)
message.channel.send(new MessageEmbed().setDescription(`${message.author} Sunucuda küfür filtresi \`kapatıldı\`.`).setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
return
}
message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu çalıştırmak için \`aç\` veya \`kapat\` demen gerekiyor.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-ayarla',
 description: '',
 usage: ''
};