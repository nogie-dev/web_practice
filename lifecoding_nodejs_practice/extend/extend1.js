function Foo(){

}
function Bar(){

}


Foo.prototype={
    bar: function(){
        console.log("test");
    },
    ttt: function(){
        console.log("ttt");
    }
};

Bar.prototype=Object.create(Foo.prototype);

var test=new Foo()
test.bar()
Foo.prototype.bar()
Bar.prototype.bar()