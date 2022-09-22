const mongoose=require('mongoose');

const cityschema = new mongoose.Schema({
    name:String,
    stateid: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'stateschema' }],
        required: [true, "state is required"]
    }

});

module.exports = mongoose.model("cities",cityschema);