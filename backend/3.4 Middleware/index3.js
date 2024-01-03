import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;


function logger(req, res, next) {
  console.log("requested method: ", req.method)
  console.log("requested url: ", req.url)
  next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

//app.use(morgan(':method :url'))
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
