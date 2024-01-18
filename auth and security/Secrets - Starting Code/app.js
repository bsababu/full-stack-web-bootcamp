//jshint esversion:6
import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
//import mongoose from 'mongoose';
import mongoose from "mongoose";
import encrypt from "mongoose-encryption";

const app = express();
//const mongoose = mongoose();
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const connectDB = async () => {
    try {
        mongoose.connect(process.env.URL, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
  }
connectDB();
  
//mongoose.set("useCreateIndex",true)
const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});

// wokring with 3rd level encryprion
userSchema.plugin(encrypt,{
    secret: process.env.SECRET, 
    encryptedFields: ['password'], 
    excludeFromEncryption: ['email']
});


// working with cookies and session
// we have to install passport, passport-local passport-local-mongoose express-session

import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import findOrCreate from 'mongoose-findorcreate';


app.use(session({
    secret:"our secret",
    resave: false,
    saveUninitialized: false,
    
})); 

app.use(passport.initialize());
app.use(passport.session());

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);


const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);

    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
//------------------------------------

//const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
    res.render("home",)
});

app.get("/login", (req, res) => {
    res.render("login",)
});

app.get("/register", (req, res) => {
    res.render("register",)
});

// create the /secret

app.get("/secrets", (req, res) => {
    // if(req.isAuthenticated()) {
    //     res.render("secrets")
    // } else {
    //     res.redirect("/login")
    // }
        User.find({"secret": {$ne: null}}, function(err, foundUsers){
          if (err){
            console.log(err);
          } else {
            if (foundUsers) {
              res.render("secrets", {usersWithSecrets: foundUsers});
            }
          }
        });
});

app.post("/register", (req, res) => {
    // const newUser = new User({
    //     email: req.body.username,
    //     password: req.body.password
    // });

    // newUser.save((err) => {
    //     if(!err) {
    //         res.render("secrets");
    //     }
    // })

// -> we use passport for cookies and sessions

    User.register({email: req.body.username}, req.body.password, (err, user) => {
        if(err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, () =>{
                res.redirect("/secrets");
            })
        }
    } )
});
app.get("/auth/google",
  passport.authenticate('google', { scope: ["profile"] })
);

app.get("/auth/google/secrets",
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect to secrets.
    res.redirect("/secrets");
  });

app.post("/login",(req, res) =>{

    // const email= req.body.username;
    // const password= req.body.password
    // User.findOne({
    //     email: username
    // }, (err, findUser) => {
    //     if(err) {console.log(err)}
    //     else {
    //         if(findUser) {
    //             if(findUser.password === password){
    //                 res.render("secrets")
    //             }
    //         }
    //     }
    // })

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, (err) => {
        if (err) { console.log(err)}
        else {
            passport.authenticate("local")(req, res, () =>{
                res.redirect("/secrets");
            })
        }
    })
});

app.get("/submit", function(req, res){
    if (req.isAuthenticated()){
      res.render("submit");
    } else {
      res.redirect("/login");
    }
  });
  
  app.post("/submit", function(req, res){
    const submittedSecret = req.body.secret;
  
  //Once the user is authenticated and their session gets saved, their user details are saved to req.user.
    // console.log(req.user.id);
  
    User.findById(req.user.id, function(err, foundUser){
      if (err) {
        console.log(err);
      } else {
        if (foundUser) {
          foundUser.secret = submittedSecret;
          foundUser.save(function(){
            res.redirect("/secrets");
          });
        }
      }
    });
  });
app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
})


app.listen(port, () => console.log(`port running on ${port} port `))