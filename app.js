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
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "bop bop is the best!",
    resave: false,
    saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
});

//==============

//AUTH ROUTES

//==============

// show sign up form
app.get("/register", function(req, res){
    res.render("register");
});

// handling user sign up
app.post("/register", function(req, res){
    req.body.username
    req.body.passport
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if (err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});


// LOGIN ROUTES
// RENDER LOGIN FORM
app.get("/login", function(req, res){
    res.render("login");
});


app.listen(3000, function(){
    console.log("server's running! bop bop");
});

