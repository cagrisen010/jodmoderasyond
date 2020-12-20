const { MessageEmbed } = require('discord.js');
const data = require('quick.db')
const moment = require('moment')

exports.run = async (client, message, args) => {

if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed.setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })))
  
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

let trueembed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(client.renkler.yesil).setTimestamp().then(x => x.delete({timeout: 5000}));;
let falseembed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor(client.renkler.kirmizi).setTimestamp().then(x => x.delete({timeout: 5000}));;

if (args[0] && (args[0].includes('bilgi') || args[0].includes('info'))){
if(!args[1] || isNaN(args[1])) return message.channel.send(falseembed.setDescription(`Geçeerli bir ban yemiş kullanıcı ID'si belirtmelisin.`)) 
return message.guild.fetchBan(args.slice(1).join(' ')).then(({ user, reason }) => message.channel.send(trueembed.setDescription(`**Banlanan Üye:** ${user.tag} (\`${user.id}\`)\n**Ban Sebebi:** ${reason ? reason : "Belirtilmemiş!"}`))).catch(err => message.channel.send(falseembed.setDescription("Belirtilen ID numarasına sahip bir ban bulunamadı!")).then(x => x.delete({timeout: 5000})));
}
  
let kullanici = message.mentions.member.first() || message.guild.members.cache.get(args[0])
let sebep = args.splice(1).join(" ")
if(!kullanici) return message.channel.send(new falseembed.setDescription(`Bir kullanıcı etiketlemelisin.`)).then(x => x.delete({timeout: 5000}));
if(!sebep) return message.channel.send(new falseembed.setDescription(`Bir sebep belirt.`)).then(x => x.delete({timeout: 5000}));
if(message.member.roles.highest.position <= kullanici.roles.highest.position) return message.channel.send(new falseembed.setDescription(`Etiketlenen kullanıcı sizden üst/aynı pozisyondadır.`)).then(x => x.delete({timeout: 5000}));
if(!kullanici.bannable)return message.channel.send(new falseembed.setDescription(`Etiketlenen kullanıcı banlanamaz.`))
if(kullanici.id === message.author.id)return message.channel.send(new falseembed.setDescription(`Kendini sunucudan banlayamazsın.`))
if(kullanici.id === client.user.id)return message.channel.send(new falseembed.setDescription(`Bir botu banlayamazsın`))
if(kullanici.id === message.guild.OwnerID) return message.channel.send(new falseembed.setDescription(`Sunucu sahibini banlayamazsın.`))
kullanici.send(new trueembed.setDescription(`${message.author} tarafından \`${sebep}\` sebebiyle sunucudan(\`${message.guild.name}\`) **yasaklandın.**`))
kullanici.ban({reason: sebep}).then(x => message.react('✅')).catch();
    data.add(`cezaPuan.${kullanici.id}`, 10)
    let cezapuan = data.fetch(`cezaPuan.${kullanici.id}`);
     ////////////////////////////////////////////////////////////////
     client.channels.cache.get('CEZA PUAN LOG İD').send(`<@${kullanici.id}> (\`${kullanici.id}\`) Banlandığı İçin Siciline **10** Puan İşledim!`)
     /////////////////////////////////////////////////////////////
     
message.channel.send(trueembed.setDescription(`${message.author} tarafından ${kullanici} \`${sebep}\` Sebebiyle Sunucudan Yasaklandı.`)) 
client.channels.cache.get('id').send(new trueembed.setDescription(`**Banlayan Yetkili:** ${message.author.id} (\`${message.author.id}\`)\nBanlanan Üye ${kullanici.author.tag} (\`${kullanici.user.tag}\`)\n${moment(Date.now()).format("DD")} ${aylar[moment(Date.now()).format("MM")]} ${moment(Date.now()).add(10,"hours").format("YYYY HH:mm:ss")}\`\``));
}

exports.conf = {
    aliases: ['yasakla'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ban'
  };
  