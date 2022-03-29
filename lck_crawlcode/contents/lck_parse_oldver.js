const axios = require('axios');
const cheerio = require('cheerio');

const getHTML = async(keyword)=>{
    keyword = encodeURI(keyword);
    try {
        return axios.get(`https://kin.naver.com/search/list.nhn?query=`+keyword);
    }catch(err){
        console.log(err);
    }
}

const getData = async(keyword) =>{
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);

    console.log(html)

    const contentList = $('#container .basic1 li');
    let titles = [];

    contentList.each((idx,elem)=>{
        titles.push($(elem).find('dl dt a').text());
    });

    titles.forEach(item => console.log(item));
}

getData('원하는 키워드 입력');