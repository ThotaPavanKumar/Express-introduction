
const express = require("express");

const router = express.Router();

const Theatre = require("../model/Theatre.model");

router.post("", async (req,res) => {

    try {

        const theatre = await Theatre.create(req.body);

        res.send( {theatre});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});

router.get("", async (req,res) => {

    try {

        const theatres = await Theatre.find().lean().exec();

        res.send( {theatres});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});

router.get("/:id", async (req,res) => {

    try {
        // console.log(req.params.id);
        const theatre = await Theatre.findById(req.params.id).lean().exec();

        res.send( {theatre});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});


module.exports = router;