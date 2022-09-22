const express=require("express");
const cors =require("cors");
require("./Database/config");
const Users=require('./Database/Users');
const Country=require('./Database/countryschema');
const City=require('./Database/cityschema');
const State=require('./Database/stateschema');
const app=express();


app.use(express.json());
app.use(cors());

app.post("/reg_users",async (req,resp)=>{
    let User=new Users(req.body);
    let result=await User.save();
    resp.send(result);
})

app.post("/login_users", async (req,resp)  => {

    let data=await Users.findOne(req.body).select("-password");

    if(data)
    {
        resp.send(data);
    }
    else
    {
        resp.send({ ERROR :"INVALID CREDENTIALS!" })
    }
})

app.post("/add_city",async (req,resp)=>{
    let city=new City(req.body);
    let result=await city.save();
    resp.send(result);
})

app.post("/add_country",async (req,resp)=>{
    let country=new Country(req.body);
    let result=await country.save();
    resp.send(result);
})

app.post("/add_state",async (req,resp)=>{
    let state=new State(req.body);
    let result=await state.save();
    resp.send(result);
})

app.listen(5000);