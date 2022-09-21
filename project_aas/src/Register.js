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
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [deptid, setDeptid] = useState("");
    const [yog, setYog] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("username");
        if (auth) {
            navigate('/')
        }
    })

    const collectData = async () => {

        if (!fname || !lname || !email || !password) {
            setError(true);
            return false;
        }

        console.warn(enrollment, fname, mname, lname, address, cid, gender, dob, contact, email, deptid, yog, password)
        let result = await fetch('http://localhost:5000/reg_users', {
            method: 'post',
            body: JSON.stringify({ enrollment, fname, mname, lname, address, cid, gender, dob, contact, email, deptid, yog, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })


        result = await result.json();
        console.warn(await result);
        //localStorage.setItem("username", JSON.stringify(result));
        alert("You've registered into the system.");
        navigate('/login')
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="Number" placeholder="enro" value={enrollment} onChange={(e) => setEnrollment(e.target.value)} />
            {/* {error && !fname && <span className="invalid-input">Fill FirstName!</span>}  */}
            <input className="inputBox" type="text" placeholder="fname" value={fname} onChange={(e) => setFName(e.target.value)} />
            <input className="inputBox" type="email" placeholder="mname" value={mname} onChange={(e) => setMName(e.target.value)} />
            <input className="inputBox" type="email" placeholder="lname" value={lname} onChange={(e) => setLName(e.target.value)} />
            <input className="inputBox" type="email" placeholder="add" value={address} onChange={(e) => setAddress(e.target.value)} />
            <input className="inputBox" type="email" placeholder="cid" value={cid} onChange={(e) => setCid(e.target.value)} />
            <input className="inputBox" type="email" placeholder="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            <input className="inputBox" type="email" placeholder="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
            <input className="inputBox" type="email" placeholder="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
            <input className="inputBox" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="inputBox" type="email" placeholder="deptid" value={deptid} onChange={(e) => setDeptid(e.target.value)} />
            <input className="inputBox" type="email" placeholder="yog" value={yog} onChange={(e) => setYog(e.target.value)} />

            <input className="inputBox" type="password" placeholder="pass" value={password} onChange={(e) => setPassword(e.target.value)} />


            <button type="button" onClick={collectData} className="registerbutton">Register Now!</button>
        </div>
    )
}
export default Register;