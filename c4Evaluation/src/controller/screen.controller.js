
const express = require("express");

const router = express.Router();

const Screen = require("../model/screen.model");

router.post("", async (req,res) => {

    try {

        const screen = await Screen.create(req.body);

        res.send( {screen});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});

router.get("", async (req,res) => {

    try {

        const screens = await Screen.find()
        .populate({path: "theatre_id"})
        .lean().exec();

        res.send( {screens});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});

router.get("/:id", async (req,res) => {

    try {
        // console.log(req.params.id);
        const screen = await Screen.findById(req.params.id)
        .populate({path: "theatre_id"})
        .lean().exec();

        res.send( {screen});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});


module.exports = router;