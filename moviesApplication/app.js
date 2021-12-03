const express = require("express");

const mongoose = require("mongoose");


// connect
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/entertainment");
};

// movies schema

const moviesSchema = new mongoose.Schema(
   
        {
            movie_name : {type: String, required: true},
            movie_genre : {type: String, required : true},
            production_year : {type: Number, required: true},
            budget: {type: Number, required: true}
        },
        {
            versionKey: false,
            timestamps: true
        }
);

// model
const Movies = mongoose.model("movie",moviesSchema);

const app = express();

app.use(express.json());



app.post("/movies", async (req,res) => {
    try {

        const movie = await Movies.create(req.body);

        res.send( movie );

    } catch (e) {
        res.status(500).json({message: e.message, status : "failed"});
    }
    
});

app.get("/movies", async (req,res) => {

    try {

        const movies = await Movies.find().lean().exec();

        res.send({movies});

    } catch (e) {
        res.status(500).json({message: e.message, status: "failed"});
    }
});

app.get("/movies/:id", async (req,res) => {

    try {

        const movie = await Movies.findById(req.params.id).lean().exec();

        res.send(movie);

    } catch (e) {
        res.status(500).json({message: e.message, status: "failed"});
    }
});


app.patch("/movies/:id", async (req,res) => {

    try {

        const movie = await Movies.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();

        res.send(movie);

    } catch (e) {
        res.status(500).json({message: e.message, status: "failed"});
    }
});

app.delete("/movies/:id", async (req,res) => {

    try {

        const movie = await Movies.findByIdAndDelete(req.params.id).lean().exec();

        res.send(movie);

    } catch (e) {
        res.status(500).json({message: e.message, status: "failed"});
    }
});

app.listen(2468,async function() {
    await connect();
    console.log("listening at port no: 2468");
});