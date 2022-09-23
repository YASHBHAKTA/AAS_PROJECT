const mongoose=require('mongoose');

const instituteschema = new mongoose.Schema({
    name:String
});

module.exports = mongoose.model("tbl_institutes",instituteschema);