const mongoose=require('mongoose');

const alumni = new mongoose.Schema({
    enrollmentno:Number,
    companyname:String,
    website:String,
    doj:Date,
    designation:String,
    skills:String,
    experience:Number
});

module.exports = mongoose.model("tbl_alumnis",alumni);