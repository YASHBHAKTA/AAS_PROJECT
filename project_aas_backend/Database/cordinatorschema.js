const mongoose=require('mongoose');

const cordinatorschema = new mongoose.Schema({
    profimg:String,
    fname:String,
    lname:String,
    address:String,
    cityid:Number,
    contact:Number,
    email:String,
    deptid:Number,
    STATUS:Number
});

module.exports = mongoose.model("tbl_cordinators",cordinatorschema);
