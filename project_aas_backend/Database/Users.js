const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    enrollment:Number,
    profimg:String,
    fname:String,
    mname:String,
    lname:String,
    address:String,
    
    cid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cityschema' }],
        required: [true, "city is required"]
    },
    gender:String,
    dob:Date,
    contact:Number,
    email:String,
    deptid:Number,
    yog:Number,
    password:String
});

module.exports = mongoose.model("reg_users",userSchema);