const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[BOT] | Botun destekçileri ve komutları başarıyla yüklendi, işlemler tamamlandı !`);
  console.log(`[BOT] | (${client.user.username}) shiva?!
  ‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);
  client.user.setStatus("online");
  client.user.setActivity("ꑮ JOD - MODERASYON", { type: "PLAYING"}); //// TYPE - WATCHING , PLAYING , LISTENING gibi değiştirilebilir.
  console.log(`discord.gg/4kNUVBUDz7`);

};
