const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  let ramo = "**Sesli Kanalda Olan Yetkililer:\n**";
  let ramo2 = "**Sesli Kanalda Olmayan Yetkililer:\n**";
  message.guild.roles.cache.get("763481961518858267").members.map(e => {
    ramo += e.voice.channel ? "•  <@" + e.user.id + ">\n" : "";
    ramo2 += !e.voice.channel ? "•  <@" + e.user.id + ">\n" : "";
  });

  const dcse = new Discord.MessageEmbed()
    .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription("" + ramo + "" + ramo2 + "")
  message.channel.send(dcse).then(a => a.s);
};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "sesteki-yetkililer"
};