
const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(

    {
        show_id: {
             type:String,
             ref:"show",
             required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("seat",seatSchema);











