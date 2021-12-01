// author
// book name
// pages
// published year

const express = require("express");
const users = require("./books data.json"); 

const app = express();

const logger = (req,res,next) => {
    req.name = {api_requested_by: "pavan kumar"};
    next();
};

app.use(express.json());


//=================================================================================
// get '/' this will return all the users

app.get("/", (req,res) => {

    res.sendFile(__dirname+"/books data.json");
});

//=================================================================================
// post '/books' - pass an user to it and it will append it to
//  the end of the users and return it
//=================================================================================

app.post("/books", (req,res) => {

    console.log(req.body);
    // res.send(req.body);

    const newDataAdded = [...users, req.body];
    console.log(newDataAdded);

    res.send(newDataAdded);
});

//=================================================================================
// get '/books/:id' - this will return user with a specific id
//=================================================================================
app.get("/books/:id", (req,res) => {

    console.log(req.params.id);

    const specificData = users.filter( (user) => user.id === Number(req.params.id));
    console.log(specificData);

    // res.send(req.params.id);
    res.send(specificData);
});

//=================================================================================

// patch '/books/:id' - pass a different author and published year only and
//  update those on the book that matched the id
//=================================================================================
// app.patch("/books/:id", (req,res) => {

//     console.log("req.params.id ",req.params.id);

//     let updateSpecificData = users.filter((user) => user.id === Number(req.params.id));

//     console.log(updateSpecificData);
//     console.log(updateSpecificData[0].id);
//     console.log(req.body);
//     updateSpecificData[0].author = req.body.author;
//     console.log(updateSpecificData, " after");
//     res.send(updateSpecificData);
// });

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


//=================================================================================
// delete '/books:id' - delete the book that matched the id
//=================================================================================

app.delete("/books/:id", (req,res) => {
    console.log(req.params.id);

    const deleteSpecificData = users.filter( (user) => user.id !== Number(req.params.id));

    // console.log(deleteSpecificData);

    res.send(deleteSpecificData);
});

//===================      MIDDLEWARE     ========================================================

app.get("/m",logger, (req,res) => {
        let a = req.name;
        books = users;
        // console.log(a,books);

        res.send({a,books});
});

app.get("/booksSingle/:singleId",logger, (req,res) => {
    console.log(req.params.id);
    let a = req.name;
    const singleUser = users.filter(( user) => user.id === Number(req.params.singleId));
    console.log(singleUser);
    books = singleUser;
    res.send({a,books});

});

// app.get("/books/:id",logger,  (req, res) => {
//     let a = req.name;
//     const newUsers = users.map((user) => {
//         if(Number(req.params.id) === Number(user.id)){
//             books = user;
//         }
//         return user;
//     });
//     res.send({a, books});
// })




//=================================================================================

app.listen(2346, function() {

    console.log("listen at port 2346");
});

//=================================================================================