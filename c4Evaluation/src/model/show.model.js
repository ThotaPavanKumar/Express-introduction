
const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(

    {
        timing: {type:String, required: true},
        movie_id: {
            type:String,
            ref: "movie",
            required: true
        },
        total_seats: {type:Number, required: true},
        screen_id: {
            type:String,
            ref: "screen",
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("show",showSchema);











