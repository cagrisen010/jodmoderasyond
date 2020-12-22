const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let tag = "a" 
    const ramo = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Tagdaki üye sayısı", message.guild.members.filter(m => m.user.username.includes(tag)).size) 
    message.channel.send(ramo);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tag-say'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};