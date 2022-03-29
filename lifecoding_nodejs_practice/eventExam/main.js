var event=require("events")
exports.renevent=new event()

setInterval(()=>{
    exports.renevent.emit("call")
},1000)