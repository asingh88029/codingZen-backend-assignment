const mongoose = require("mongoose");

//creating mongoose schema
const enquirySchema = mongoose.Schema({
    "full_name":{
        type:String,
        required:true,
        trim:true
    },
    "email":{
        type:String,
        required:true
    },
    "message":{
        type:String,
        required:true
    }
},{
    timestamps:true
})

//converting mongoose schema into model
const Enquiry = mongoose.model("enquirys",enquirySchema);
module.exports=Enquiry;