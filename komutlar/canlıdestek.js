const discord = require('discord.js');
const db = require('quick.db');
const bt = require('best-tools');
exports.run = async(client, message, args) => {
    let id = bt.rastgele('50000', 'pozitif')
message.channel.send(`Canlı destek talebiniz başarı ile destek sunucumuzda oluşturuldu! \n Destek idi: ${id}`)
const embed = new discord.MessageEmbed()
.setTitle('Destek sunucumuz!')
.setDescription('[Destek sunucumuz için tıkla!](https://discord.gg/4kNUVBUDz7)')
.setFooter('shiva#9999')
message.channel.send(embed)
db.set(`canlıdestek_${id}`, message.author.id)
const embedd = new discord.MessageEmbed()
.setTitle('Canlı destek talebi geldi!')
.setDescription(`**__Kişi Bilgileri__** \n \n Kişi: <@${message.author.id}> \n İdi: ${message.author.id} \n \n **__CANLI DESTEK__** \n \n Canlı destek idi: ${id} \n Kabul etmek için !canlı-destek-onayla ${id}`)
client.channels.cache.get("kanalid").send(embedd)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'canlı-destek' 
  };