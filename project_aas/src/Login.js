import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [password, setPassword] = useState("");
    const [fname, setFName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('username');
        if (auth) {
            navigate("/")
        }
    }, [navigate])
    const handleLogin = async () => {
        console.warn("email , password : ", email, password)
        let result = await fetch('http://localhost:5000/login_users', {

            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }


        });
        result = await result.json();
        console.warn(result);
        if (result.role === 3) {
            alert("STUDENT");
            if (result.email) {
                localStorage.setItem("username", JSON.stringify(result));
                navigate("/")
            }
        }
        else if (result.role === 2) {
            alert("COORDINATOR");
            if (result.email) {
                localStorage.setItem("username", JSON.stringify(result));
                navigate("/")
            }
        }
        else if (result.role === 1) {
            alert("ADMIN");
            if (result.email) {
                localStorage.setItem("username", JSON.stringify(result));
                navigate("/Admin")
            }
        }


        else {
            alert("enter correct details..")
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <input className="inputBox" type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
            <input className="inputBox" type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>

            <button className="registerbutton" onClick={handleLogin} type="button">Login</button>

        </div>
    )
}

export default Login;