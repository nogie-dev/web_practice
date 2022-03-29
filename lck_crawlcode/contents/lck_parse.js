const axios = require("axios");
const cheerio = require("cheerio")
const log=console.log

//경기 관련
let season=""
let today=new Date();
let year=today.getFullYear();
let month=today.getMonth()+1;

let todayMatch=[];

if(month<5){season="spring"}else{season="summer"} //lck 시즌

const getHTML = async()=>{
    try {
        return axios.get(`https://escorenews.com/en/lol/lck-${year}-${season}`);
    }catch(err){
        console.log(err);
    }
}

const getData = async() =>{
    const html = await getHTML();
    const $ = cheerio.load(html.data); 

    //console.log(html)
    const data=$(".article","#matches_s1");
    data.each((idx,list)=>{
        if(idx<2){
            todayMatch[idx]={
                //time:$(list).find("div.time > i").html(),
                team1Logo:"https://escorenews.com"+$(list).find("div.teams > span:nth-child(1) > picture > img").attr('src'),
                team1Name:$(list).find("div.teams > span:nth-child(1) > b").text(),
                    
                team2Logo:"https://escorenews.com"+$(list).find("div.teams > span:nth-child(3) > picture > img").attr('src'),
                team2Name:$(list).find("div.teams > span:nth-child(3) > b").text()//.replace($(list).find("b").html(),"")
            }
        }else{return false}
    });   
    return todayMatch
}
//getData();
module.exports={getData}
