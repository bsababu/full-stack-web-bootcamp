//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3001;
const __dirname = dirname(fileURLToPath(import.meta.url));
var isUserAuthorised = false;

app.listen(port, () => console.log(`running on port ${port}`));

app.use(bodyParser.urlencoded({extended:true}));

function checkPassword (req, res, next) {
    const bodyPass = req.body['password'];
    if (bodyPass === "sababu"){
        isUserAuthorised = true
    }
    next();
}
app.use(checkPassword);

app.get("/", (req, res) => {
    //res.send("<strong>Hello</strong>");
    res.sendFile(__dirname + "/public/index.html");
    //console.log(__dirname + "/public/index.html");
});

app.post('/check', (req, res) => {
    if(isUserAuthorised) {
        res.sendFile(__dirname + '/public/secret.html')
    }
    else {
        //res.sendFile(__dirname + "/public/index.html");
        res.redirect("/")
    }
})