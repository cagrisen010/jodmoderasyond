const { MessageEmbed } = require('discord.js');
const data = require('quick.db');
const kdb = new data.table("kullanici");
exports.run = async (client, message, args) => {

let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (member) {
if(!member) return message.channel.send(new MessageEmbed().setDescription(`Kullanıcı Etiketle`))
let sicil = kdb.delete(`kullanici.${member.id}.sicil`) || [];
 message.channel.send(new MessageEmbed().setColor('GREEN').setDescription(`${message.author} Sana Ait Sicil Verilerini Sildim!`))
}
if(member) {
  let sicil = kdb.delete(`kullanici.${member.id}.sicil`) || [];
 message.channel.send(new MessageEmbed().setColor('GREEN').setDescription(`${member} Kullanıcısına Ait Sicil Verilerini Sildim!`))

}  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sicil-sıfırla"],
  PermLevel: 0
};

 

exports.help = {
  name: "sicil-sıfırla",
  description: "",
  usage: ""
};