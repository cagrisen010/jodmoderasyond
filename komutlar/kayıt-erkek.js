const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["783848574601134080", "783839815337508914"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(`Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.`)
  
const erkek = message.guild.roles.cache.find(r => r.id === "783844486659702844")
const xy = message.guild.roles.cache.find(r => r.id === "783844486992232449")
const kayıtsız = message.guild.roles.cache.find(r => r.id === "783846167691395082")
const reglog = message.guild.channels.cache.find(c => c.id === "784093776523690014")
const onay = client.emojis.cache.get("784096556945113138")
  
    const rol = "783844484449435698";
  
    db.set(`rol.${message.guild.id}`, rol)
    let rol1 = db.fetch(`rol.${message.guild.id}`)

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(`Bir Kullanıcı Belirt.`)
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu Kullanıcı Sizle Üst/Aynı Pozisyondadır.`)
const x = message.guild.member(member)

let tag = '⍭'
let isim = args[1]
let yas = Number(args[2])
if(!isim) return message.channel.send(`Bir İsim Belirt`)
if(!yas) return message.channel.send(`Bir Yaş Belirt`)

let bilgi = db.get(`yetkili.${member.id}`);  
db.add(`yetkili.${message.author.id}.erkek`,1 )
db.add(`yetkili.${message.author.id}.toplam`, 1)  
let toplami = db.fetch(`yetkili.${message.author.id}.toplam`)  

message.react(onay)
x.setNickname(`${tag} ${isim} | ${yas}`)
x.roles.add(erkek)
x.roles.add(xy)
x.roles.remove(kayıtsız)
  
const stg = new Discord.MessageEmbed()
.setThumbnail(member.user.avatarURL({ dynamic: true }))
.setAuthor(member.user.username)
.addField(`Yetkili`, `${message.author}`, true)  
.addField(`Kullanıcı`, `${member}`, true)  
.addField(`Roller`, `${erkek}, ${xy}`, true)  
.addField(`İsim`, `${tag} ${isim} | ${yas}`, true)   
.addField(`Kanal`, `${message.channel}`, true)  
reglog.send(stg)



    db.push(`isim.${message.guild.id}`, {
        userID: member.id,
        name : isim,
        age: yas
       })


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

