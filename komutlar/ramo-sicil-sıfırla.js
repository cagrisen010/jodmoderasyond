const { MessageEmbed } = require('discord.js');
const data = require('quick.db');
exports.run = async (client, message, args) => {

let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
 
if (member) {
  data.delete(`tempmute_${message.guild.id}`)
  data.delete(`kullanici.${message.author.id}.sicil`)
 message.channel.send(new MessageEmbed().setDescription(`${message.author} Sana Ait Sicil Verilerini Sildim!`))
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