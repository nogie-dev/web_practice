var util=require("util")

function Foo(){

}
function Bar(){

}


Foo.prototype={
    test:(ted)=>{
        console.log(ted)
    }
}
util.inherits(Bar,Foo)

Bar.prototype.test(22)



