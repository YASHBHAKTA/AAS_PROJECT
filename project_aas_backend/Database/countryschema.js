const mongoose=require('mongoose');

const countryschema = new mongoose.Schema({
    name:String

});

module.exports = mongoose.model("countries",countryschema);