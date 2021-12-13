
const express = require("express");

const router = express.Router();

const Show = require("../model/show.model");

router.post("", async (req,res) => {

    try {

        const show = await Show.create(req.body);

        res.send( {show});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});

router.get("", async (req,res) => {

    try {

        const shows = await Show.find()
        .populate({path: "movie_id"})
        .populate({path: "screen_id"})
        .lean().exec();

        res.send( {shows});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});

router.get("/:id", async (req,res) => {

    try {
        // console.log(req.params.id);
        const show = await Show.findById(req.params.id)
        .populate({path: "movie_id"})
        .populate({path: "screen_id"})
        .lean().exec();

        res.send( {show});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});


module.exports = router;