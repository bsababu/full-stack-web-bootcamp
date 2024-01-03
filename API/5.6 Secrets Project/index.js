// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
const url = "https://secrets-api.appbrewery.com";


app.get("/", async(req, res) => {
    try {

        const request = await axios.get(url+"/random", );
        const datta = {
            "secret": request.data.secret, 
            "user": request.data.username
        }
        res.render("index.ejs", {secret: datta.secret, user: datta.user})

    }catch (error) {
        //res.render("index.ejs", {content: JSON.stringify(res.request.data)})
        console.log(error.request.data);
        res.status(500);
    }
})

app.listen(port, () => {
    console.log(`the server is listenin on port ${port}`);
    
});