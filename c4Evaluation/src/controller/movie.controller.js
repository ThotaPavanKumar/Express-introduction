
const express = require("express");

const router = express.Router();

const Movie = require("../model/Movie.model");

router.post("", async (req,res) => {

    try {

        const movie = await Movie.create(req.body);

        res.send( {movie});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});

router.get("", async (req,res) => {

    try {

        const movies = await Movie.find().lean().exec();

        res.send( {movies});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});

router.get("/:id", async (req,res) => {

    try {
        // console.log(req.params.id);
        const movie = await Movie.findById(req.params.id).lean().exec();

        res.send( {movie});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});


module.exports = router;