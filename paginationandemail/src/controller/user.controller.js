const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const User = require("../model/user.model");

const sendMail = require("../utils/sendmail");

router.post("/", async (req,res) => {

    try {

        const user = await User.create(req.body);      
        res.send( { user});

        sendMail("ABCsystems@gmail.com",
        `${req.body.email}`,
        `Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,
        `Hi ${req.body.first_name}, Please confirm your email address`,
        `Hi ${req.body.first_name}, Please confirm your email address`);

        // console.log(user);


        const admin = await User.find().lean().exec();
        let count = 0;
        admin.forEach(ele  => {
            count++;
            if(count <= 5) {

                console.log(ele);

                sendMail(`${req.body.email}`,
                `${ele.email}`,
                `${req.body.first_name} ${req.body.last_name} has registered with us`,
                `Please Welcome ${req.body.first_name} ${req.body.last_name}`,
                `Admin ${count}`
                );
            }
        });
        // console.log("admin",admin);

    } catch(e) {

        res.status(500).json({message : e.message, status : "failed"});
    }
});

router.get("/", async (req,res) => {

    try {
        // console.log("page",req.query);
        const page = +req.query.page || 1;
        const size = +req.query.size || 2;
        // console.log(page,size);
        const offset = (page-1) * size;
        console.log(offset);

        const users = await User.find().skip(offset).limit(size)
        .lean().exec();

        // const users = await User.find()
        // .lean().exec();

        const totalPages = Math.ceil((await User.find().countDocuments()) / size);    
        console.log(totalPages);
        res.send( { users,totalPages});

    } catch(e) {

        res.status(500).json({message : e.message, status : "failed"});
    }
});
module.exports = router;