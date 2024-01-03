import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const now = new Date();


app.get("/", (req, res) => {
    const today = now.getDay();

    let typ = "week day";
    let adv = "it's time to work hard";
    if (today  == 6 || today == 0) {
        typ = "week End";
        adv = "it's time to relax a bit";
    }

    res.render("index.ejs", {
        dayType: typ,
        advice: adv
    })
    //res.send("hello");
})

app.listen(port, () => console.log(`app running on this port ${port}`));