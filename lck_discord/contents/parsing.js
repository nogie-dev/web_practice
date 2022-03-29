var request = require('request')

var obj=""
const url="http://141.164.57.242:1557/api/crawl/lck"

function requestAPI(){ 
  request(url, function(error,response,body){
    if(error){
      console.log(error)
    }
    obj=JSON.parse(body)
    
    var match1=obj.match[0]
    var match2=obj.match[1]
  })
  return obj
}

module.exports={requestAPI}