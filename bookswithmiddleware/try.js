const express = require("express");

const app = express();
const users = require("./books data.json");

const logger = (req, res,next)   => {
    req.name = {api_requested_by: "pavan kumar"}
    next();
}; 

app.use(express.json());

app.get("/books",logger, (req, res) => {
    let a = req.name;
    let books = users;
    res.send({a,books});
    // console.log("books");
});

app.post("/books", (req, res) => {
    const newUser = [...users,req.body];
    res.send(newUser);
});

app.patch("/books/:id", (req, res) => {
    const newUser = users.map((user) => {
        if((+req.params.id) == user.id) {
            return req.body;
        }
        return user;
    })
    res.send(newUser);
});

app.delete("/books/:id", (req, res) => { 
    const newUser = users.filter((user) =>  user.id != +req.params.id);
    res.send(newUser);
});

app.get("/:books/:id",logger, (req,res) => {
    let a = req.name;
    const newUser = users.map((user) => {
        if(Number(req.params.id) == (Number(req.id))) {
            books = user;
        }
        return user;
    })
    res.send({a,books});
});

app.listen(1234, (req, res) => {
    console.log("listening at port no: 1234");
} );