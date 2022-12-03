import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    let result = await fetch('http://localhost:5000/Disp_student');
    result = await result.json();
    setUsers(result);

  }

  const deleteUser = async(id) => {
   let result = await fetch(`http://localhost:5000/users_del/${id}`,
      { method: "Delete" });
      result = await result.json(); 
      if(result){
        alert("User is Deleted")
        getUser();
      }
  }

  return (
    <div className='user-list'>
      <h3>Users</h3>
      <ul>
        <li>s.no</li>
        <li>email</li>
        <li>role</li>
        <li>status</li>
        <li>Operation</li>
      </ul>
      {
        users.map((item, index) =>
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.email}</li>
            <li>{item.role}</li>
            <li>{item.STATUS}</li>
            <li>
              <button onClick={() => deleteUser(item._id)}>Delete</button>
              <button><Link to= {"/update_user/"+item._id}>Update</Link></button>
            </li>
          </ul>
        )
      }


    </div>
  )
}
export default UserList;