const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const kdb = new qdb.table("kullanici");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {

  let kullanici = message.mentions.users.first() || client.users.cache.get(args[0]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
  let uye = message.guild.member(kullanici);
  let sicil = kdb.get(`kullanici.${uye.id}.sicil`) || [];
  sicil = sicil.reverse();
  let sicilPanel = sicil.length > 0 ? sicil.map((value, index) => `\`${index + 1}.\` Ceza Bilgisi \n \`Ceza Türü:\` [**${value.Ceza}**] \n \`Ceza Sebebi:\` **${value.Sebep}** \n \`Ceza Süresi:\` **${value.Süre}** \n \`Ceza Tarihi:\` **${value.Tarih}** \n \`Ceza Numarası:\` **${value.cezano}**  \n \`Yetkili:\` ${message.guild.members.cache.has(value.Yetkili) ? message.guild.members.cache.get(value.Yetkili) : value.Yetkili}`).join("\n\n") : "Bu Kullanıcının Sicili Temiz!";
      message.channel.send(new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
      .setDescription(`**<@!${uye.id}> İsimli Kullanıcının Sicili** \n\n ${sicilPanel}`)
      .setFooter(`Ramo`))

};

module.exports.conf = {
    guildOnly: true,
    aliases: ["sicil"],
    permLevel: 0
};

module.exports.help = {
    name: "s",
};
