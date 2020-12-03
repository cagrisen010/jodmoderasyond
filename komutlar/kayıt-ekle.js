const Discord = require('discord.js')
const db = require('quick.db')
const kayıt = {
    tag: '𐊚',
    tag2: '✦',
};
exports.run = async (client, message, args) => {
  
if(!["783848574601134080", "783839815337508914"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(`Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.`)

const onay = client.emojis.cache.get("784096556945113138")

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(`Bir Kullanıcı Belirt.`)
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu Kullanıcı Sizle Üst/Aynı Pozisyondadır.`)
let sayi = args.slice(1).join(" ")
if(!sayi) message.channel.send(`Bir Sayı Belirt.`)
  
let bilgi = db.get(`yetkili.${member.id}`);  
db.add(`yetkili.${message.author.id}.erkek`, +sayi)
db.add(`yetkili.${message.author.id}.toplam`, +sayi)  
  
let toplami = db.fetch(`yetkili.${message.author.id}.toplam`)  

message.react(onay)

message.channel.send(new Discord.MessageEmbed().setAuthor(`Kayıt Sıfırlandı`).setDescription(`${member} Adlı Kullanıcının Kayıtlarına ${sayi} Eklendi, <@${message.author.id}> Tarafından Ekletildi.`))

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kayıt-erkek-ekle", "kayıtlara-erkek-ekle", "db-erkek", "dberkekekle", "db-erkek"],
    permLevel: 0
};

exports.help = {
    name: "kayıt-ekle-erkek"
}

