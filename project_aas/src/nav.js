import React,{useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem("username");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    // useEffect(()=>{
    //     alert(auth);
    // })

    return (

        <div>
            <img alt='logo' className="logo" src="../logo.png" />
            {auth ?

                <ul className="nav-ul">

                    <li className="txt_colour">Welcome :- {JSON.parse(auth).email}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Admin">Admin_C</Link></li>
                    <li><Link to="/Admin_alumni">Admin_A</Link></li>
                    <li><Link to="/cordinatorlist">CL</Link></li>
                    <li><Link to="/login" onClick={logout}>LogOut</Link></li>
                    <li><Link to="/Admin/manage_student">Admin_student</Link></li>

                </ul>
                :
                <ul className="nav-ul">
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }

        </div>
    )
}

export default Nav;