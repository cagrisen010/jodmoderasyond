const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["783848574601134080", "783839815337508914"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.`))
  
const erkek = message.guild.roles.cache.find(r => r.id === "783844486659702844")
const xy = message.guild.roles.cache.find(r => r.id === "783844486992232449")
const kayıtsız = message.guild.roles.cache.find(r => r.id === "783846167691395082")
const reglog = message.guild.channel.cache.find(c => c.id === "784093776523690014")
  
  
const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`Bir Kullanıcı Belirt.`))
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`Bu Kullanıcı Sizle Üst/Aynı Pozisyondadır.`))
const x = message.guild.member(member)

let tag = 'TAG'
let isim = args[1]
let yas = Number(args[2])
if(!isim) return message.channel.send(new Discord.MessageEmbed().setColor('GOLD').setDescription(`Bir İsim Belirt`))
if(!yas) return message.channel.send(new Discord.MessageEmbed().setColor('GOLD').setDescription(`Bir Yaş Belirt`))

let bilgi = db.get(`yetkili.${member.id}`);  
db.add(`yetkili.${message.author.id}.erkek`,1 )
db.add(`yetkili.${message.author.id}.toplam`, 1)  
let toplami = db.fetch(`yetkili.${message.author.id}.toplam`)  

message.react('✅')
  
const stg = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true }))
.addField(`\`Yetkili\``, `${message.author}`, true)  
.addField(`\`Kullanıcı\``, `${member}`, true)  
.addField(`\`Roller\``, `${erkek}, ${xy}`, true)  
.addField(`\`İsim\``, ``, true)  
.addField(`\`Kayıt Sorgu\``, ``, true)  
.addField(`\`Kanal\``, ``, true)  
reglog.send(stg)






}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["erkek", "e", "man", "boy"],
    permLevel: 0
};

exports.help = {
    name: "erkek"
}

