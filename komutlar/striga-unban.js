const { MessageEmbed } = require('discord.js')
const datab = require('quick.db')
const moment = require('moment')
exports.run = async (client, message, args) => {

if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

const banlog = message.guild.channel.cache.find(c => c.id === '763481961611395081')
  
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
  
  
let kullanici = message.mentions.users.first() || client.users.cache.get(args[0])
if(!kullanici)return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Kimin yasağını kaldırmam gerekiyorsa ID'sini gir.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
message.guild.unban(kullanici)
message.channel.send(new MessageEmbed().setDescription(`${message.author} tarafından ${kullanici} adlı kullanıcının sunucu yasağı kaldırıldı.`).setColor('0x0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic:true })).then(x => x.delete({ timeout: 5000})));
  
  
client.channels.cache.get(banlog).send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`**Yetkili:** ${message.author.id} (\`${message.author.id}\`)\n**Üye:** ${kullanici.user.tag} (\`${kullanici.user.id}\`)\n**Tarih:** \`${moment(Date.now()).format("DD")} ${aylar[moment(Date.now()).format("MM")]} ${moment(Date.now()).add(10,"hours").format("YYYY HH:mm:ss")}\` `));

  };

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unban", "yasak-kaldır"],
  permLvl: 0,
}

  exports.help = {
  name: 'unban'
}

  