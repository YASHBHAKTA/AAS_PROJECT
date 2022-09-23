import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [enrollmentno, setEnrollment] = useState("");
    const [companyname, setCompanyname] = useState("");
    const [website, setWebsite] = useState("");
    const [doj, setDoj] = useState("");
    const [designation, setDesignation] = useState("");
    const [skills, setSkills] = useState("");
    const [experience, setExperience] = useState("");

    const navigate = useNavigate();
    const collectData = async () => {

        console.warn(enrollmentno,companyname,website,doj,designation,skills,experience)
        let result = await fetch('http://localhost:5000/add_alumni', {
            method: 'post',
            body: JSON.stringify({ enrollmentno,companyname,website,doj,designation,skills,experience }),
            headers: {
                'Content-Type': 'application/json'
            },
        })


        result = await result.json();
        console.warn(await result);
        localStorage.setItem("username", JSON.stringify(result));
        alert("Alumni Registered");
        navigate('/home')
        
    }
    return (
        <div className="register">
            <h1>Alumni Insertion</h1>
            <input className="inputBox" type="number" placeholder="enro" value={enrollmentno} onChange={(e) => setEnrollment(e.target.value)} />
            <input className="inputBox" type="text" placeholder="companyname" value={companyname} onChange={(e) => setCompanyname(e.target.value)} />
            <input className="inputBox" type="text" placeholder="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
            <input className="inputBox" type="date" placeholder="doj" value={doj} onChange={(e) => setDoj(e.target.value)} />
            <input className="inputBox" type="text" placeholder="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
            <input className="inputBox" type="text" placeholder="skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
            <input className="inputBox" type="number" placeholder="exprience" value={experience} onChange={(e) => setExperience(e.target.value)} />
            
            <button type="button" onClick={collectData} className="registerbutton">Register!</button>
        </div>
    )
}

export default Signup;