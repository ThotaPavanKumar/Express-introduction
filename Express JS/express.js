const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("Welcome to Home page")
});

app.get("/contact", function(req, res) {
    res.send("my contact number is")
});

app.get("/users", function(req, res) {
    console.log("data to seen");
    res.sendFile(__dirname+"/MOCK_DATA.json");
});

app.listen(3000, function(req,res) {
    console.log("server is running at port no: 3000");
});