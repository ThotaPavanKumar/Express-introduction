
const express = require("express");

const mongoose = require("mongoose");

const app = express();

// const connect = require("./server.js");

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/moviesEval");
};

app.use(express.json());

//====================================================================================
const userControllers = require("./controller/user.controller");
const movieControllers = require("./controller/movie.controller");
const theatreControllers = require("./controller/theatre.controller");
const screenControllers = require("./controller/screen.controller");
const showControllers = require("./controller/show.controller");
const seatControllers = require("./controller/seat.controller");

//====================================================================================
app.use("/users",userControllers);
app.use("/movies",movieControllers);
app.use("/theatres",theatreControllers);
app.use("/screens",screenControllers);
app.use("/shows",showControllers);
app.use("/seats",seatControllers);

//====================================================================================
app.listen(2349, async function() {
    await connect();

    console.log("listening at port number 2349");
});