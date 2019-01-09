const express = require("express");
const app = express();
const path = require("path")

app.use(express.static("public"))


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.get("/second", (req, res) => {
  res.sendFile(path.join(__dirname + '/second.html'))
});

app.get("/third", (req, res) => {
  res.sendFile(path.join(__dirname + '/third.html'))
});

app.get("/fourth", (req, res) => {
  res.sendFile(path.join(__dirname + '/fourth.html'))
});


app.listen(3000);
console.log("Running at port 3000");
