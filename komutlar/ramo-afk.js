const { MessageEmbed } = require('discord.js');
const db = require("quick.db");
exports.run = async (client, message, args) => {
  const kisi = db.fetch(`afkid_${message.author.id}_${message.guild.id}`);
  if (kisi) return;
  const sebep = args[0];
  if (!args[0]) {
    let member = message.guild.members.cache.get(message.author.id);
    const strigay = member.displayName;

    await db.set(
      `afkSebep_${message.author.id}_${message.guild.id}`,
      "Sebep Girilmemiş"
    );
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await db.set(`afkAd_${message.author.id}_${message.guild.id}`, strigay);

    const ramo = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

    message.channel.send(new MessageEmbed().setColor('BLACK').setDescription(`${member} Başarıyla Afk Oldunuz Afk Olmanızın Sebebi: **${ramo}**`));

    message.member.setNickname(`[AFK] ` + strigay);
  }
  if (args[0]) {
    let sebep = args.join(" ");
    let member = message.guild.members.cache.get(message.author.id);
    const strigay = member.displayName;
    await db.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep);
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await db.set(`afkAd_${message.author.id}_${message.guild.id}`, strigay);
    const ramo = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

    message.channel.send(new MessageEmbed().setColor('BLACK').setDescription(`${member} Başarıyla Afk Oldunuz Afk Olmanızın Sebebi: **${ramo}**`));

    message.member.setNickname(`[AFK] ` + strigay);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "afk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};
