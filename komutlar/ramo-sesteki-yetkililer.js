const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  let ramo = "**Sesli Kanalda Olan Yetkililer:**\n";
  let ramo2 = "**Sesli Kanalda Olmayan Yetkililer:**\n";
  message.guild.roles.cache.get("763481961518858267").members.map(r => {
    ramo += r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
    ramo2 += !r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
  });

  const ramoembed = new Discord.MessageEmbed()
    .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription("" + ramo + "" + ramo2 + "")
  message.channel.send(ramoembed).then(s => s.s);
};
module.exports.conf = {
  aliases: ["sesli"]
};

module.exports.help = {
  name: "sesteki-yetkililer"
};