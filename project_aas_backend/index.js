const express = require("express");
const cors = require("cors");
require("./Database/config");
const alumnischema = require('./Database/alumnischema')
const Users = require('./Database/userschema');
const user = require('./Database/Users');
const instituteschema = require('./Database/instituteschema');
const cordinator = require('./Database/cordinatorschema');
const Country = require('./Database/countryschema');
const deptschema = require('./Database/deptschema');
const City = require('./Database/cityschema');
const State = require('./Database/stateschema');
const user_registration = require('./Database/userschema');
const cordinatorschema = require("./Database/cordinatorschema");
const app = express();


app.use(express.json());
app.use(cors());

app.post("/reg_users", async (req, resp) => {
    let User = new Users(req.body);
    let result = await User.save();
    resp.send(result);
})

app.post("/login_users", async (req, resp) => {

    let data = await Users.findOne(req.body).select("-password");

    if (data) {
        resp.send(data);
    }
    else {
        resp.send({ ERROR: "INVALID CREDENTIALS!" })
    }
})

app.post("/add_city", async (req, resp) => {
    let city = new City(req.body);
    let result = await city.save();
    resp.send(result);
})

app.post("/add_country", async (req, resp) => {
    let country = new Country(req.body);
    let result = await country.save();
    resp.send(result);
})

app.post("/add_state", async (req, resp) => {
    let state = new State(req.body);
    let result = await state.save();
    resp.send(result);
})

app.get("/get_country", async (req, resp) => {
    let result = await Country.find();

    //resp.send(result);
    try {
        const result = await Country.find();

        if (result) {
            resp.send({ data: result });
        } else {
            resp.send(JSON.stringify("No records found!"));
        }

        //console.log(result);
    } catch (err) {
        console.log(err.message);
    }
})

app.get("/get_state/:cid", async (req, resp) => {
    // lo
    let result = await State.findById({ countryid: req.params.cid });

    // resp.send(result);
    try {
        // const result=await State.find();

        if (result) {
            resp.send({ data: result });
        } else {
            resp.send(JSON.stringify("No records found!"));
        }

        //console.log(result);
    } catch (err) {
        console.log(err.message);
    }
})

app.post("/user_registration", async (req, resp) => {
    3
    let data = new user_registration(req.body);
    let result = await data.save();
    resp.send(result);

})

app.post("/insert_cordinator", async (req, resp) => {
    let User = new cordinator(req.body);
    let result = await User.save();
    resp.send(result);
})

app.post("/add_alumni", async (req, resp) => {
    let data = new alumnischema(req.body);
    let result = await data.save();
    resp.send(result);
})

app.get("/Disp_student", async (req, resp) => {
    
    // try {
    //     const result = await Users.find(
    //         {
    //             "$or":[
    //                 {
    //                 "role" : 3
    //                     }
    //             ]
    //         }
    //     );

    //     if (result) {
    //         resp.send({ data: result });
    //     } else {
    //         resp.send(JSON.stringify("No records found!"));
    //     }

    //     //console.log(result);
    // } catch (err) {
    //     console.log(err.message);
    // }

    let users=await Users.find();
    if(users.length>0){
        resp.send(users)

    }
    else{
        resp.send({result:"No found"})
    }
})

// app.get("/Disp_cordinator", async (req, resp) => {
//     //let result = await Users.find();

//     //resp.send(result);
//     try {
//         const result = await cordinator.find(
//             {
//                 "$or":[
//                     {"STATUS" : 1}
//                 ]
//             }
//         );

//         if (result) {
//             resp.send({ data: result });
//         } else {
//             resp.send(JSON.stringify("No records found!"));
//         }

//         //console.log(result);
//     } catch (err) {
//         console.log(err.message);
//     }
// })

app.get("/Disp_cordinator", async (req, resp) => {
    let result = await cordinator.find();

    //resp.send(result);
    try {
        const result = await cordinator.find(
            {
                "$or":[
                    {"STATUS" : 1}
                ]
            }
        );

        if (result) {
            resp.send({ data: result });
        } else {
            resp.send(JSON.stringify("No records found!"));
        }

        //console.log(result);
    } catch (err) {
        console.log(err.message);
    }
})

app.post("/add_institute", async (req, resp) => {
    let data = new instituteschema(req.body);
    let result = await data.save();
    resp.send(result);

})

app.get("/selectid/:id", async (req, res, next) => {
    try {
        let id = req.params.id;
        const result = await instituteschema.findById(id);
        if (result) {
            res.send(result);
        } else {
            res.send('Not found');
            return;
        }
    } catch (error) {
        console.log(error.message);
    }
})

app.patch("/update_cordinator/:id", async (req, resp, next) => {
    try {
        let id = req.params.id;
        const update = req.body;
        const options = { new: true };
        const result = await cordinator.findByIdAndUpdate(id, update, options);

        if (result) {
            resp.send(result);
        } else {
            resp.send('Not found');
            return;
        }
    } catch (error) {
        console.log(error.message);
    }
})

app.patch("/delete_cordinator/:id", async (req, resp, next) => {
    try {
        let id = req.params.id;
        const update = req.body;
        const options = { new: true };
        const result = await cordinator.findByIdAndUpdate(id, update, options);

        if (result) {
            resp.send(result);
        } else {
            resp.send('Not found');
            return;
        }
    } catch (error) {
        console.log(error.message);
    }
})

app.patch("/update_student/:id", async (req, resp, next) => {
    try {
        let id = req.params.id;
        const update = req.body;
        const options = { new: true };
        const result = await user.findByIdAndUpdate(id, update, options);

        if (result) {
            resp.send(result);
        } else {
            resp.send('Not found');
            return;
        }
    } catch (error) {
        console.log(error.message);
    }
})



app.patch("/delete_student/:id", async (req, resp, next) => {
    try {
        let id = req.params.id;
        const update = req.body;
        const options = { new: true };
        const result = await user.findByIdAndUpdate(id, update, options);

        if (result) {
            resp.send(result);
        } else {
            resp.send('Not found');
            return;
        }
    } catch (error) {
        console.log(error.message);
    }
})



app.post("/add_dept", async (req, resp) => {
    let data = new deptschema(req.body);
    let result = await data.save();
    resp.send(result);

})

app.delete("/users_del/:id",async(req,resp)=>{
    
    const result =await user_registration.deleteOne({_id:req.params.id})
    resp.send(result);
})
app.get("/users_update/:id",async(req,resp)=>{
    let result=await user_registration.findOne({_id:req.params.id});
    if(result){
        resp.send(result)
    }else{
        resp.send({result : "NOT FOUND"})
    }
})

app.put("/users_update/:id", async (req,resp) => {
    let result = await user_registration.updateOne(
        {_id: req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result);
});

app.get("/users_update/:id", async (req,resp) => {
    let result = await user_registration.findOne({_id: req.params.id});
    if(result)
    {
        resp.send(result);
    }
    else
    {
        resp.send({result:"No Record Found"});
    }
});

app.listen(5000);