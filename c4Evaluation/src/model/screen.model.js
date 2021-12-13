
const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema(

    {
        name: {type:String, required: true},
        theatre_id: {
            type:String, 
            ref: "theatre",
            required: true}
        
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("screen",screenSchema);











