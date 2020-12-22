const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

  if (!message.member.roles.has("763481961611395075") && !message.member.hasPermission("MANAGE_MESSAGES") ) 
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "763481961146482719";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sifir:791085966797701170>`,
    '1': `<a:bir:791085959495155752>`,
    '2': `<a:iki:791085966005633044>`,
    '3': `<a:uc:791085966273282098>`,
    '4': `<a:dort:791085966093844480>`,                       
    '5': `<a:bes:791085956019126272>`,
    '6': `<a:alti:791085942072803389>`,
    '7': `<a:yedi:791085965686210621>`,
    '8': `<a:sekiz:791085967003877396>`,
    '9': `<a:dokuz:791085968127033374>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sifir:791085966797701170>`,
    '1': `<a:bir:791085959495155752>`,
    '2': `<a:iki:791085966005633044>`,
    '3': `<a:uc:791085966273282098>`,
    '4': `<a:dort:791085966093844480>`,                       
    '5': `<a:bes:791085956019126272>`,
    '6': `<a:alti:791085942072803389>`,
    '7': `<a:yedi:791085965686210621>`,
    '8': `<a:sekiz:791085967003877396>`,
    '9': `<a:dokuz:791085968127033374>`}[d];
      })
    }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "Emirhan";
  message.guild.members.cache.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })

 var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sifir:791085966797701170>`,
    '1': `<a:bir:791085959495155752>`,
    '2': `<a:iki:791085966005633044>`,
    '3': `<a:uc:791085966273282098>`,
    '4': `<a:dort:791085966093844480>`,                       
    '5': `<a:bes:791085956019126272>`,
    '6': `<a:alti:791085942072803389>`,
    '7': `<a:yedi:791085965686210621>`,
    '8': `<a:sekiz:791085967003877396>`,
    '9': `<a:dokuz:791085968127033374>`}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sifir:791085966797701170>`,
    '1': `<a:bir:791085959495155752>`,
    '2': `<a:iki:791085966005633044>`,
    '3': `<a:uc:791085966273282098>`,
    '4': `<a:dort:791085966093844480>`,                       
    '5': `<a:bes:791085956019126272>`,
    '6': `<a:alti:791085942072803389>`,
    '7': `<a:yedi:791085965686210621>`,
    '8': `<a:sekiz:791085967003877396>`,
    '9': `<a:dokuz:791085968127033374>`}[d];
      })
    }
const emoji1 = client.emojis.cache.get("697069423315386378")
 const embed1 = new Discord.MessageEmbed()
 .setColor('000000')
 .setAuthor('CodAre')
 .setDescription(`${emoji1} **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n ${emoji1} **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n ${emoji1} **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n ${emoji1} **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.**`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     const hata = new Discord.MessageEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
  
  /*client.setInterval(() => {
  let channel = client.channels.cache.get("694870726280347668"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}