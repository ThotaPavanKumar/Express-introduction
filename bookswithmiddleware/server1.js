const express = require("express");
const users = require("./books data.json");

const app = express();

const logger = (req, res, next) => {
    req.name = {api_requested_by: "pavan kumar"}
    next();
}

 app.use(express.json());

app.post("/books",(req,res)=>{
    console.log(req.body)
    const newUsers=[...users ,req.body]
    res.send(newUsers);
})


app.patch("/books/:id", (req, res) => {
    console.log(req.params.id);
    const newUsers = users.map((user) => {
        if(+req.params.id === user.id){
            return req.body;
        }
        return user;
    });
    res.send(newUsers);
})

app.delete("/books/:id", (req, res) => {
    const newUsers = users.filter((user) => user.id !== +req.params.id);

    res.send(newUsers);
});


//with middleware

app.get("/", logger, (req,res) => {
    let a = req.name;
    let books = users;
    res.send({a, books});
})


app.get("/:books/:id",logger,  (req, res) => {
    let a = req.name;
    const newUsers = users.map((user) => {
        if(Number(req.params.id) === Number(user.id)){
            books = user;
        }
        return user;
    });
    res.send({a, books});
})


app.listen(1234, function (){
    console.log("listening on port 1234");
});