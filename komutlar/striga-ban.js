const { MessageEmbed } = require('discord.js');
const data = require('quick.db')
const moment = require('moment')

exports.run = async (client, message, args) => {

if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })))
  
let tumaylar = {
"01": "Ocak",  
"02": "Şubat", 
"03": "Mart",  
"04": "Nisan",  
"05": "Mayıs", 
"06": "Haziran", 
"07": "Temmuz",
"08": "Ağustos", 
"09": "Eylül", 
"10": "Ekim", 
"11": "Kasım", 
"12": "Aralık", 
}
let aylar = tumaylar;  
  
if (args[0] && (args[0].includes('bilgi') || args[0].includes('info'))){
if(!args[1] || isNaN(args[1])) return message.channel.send(new MessageEmbed().setDescription(`Geçerli bir ban yemiş kullanıcı ID'si belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
return message.guild.fetchBan(args.slice(1).join(' ')).then(({ user, reason }) => message.channel.send(new MessageEmbed().setDescription(`**Banlanan Üye:** ${user.tag} (\`${user.id}\`)\n**Ban Sebebi:** ${reason ? reason : "Belirtilmemiş!"}`))).catch(err => message.channel.send(new MessageEmbed().setDescription("Belirtilen ID numarasına sahip bir ban bulunamadı!")).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp().then(x => x.delete({timeout: 5000})));
}
  
let kullanici = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let sebep = args.splice(1).join(" ")
if(!kullanici) return message.channel.send(new MessageEmbed().setDescription(`Bir kullanıcı etiketlemelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(!sebep) return message.channel.send(new MessageEmbed().setDescription(`Bir sebep belirt.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(message.member.roles.highest.position <= kullanici.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`Etiketlenen kullanıcı sizden üst/aynı pozisyondadır.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(!kullanici.bannable)return message.channel.send(new MessageEmbed().setDescription(`Etiketlenen kullanıcı banlanamaz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.author.id)return message.channel.send(new MessageEmbed().setDescription(`Kendini sunucudan banlayamazsın.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === client.user.id)return message.channel.send(new MessageEmbed().setDescription(`Bir botu banlayamazsın`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed().setDescription(`Sunucu sahibini banlayamazsın.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
kullanici.ban({reason: sebep}).then(x => message.react('✅')).catch();
     
message.channel.send(new MessageEmbed().setDescription(`${message.author} tarafından ${kullanici} \`${sebep}\` Sebebiyle Sunucudan Yasaklandı.`)) 
client.channels.cache.get('763481961611395081').send(new MessageEmbed().setDescription(`**Banlayan Yetkili:** ${message.author.id} (\`${message.author.id}\`)\nBanlanan Üye ${kullanici.user.tag} (\`${kullanici.user.id}\`)\n${moment(Date.now()).format("DD")} ${aylar[moment(Date.now()).format("MM")]} ${moment(Date.now()).add(10,"hours").format("YYYY HH:mm:ss")}\`\``)).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('0x50b16e').setTimestamp();
}

exports.conf = {
    aliases: ['yasakla'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ban'
  };