import express from "express";

const app = express();
const port = 3000;

// 3.1 SETUP
//-----------------------
// app.get("/", (req, res) => {
//   res.send("Welcome to express");
// });
// app.listen(port, () => console.log(`app runnning on port - ${port}`));

// 3.2 HTTP request
//-----------------------
app.get("/", (req, res) => {
  res.send("<h1>Hello Bosco</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Sababu</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +49123456789</p>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/bosco", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/bosco", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/bosco", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`app runnning on port ${port}`);
});
