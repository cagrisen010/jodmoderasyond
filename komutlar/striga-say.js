const { MessageEmbed } = require("discord.js");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => {
  
//-------------------------------------------------------------------------------\\
  
if(!['ROL ID'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
//-------------------------------------------------------------------------------\\
  
  
let tag = "TAG";
const booster = message.guild.roles.cache.get("BOOSTER ROL ID").members.size
const online = message.guild.members.cache.filter(u => u.presence.status != "offline").size
const ttag = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size
const toplam = message.guild.memberCount
const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

const embed = new MessageEmbed()
.setTimestamp()
.setColor('RANDOM')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
message.channel.send(embed.setDescription(`**Toplam Üye  ・ ${toplam}
Aktif Üye ・ ${online}
Taglı Üye ・ ${ttag}
Booster Üye ・${booster}
Sesteki Üye ・${ses}**`));
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

  exports.help = {
  name: 'say'
}
