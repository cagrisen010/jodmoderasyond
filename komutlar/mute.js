const { MessageEmbed } = require('discord.js');
const data = require('quick.db');
const ms = require('ms');

module.exports.run = async (client, message, args) => {
if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (!member) return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`${message.author}, lütfen bir kullanıcı etiketle !`))
  
let tarih = new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul"});
let mute = message.mentions.members.first() || message.guild.members.cache.find(r => r.id === args[0]);
if (!mute) { new MessageEmbed().setColor('0x800d0d').setDescription(`${message.author}, lütfen mute atmam gereken kullanıcı belirt !`);
} else {
   if (mute.roles.highest.position >= message.member.roles.highest.position) 
      {
        return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`Bu Kullanıcı Senden Üst/Aynı Pozisyonda.`));
      } else {
     let zaman = args[1]   
     .replace("sn", "s")
     .replace("dk", "m")
     .replace("sa", "h")
     .replace("gün", "d");
      if (!zaman) { message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`Lütfen Bir zaman dilimi belirtin.`));
      } else {
      let sebep = args[2]
      if(!sebep) return message.channel.send(new MessageEmbed().setColor('0x800d0d').setDescription(`Lütfen Bir sebep belirtiniz.`))  
        
      let zamandilimi = zaman
       .replace("m", " dakika")
       .replace("s", " saniye")
       .replace("h", " saat")
       .replace("d", " d");
        
       {
     
         client.channels.cache.get('763481961611395081').send(
new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL ({ dynamic: true}))
.setColor('ffdb55')
.setDescription(`<@${member.id}> (\`${member.id}\`) Metin Kanallarına Yazılışı Engellendi.

Yetkili: <@${message.author.id}> (\`${message.author.id}\`)

Zaman: \`${zamandilimi}\`

Sebep: (\`${sebep}\`)

Tarih: (\`${tarih}\`)
`))
mute.roles.add('763481961565782050')
message.react('✅')
} 
setTimeout(async function() {
mute.roles.remove('763481961565782050')
client.channels.cache.get('763481961611395081').send(
new MessageEmbed()
.setColor('#494459')
.setDescription(`<@${member.id}> (\`${member.id}\`) Metin Kanallarına Yazılış Engeli Kaldırıldı.

Yetkili: <@${message.author.id}> (\`${message.author.id}\`) 

Zaman: \`${zamandilimi}\`

Sebep: (\`${sebep}\`)
       
Tarih: (\`${tarih}\`)`)

);
}, ms(zaman));

      }}}}
        
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute"],
  permLevel: 0,
  name: "mute"
}

exports.help = {
  name: "mute"
};