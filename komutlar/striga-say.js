const { MessageEmbed } = require("discord.js");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => {
  
  if(!['ROL ID'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(`Başarısız !`).setDescription(`Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta <a:no:776484326215909427> \n \`u!ban @Etiket Sebep\` `))


  let tag = "TAG";
  const booster = message.guild.roles.cache.get("763481961518858267").members.size
  const online = message.guild.members.cache.filter(u => u.presence.status != "offline").size
  const ttag = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size
  const toplam = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const embed = new MessageEmbed()
  .setTimestamp()
  .setColor('PURPLE')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed.setDescription(`Sunucuda Toplam \`${toplam}\` Üye Bulunmakta.
  Sunucuda Toplam \`${online}\` Çevirimiçi Üye Bulunmakta.
  \`${ses}\` Üye Ses Odalarında.
  Sunucuda Toplam \`${ttag}\` Taglı Üye Bulunmakta.
  Sunucuda Toplam \`${booster}\` Booter Bulunmakta.
`));
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
