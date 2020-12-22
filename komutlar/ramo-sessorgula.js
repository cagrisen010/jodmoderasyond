const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
   if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

  let ramo;
  let ramo1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  let ramo2 = message.guild.members.cache.get(args[0]);
  if(!ramo1) return message.channel.send(new MessageEmbed().setDescription(`Bir İD Veya Kullanıcı Etiketlemelisin`))
  if (ramo1) {
    ramo = ramo1;
  }
  if (ramo2) {
    ramo = ramo2;
  }
  if (!ramo) {
    ramo = message.member;
  }
  let csc = ramo.voiceChannel;
  if (!csc) {
    message.channel.send(new MessageEmbed().setColor('009caf').setDescription("**<@" + ramo.id + "> Bir Sesli Kanalda Değil!**"));
  }
  if (csc) {
    message.channel.send(
      "**<@" + ramo.id + "> İsimli Kişi <#" + ramo.id + "> İsimli Kanalda!**"
    );
  }
};
module.exports.conf = {
  aliases: ["kontrol"]
};

module.exports.help = {
  name: "sorgula"
};