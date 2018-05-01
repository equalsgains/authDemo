var express = require("express");

var app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("home");
});

app.listen(3000, function(){
    console.log("server's running! bop bop");
});

app.get("/secret", function(req, res){
    res.render("secret");
});