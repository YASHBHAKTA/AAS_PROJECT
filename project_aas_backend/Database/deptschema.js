const mongoose=require('mongoose');

const deptschema = new mongoose.Schema({
    name:String,
    insid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'instituteschema' }],
        required: [true, "institute ID is required"]
    },
});

module.exports = mongoose.model("tbl_depts",deptschema);