const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json');
const moment = require('moment')
const prefix = ayarlar.prefix;

module.exports.run = async (client, message, args) => {

  
if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
const cezalırol = message.guild.roles.cache.find(r => r.id === '763481961565782049')
  
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

let zaman1 = args[1]
.replace("Saniye", "s")
.replace("Dakika", "m")
.replace("Saat", "h")
.replace("Gün", "d");
var vakit = zaman1
.replace("s", " Saniye")
.replace("m", " Dakika")
.replace("h", " Saat")
.replace("d", " Gün");
  
  
let kullanici = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let sebep = args.splice(1).join(" ")
let zaman = args.splice(2).join(" ")
if(!kullanici) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Bir kullanıcı etiketlemelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(!sebep) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Bir sebep belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(!zaman) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Bir zaman belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(message.member.roles.highest.position <= kullanici.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Etiketlenen kullanıcı sizden üst/aynı pozisyondadır.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(!kullanici.bannable)return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Etiketlenen kullanıcı cezalıya atılamaz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.author.id)return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Kendini sunucudan cezalıya atılamaz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === client.user.id)return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Bir botu sunucudan cezalıya atılamaz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
if(kullanici.id === message.guild.OwnerID) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Sunucu sahibini sunucudan cezalıya atılamaz.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(``));
 
  
  
kullanici.roles.add(cezalırol);
kullanici.roles.cache.forEach(r => {
kullanici.roles.remove(r.id)
db.set(`${message.guild.id}.jail.${kullanici.id}.roles.${r.id}`, r.id )})
client.channels.cache.get('763481961611395081').send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`**Yetkili:** ${message.author} (\`${message.author.id}\`)n\**Kullanıcı:** ${kullanici.user.tag} (\`${kullanici.user.id}\`)\n**Tarih:** \`${moment(Date.now()).add(10,"hours").format("YYYY HH:mm:ss")} ${moment(Date.now()).format("DD")} ${aylar[moment(Date.now()).format("MM")]}\` `));
message.react('✅')
setTimeout(async () =>{
kullanici.roles.remove(cezalırol)
client.channels.cache.get('763481961611395081').send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`**Kullanıcının Cezası Bitti.**n\ ${kullanici.user.tag} (\`${kullanici.user.id}\`)\n**Tarih:** \`${moment(Date.now()).add(10,"hours").format("YYYY HH:mm:ss")} ${moment(Date.now()).format("DD")} ${aylar[moment(Date.now()).format("MM")]}\` `));
}, ms(zaman));
            setTimeout(async () =>{
message.guild.roles.cache.forEach(async r => {
const i = await db.fetch(`${message.guild.id}.jail.${kullanici.id}.roles.${r.id}` )
if(i != r.id)  return ;
if(i){kullanici.roles.add(i)}
db.delete(`${message.guild.id}.jail.${kullanici.id}.roles.${r.id}`)
})
              }, ms(zaman));

  
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['jail'],
    permLevel: 0,
}

exports.help = {
      name: "jail"  
  
}