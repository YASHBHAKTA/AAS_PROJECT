import React, { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

const update_student = () => {
    const [email, setEmail] = React.useState('');
    const [role, setRole] = React.useState('');
    const [status, setStatus] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        updatestudent();
    },[]);

    const updatestudent = async () => {
        console.warn(params);
        let result = await fetch(http://localhost:5000/updatecategory/${params.id});
        result =  await result.json();
        setCname(result.cname);
        setStatus(result.status);
    }

    const updateCategory = async () => 
    {
        console.warn(cname,status); 
        let result = await fetch(http://localhost:5000/updatecategory/${params.id},{
            method: "put",
            body: JSON.stringify({cname,status}),
            headers: {
                'Content-Type':"application/json"
            }
        });
        result = await result.json();
        console.warn(result);
        navigate('/SelectCategory');
    }
    return(
        <div className="register">
            <h1>Update Category</h1>
            <input type="text" className="inputBox" value={cname} onChange={(e) => setCname(e.target.value)} placeholder="Enter Category" required></input>

            <input type="text" className="inputBox" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Enter status" required></input>

            <button className="appButton" onClick={updateCategory}>Update Category</button>
        </div>
    )
}
export default UpdateCategory;