import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [profimg, setProfimg] = useState("");
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [address, setAddress] = useState("");
    const [cityid, setCityid] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [deptid, setDeptid] = useState("");

    const navigate = useNavigate();
    const collectData = async () => {

        console.warn(profimg,fname,lname,address,cityid,contact,email,deptid)
        let result = await fetch('http://localhost:5000/insert_cordinator', {
            method: 'post',
            body: JSON.stringify({ profimg,fname,lname,address,cityid,contact,email,deptid }),
            headers: {
                'Content-Type': 'application/json'
            },
        })


        result = await result.json();
        console.warn(await result);
        localStorage.setItem("username", JSON.stringify(result));
        alert("Cordinator Registered");
        navigate('/Admin')
        
    }
    return (
        <div className="register">
            <h1>Cordinator Insertion</h1>
            <input className="inputBox" type="text" placeholder="profimg" value={profimg} onChange={(e) => setProfimg(e.target.value)} />
            <input className="inputBox" type="text" placeholder="fname" value={fname} onChange={(e) => setFName(e.target.value)} />
            <input className="inputBox" type="text" placeholder="lname" value={lname} onChange={(e) => setLName(e.target.value)} />
            <input className="inputBox" type="text" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <input className="inputBox" type="number" placeholder="cityid" value={cityid} onChange={(e) => setCityid(e.target.value)} />
            <input className="inputBox" type="number" placeholder="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
            <input className="inputBox" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="inputBox" type="number" placeholder="deptid" value={deptid} onChange={(e) => setDeptid(e.target.value)} />
            
            <button type="button" onClick={collectData} className="registerbutton">Register!</button>
        </div>
    )
}

export default Signup;