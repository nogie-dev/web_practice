var express = require('express');
var app=express();

app.locals.pretty=true;
app.set("views", "./views")
app.set("view engine", "jade")
app.listen(3000, ()=>{
  console.log("start");
});

/* GET home page. */
app.get('/', function(req, res) {
  res.render("test",{title:'test'})
  //res.render('test', { title: 'Pug'});
});
app.get('/tttt', function(req, res) {
  res.render("test",{title:'test'})
  //res.render('test', { title: 'Pug'});
});

module.exports = router;
