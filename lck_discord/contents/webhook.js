const Discord=require('discord.js')
const config=require('../config.json')
const hook = new Discord.WebhookClient(config.WEBHOOK_ID, config.WEBHOOK_TOKEN);
