const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/AAS_PROJECT");
module.exports = () => {
    mongoose.connect('mongodb://localhost:27017', {
        dbName: 'AAS_PROJECT'
    })
    .then(()=>{
        console.log('Mongodb connected .....');
    })
    .catch((err) => console.log(err,message));

    mongoose.connection.on('connected', ()=>{
            console.log('database connected');
    });

    mongoose.connection.on('error', (err) => console.log(err.message));

}