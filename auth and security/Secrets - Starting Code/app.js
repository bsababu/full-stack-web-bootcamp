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
const url = "mongodb://localhost:27017/userDB";

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(url,{useNewUrlParser: true});

const userSchema = new mongoose.Schema ({
    'email': String,
    'password': String
});


userSchema.plugin(encrypt,{
    secret: process.env.SECRET, 
    encryptedFields: ['password'], 
    excludeFromEncryption: ['email']
});

const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
    res.render("home",)
});

app.get("/login", (req, res) => {
    res.render("login",)
});

app.get("/register", (req, res) => {
    res.render("register",)
});

app.post("/register", (req, res) => {
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save((err) => {
        if(!err) {
            res.render("secrets");
        }
    })
});

app.post("login",(req, res) =>{

    const email= req.body.username;
    const password= req.body.password
    User.findOne({
        email: username
    }, (err, findUser) => {
        if(err) {console.log(err)}
        else {
            if(findUser) {
                if(findUser.password === password){
                    res.render("secrets")
                }
            }
        }
    })
})


app.listen(port, () => console.log(`port running on ${port} port `))