const { Client, Intents } = require('discord.js'); //{}안에 넣는 것과 아닌것 차이점 비교
const Discord=require('discord.js');
const imgsrc=require('./img/address.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config=require('./config/config.json');
//const webhook=require('./setting/webhook'); 에러로 인한 임시 주석처리
const requestAPI=require('./contents/parsing')
const cron = require('node-cron');
const request = require('request')

const url="http://141.164.57.242:1557/api/crawl/lck"
var match1=""
var match2=""

const prefix="!"

//LCK API request 하는 부분
request(url, function(error,response,body){
    if(error){
      console.log(error)
    }
    var obj=JSON.parse(body)
    
    match1=obj.match[0]
    match2=obj.match[1]
})

//매일 한번 출력하는 스캐쥴링
//기능 미구현

// const task = cron.schedule("1 * * * * *",() => {
//     console.log('test')
//     client.on('messageCreate',msg=>{
//         const embedContentSchedule = new Discord.MessageEmbed()
//             .setColor('#0099ff')
//             .setTitle('오늘의 경기')
//             .setURL('https://www.twitch.tv/lck')
//             //.setAuthor('슼갈 다죽어', 'https://static.inven.co.kr/column/2021/12/08/news/i8202386316.jpg', 'https://discord.js.org')
//             .setDescription('슼갈 다죽어')
//             .setThumbnail(imgsrc.lck_logo)
//             .addFields(
//                 { name: '\u200B', value: '\u200B' },
//                 { name:'오후', value: '5:00 시' },
//                 { name: match1.team1Name, value: '🗡', inline: true },
//                 { name: 'VS', value: '⚔️', inline: true },
//                 { name: match1.team2Name, value: '🗡', inline: true }
//             )
//             .addFields(
//                 { name: '\u200B', value: '\u200B' },
//                 { name:'오후', value: '8:00 시' },                
//                 { name: match2.team1Name, value: '🗡', inline: true },
//                 { name: "VS", value: '⚔️', inline: true },
//                 { name: match2.team2Name, value: '🗡', inline: true },
//             )
//                 .setImage('https://w.namu.la/s/154dc0c0cac614e23f26b8868272a3927b8219f3f4a73e7da7c105ef9d9f727d22ebcdddff1944de6377996af5ea382607641675c02eead92b9cf220512723c96cdc8bf2b1b9ab03bff74cf459c69cc2da742b17fa2a3a0a339582071fd23069')
//                 //.setImage(match1.team2Logo)
//                 //.setTimestamp()
//                 //.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');
            
//         msg.channel.send({ embeds: [embedContentSchedule] });
//     });
// });

//task.start();

client.on('ready',()=>{
    console.log(`Logged Bot id ${client.user.tag}`);
   
});

client.on('messageCreate',msg=>{

    if(!msg.guild) return;
    if(msg.author.bot) return;
    if(msg.content.indexOf(prefix)!==0) return;
    var args = msg.content.slice(prefix.length).trim().split();//split(/ +/g);
    var command = args.shift().toLowerCase();
    
    console.log(args);
    console.log(command);
    
    if(command==="핑"){
        msg.reply(`${client.ws.ping}ms`);
    }

    //if(command==="웹훅"){
    //    const hook = new Discord.WebhookClient(config.WEBHOOK_ID, config.WEBHOOK_TOKEN); 
    //     hook.send("hello world");
    // }

    if (command === `오늘의경기`) {
        const embedContent = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('오늘의 경기')
            .setURL('https://www.twitch.tv/lck')
            //.setAuthor('슼갈 다죽어', 'https://static.inven.co.kr/column/2021/12/08/news/i8202386316.jpg', 'https://discord.js.org')
            .setDescription('슼갈 다죽어')
            .setThumbnail(imgsrc.lck_logo)
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name:'오후', value: '5:00 시' },
                { name: match1.team1Name, value: '🗡', inline: true },
                { name: 'VS', value: '⚔️', inline: true },
                { name: match1.team2Name, value: '🗡', inline: true }
            )
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name:'오후', value: '8:00 시' },                
                { name: match2.team1Name, value: '🗡', inline: true },
                { name: "VS", value: '⚔️', inline: true },
                { name: match2.team2Name, value: '🗡', inline: true },
            )
            .setImage('https://w.namu.la/s/154dc0c0cac614e23f26b8868272a3927b8219f3f4a73e7da7c105ef9d9f727d22ebcdddff1944de6377996af5ea382607641675c02eead92b9cf220512723c96cdc8bf2b1b9ab03bff74cf459c69cc2da742b17fa2a3a0a339582071fd23069')
            //.setImage(match1.team2Logo)
            //.setTimestamp()
            //.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');
        
        msg.channel.send({ embeds: [embedContent] });
    }
})

client.login(config.BOT_TOKEN);