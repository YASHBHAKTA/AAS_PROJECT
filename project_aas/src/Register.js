import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [enrollment, setEnrollment] = useState("");
    //const [profimg, setProfimg] = useState("");
    const [fname, setFName] = useState("");
    const [mname, setMName] = useState("");
    const [lname, setLName] = useState("");
    const [address, setAddress] = useState("");
    const [cid, setCid] = useState("");
    // const [countries, setCountries] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [deptid, setDeptid] = useState("");
    const [yog, setYog] = useState("");
    const [password, setPassword] = useState("");
     //const [error, setError] = useState(false);
    // const [disablestate, setDisableState] = useState(true);
    // const [states, setStates] = useState("");
    // const [sid, setSid] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("username");
        if (auth) {
            navigate('/')
        }
        //getCityId();
        
    })

    const collectData = async () => {
        // return alert
        // if (!fname || !lname || !email || !password) {
        //     setError(true);
        //     return false;
        // }

        console.warn(enrollment, fname, mname, lname, address, cid, gender, dob, contact, email, deptid, yog, password)
        let result = await fetch('http://localhost:5000/reg_users', {
            method: 'post',
            body: JSON.stringify({ enrollment, fname, mname, lname, address, cid, gender, dob, contact, email, deptid, yog, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        let useresult = await fetch('http://localhost:5000/user_registration', {
            method: 'post',
            body: JSON.stringify({ email,password, role:"3" }),
            headers: {
                'Content-Type': 'application/json'
            },
        })


        result = await result.json();
        console.warn(await result);

        useresult = await useresult.json();
        console.warn(await useresult);
        localStorage.setItem("username", JSON.stringify(result));
        alert("You've registered into the system.");
        navigate('/login')
    }
    // const handleOnchangeEvent=async(e)=>{
    //     setCid(e.target.value)
    //     setDisableState(false)
    //     // setStates(result.data)
    //     try{
    //         let result = await fetch(`http://localhost:5000/get_state/${cid}`);


    //         //  console.log(result.data);
    //         // result = await result.json();
    //         // setStates(result.data);

    //         //return console.log(result.data);

    //         if(result)
    //         {
    //             setCountries(result.data);
    //             //alert(cid);
    //         }else{
    //             console.log("Something went wrong");
    //         }
    //     }catch(err){
    //         console.log("Server Error");
    //     }

//}
    // const getCityId = async (req,resp) =>{
    //     try{
    //         let result = await fetch('http://localhost:5000/get_country');


    //         result = await result.json();
    //         //return console.log("function called");

    //         //return console.log(result.data);

    //         if(result)
    //         {
    //             setCountries(result.data);
    //             //alert(cid);
    //         }else{
    //             console.log("Something went wrong");
    //         }
    //     }catch(err){
    //         console.log("Server Error");
    //     }
    // }

    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="Number" placeholder="enro" value={enrollment} onChange={(e) => setEnrollment(e.target.value)} />
            {/* {error && !fname && <span className="invalid-input">Fill FirstName!</span>}  */}
            <input className="inputBox" type="text" placeholder="fname" value={fname} onChange={(e) => setFName(e.target.value)} />
            <input className="inputBox" type="text" placeholder="mname" value={mname} onChange={(e) => setMName(e.target.value)} />
            <input className="inputBox" type="text" placeholder="lname" value={lname} onChange={(e) => setLName(e.target.value)} />
            <input className="inputBox" type="text" placeholder="add" value={address} onChange={(e) => setAddress(e.target.value)} />
            <input className="inputBox" type="text" placeholder="cid" value={cid} onChange={(e) => setCid(e.target.value)} />
            <input className="inputBox" type="text" placeholder="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            <input className="inputBox" type="Date" placeholder="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
            <input className="inputBox" type="Number" placeholder="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
            <input className="inputBox" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="inputBox" type="Number" placeholder="deptid" value={deptid} onChange={(e) => setDeptid(e.target.value)} />
            <input className="inputBox" type="Number" placeholder="yog" value={yog} onChange={(e) => setYog(e.target.value)} />

            <input className="inputBox" type="password" placeholder="pass" value={password} onChange={(e) => setPassword(e.target.value)} />

            {/* <select className='ddlcountries' onChange={(e) => handleOnchangeEvent(e)}>
                <option value={0}>----Select Country----</option>

                {
                    countries.length > 0 ? countries.map((item, index) => (
                        <option key={item._id} value={item._id}>{item.name}</option>
                    ))
                        : <option value={0}>No Records Founds!</option>
                }
            </select> */}
            {/* <select className='ddlstate' onChange={(e) => handleOnchangeEvent(e)} disabled={disablestate}>
                <option value={0}>----Select Country----</option>

                {
                    states.length > 0 ? states.map((item, index) => (
                        <option key={item._id} value={item._id}>{item.name}</option>
                    ))
                        : <option value={0}>No Records Founds!</option>
                }
            </select> */}


            <button type="button" onClick={collectData} className="registerbutton">Register Now!</button>
        </div>
    )
}
export default Register;