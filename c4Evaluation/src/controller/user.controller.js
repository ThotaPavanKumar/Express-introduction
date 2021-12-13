
const express = require("express");

const router = express.Router();

const User = require("../model/user.model");

router.post("", async (req,res) => {

    try {

        const user = await User.create(req.body);

        res.send( {user});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});

router.get("", async (req,res) => {

    try {

        const users = await User.find().lean().exec();

        res.send( {users});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});

router.get("/:id", async (req,res) => {

    try {
        // console.log(req.params.id);
        const user = await User.findById(req.params.id).lean().exec();

        res.send( {user});

    } catch(e) {
        res.status(500).json({message : e.message, status: "failed"});
    }
});


module.exports = router;