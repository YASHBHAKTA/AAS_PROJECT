const mongoose=require('mongoose');

const stateschema = new mongoose.Schema({
    name:String,
    countryid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'countryschema' }],
        required: [true, "country is required"]
    }

});

module.exports = mongoose.model("states",stateschema);