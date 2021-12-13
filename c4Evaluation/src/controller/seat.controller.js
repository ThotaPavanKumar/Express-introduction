
const express = require("express");

const router = express.Router();

const Seat = require("../model/seat.model");

router.post("", async (req,res) => {

    try {

        const seat = await Seat.create(req.body);

        res.send( {seat});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});

router.get("", async (req,res) => {

    try {

        const seats = await Seat.find()
        .populate({path: "show_id"})
        .lean().exec();

        res.send( {seats});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});

router.get("/:id", async (req,res) => {

    try {
        // console.log(req.params.id);
        const seat = await Seat.findById(req.params.id)
        .populate({path: "show_id"})
        .lean().exec();

        res.send( {seat});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});


module.exports = router;