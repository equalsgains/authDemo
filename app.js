var     express               = require("express"),
        mongoose              = require("mongoose"),
        passport              = require("passport"),
        bodyParser            = require("body-parser"),
        LocalStrategy         = require("passport-local"),
        passportLocalMongoose = require("passport-local-mongoose"),
        User                  = require("./models/user");

mongoose.connect("mongodb://localhost:27017/authDemo");

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