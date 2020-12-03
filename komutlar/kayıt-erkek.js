const Discord = require('discord.js')
const db = require('quick.db')
const kayıt = {
    tag: '𐊚',
    tag2: '✦',
};
exports.run = async (client, message, args) => {
  
if(!["783848574601134080", "783839815337508914"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(`Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.`)
  
const erkek = message.guild.roles.cache.find(r => r.id === "783844486659702844")
const xy = message.guild.roles.cache.find(r => r.id === "783844486992232449")
const kayıtsız = message.guild.roles.cache.find(r => r.id === "783846167691395082")
const reglog = message.guild.channels.cache.find(c => c.id === "784093776523690014")
const genelchat = message.guild.channels.cache.find(g => g.id === "783953976748015616")
const onay = client.emojis.cache.get("784096556945113138")
  
    const rol = "783844486659702844";
  
    db.set(`rol.${message.guild.id}`, rol)
    let rol1 = db.fetch(`rol.${message.guild.id}`)

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(`Bir Kullanıcı Belirt.`)
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu Kullanıcı Sizle Üst/Aynı Pozisyondadır.`)
const x = message.guild.member(member)

let isim = args[1]
let yas = Number(args[2])
if(!isim) return message.channel.send(`Bir İsim Belirt`)
if(!yas) return message.channel.send(`Bir Yaş Belirt`)
  
const Tagisim = `${member.user.username.includes(kayıt.tag) ? kayıt.tag : kayıt.tag2} ${isim} | ${yas}`;
  
let bilgi = db.get(`yetkili.${member.id}`);  
db.add(`yetkili.${message.author.id}.erkek`,1 )
db.add(`yetkili.${message.author.id}.toplam`, 1)  
let toplami = db.fetch(`yetkili.${message.author.id}.toplam`)  

message.react(onay)
x.setNickname(`${Tagisim}`)
x.roles.add(erkek)
x.roles.add(xy)
x.roles.remove(kayıtsız)
  
const stg = new Discord.MessageEmbed()
.setThumbnail(member.user.avatarURL({ dynamic: true }))
.setAuthor(member.user.username)
.addField(`Yetkili`, `${message.author}`, true)  
.addField(`Kullanıcı`, `${member}`, true)  
.addField(`Roller`, `${erkek}, ${xy}`, true)  
.addField(`İsim`, `${Tagisim}`, true)   
.addField(`Kanal`, `${message.channel}`, true)  
reglog.send(stg)

genelchat.send(`<@${member.id}>, Aramıza Hoş Geldin ! Umarım Keyifli Vakitler Geçirirsin.`)

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

