var express = require('express');
// const uuidAPIKey = require('uuid-apikey');
let {getData}=require('../contents/test2');
var router = express.Router();


//token 기능 아직 미구현 
//향후 db서버 구축과 동시에 기능 추가 예정

// let tokenList=[]; 

// tokenList.push(uuidAPIKey.create());
// console.log(tokenList)

async function handleAsync() {
  const result = await getData();
 // console.log(sum);
  return result;
}

router.get('/',(req,res)=>{
  res.json({
    'status':res.statusCode,
    'message':'Hello There is nogie\'s API server'
  })
})

/* GET home page. */
router.get('/api/crawl/lck/', async(req, res) => { //req, res 자리 고정임.
  const match=await handleAsync();
  //console.log(text)
  res.json({
    'status':res.statusCode,
    'match1':match,
  })
});

module.exports = router;
