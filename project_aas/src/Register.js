import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Register=()=>{

    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="FIRST NAME"  />
            <input className="inputBox" type="text" placeholder="LAST NAME"  />
            <input className="inputBox" type="email" placeholder="EMAIL"  />
            <input className="inputBox" type="password" placeholder="PASSWORD" />
            <button type="button" className="registerbutton">Sign Up</button>
        </div>
    )
}
export default Register;