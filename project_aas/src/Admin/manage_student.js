import React, { useEffect, useState } from 'react';

const ManageStudent = () => {


    const [student, setStudent] = useState([]);

    useEffect(() => {
        getStudent();
    }, []);

    const getStudent = async () => {
        let result = await fetch('http://localhost:5000/Disp_student');
        result = await result.json();
        setStudent(result);
    }
    console.warn("student", student);



    return (
        <div className='user-list'>
            <h3>Alumni List</h3>
            <ul>
                <li>Sr.No.</li>
                <li>Email</li>
                <li>Password</li>
                <li>Role</li>
                <li>STATUS</li>
            </ul>
            {
                student.map(() =>
                    <ul>
                        <li>Sr.No.</li>
                        <li>Email</li>
                        <li>Password</li>
                        <li>Role</li>
                        <li>STATUS</li>
                    </ul>
                )
            }

        </div>
    );
}

export default ManageStudent;
