import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem("username");
        if(auth){
            navigate('/')
        }
    })

    const collectData = async () => {

        if(!fname || !lname || !email || !password){
            setError(true);
            return false;
        }

        console.warn(fname, lname, email, password)
        let result = await fetch('http://localhost:5000/reg_users', {
            method: 'post',
            body: JSON.stringify({ fname, lname, email, password }),
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
            <input className="inputBox" type="text" placeholder="Enter First Name" value={fname} onChange={(e) => setFName(e.target.value)}/>
            {error && !fname && <span className="invalid-input">Fill FirstName!</span>} 
            <input className="inputBox" type="text" placeholder="Enter Last Name" value={lname} onChange={(e) => setLName(e.target.value)}/>
            {error && !lname && <span className="invalid-input">Fill LastName!</span>}
            <input className="inputBox" type="email" placeholder="Enter Email Id" value={email} onChange={(e) => setEmail(e.target.value)}/>
            {error && !email && <span className="invalid-input">Fill Email!</span>}
            <input className="inputBox" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            {error && !password && <span className="invalid-input">Fill Password!</span>}
            <button type="button" onClick={collectData} className="registerbutton">Register Now!</button>
        </div>
    )
}
export default Register;