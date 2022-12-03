import React, { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

const UpdateUser = () => {
    const [email, setEmail] = React.useState('');
    const [role, setRole] = React.useState('');
    const [status, setStatus] = React.useState('');

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getCategoryDetails();
    }, []);

    const getCategoryDetails = async () => {
        console.warn(params);
        let result = await fetch(`http://localhost:5000/users_update/${params.id}`);
        result = await result.json();
        setEmail(result.email);
        setRole(result.role);
        setStatus(result.STATUS);
    }

    const updateCategory = async () => {
        console.warn(email, status);
        let result = await fetch(`http://localhost:5000/users_update/${params.id}`, {
            method: "put",
            body: JSON.stringify({ email, role, status }),
            headers: {
                'Content-Type': "application/json"
            }
        });
        result = await result.json();
        console.warn(result);
        alert("User Updated")
        navigate('/userlist');
    }
    return (
        <div className="register">
            <h1>Update Category</h1>
            <input type="text" className="inputBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required></input>

            <input type="text" className="inputBox" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Enter role" required></input>
            <input type="text" className="inputBox" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Enter status" required></input>

            <button className="appButton" onClick={updateCategory}>Update Category</button>
        </div>
    )
}
export default UpdateUser;