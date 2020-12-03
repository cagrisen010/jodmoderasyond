const Stg = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, msg, args) => {
      let prefix = ayarlar.prefix
      let yazı = "Rol Sahibi Kullanıcılar"

    let role = msg.mentions.roles.first() || msg.guild.roles.cache.get(args[0]) || msg.guild.roles.cache.find(role => role.name === args.join(' '));
  let top = msg.guild.members.cache.filter(uye => msg.guild.roles.cache.get(`yetkili.${uye.id}.toplam`))
  var hata = new Stg.MessageEmbed()
  .setColor("#36393F")
  .setDescription(`Lütfen Bir Rol Etiketleyin Örnek: \`${prefix}rolbilgi @Üye\``);
  if(!role) return msg.channel.send(hata);

        let hex = role.hexColor.toString().slice(1)
        let embed = new Stg.MessageEmbed()
        .setAuthor(yazı, msg.author.avatarURL({ dynamic: true }))
        .setDescription(`${top}`)
        msg.channel.send(embed)
    }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['rol-info','rolinfo','rolbilgi'],
 permLevel: 0
};

exports.help = {
 name: 'rol-bilgi',
 description: 'Bir Rol Hakkında Bilgi Verir.',
 usage: 'rol-bilgi'
};