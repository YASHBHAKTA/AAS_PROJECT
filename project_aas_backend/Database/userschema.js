const mongoose=require('mongoose');

const userschema = new mongoose.Schema({
    email:String,
    password:String,
    role:Number,
    STATUS:Number
});

module.exports = mongoose.model("tbl_users",userschema);
