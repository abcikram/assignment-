import React, { useState } from 'react'
import "./AdminRegister.css";
import { NavLink } from 'react-router-dom';

const AdminRegister = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value);
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = async() =>{
        const { name, email, password, reEnterPassword } = user;
        if(name && email && password && (password === reEnterPassword))
        {
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })
            const data = await res.json();
            console.log("data", data)

            if (res.status === 404 || !data || res.status === 400) {
                alert(data.message)
            } else {
                alert("data added Successfully");
                console.log("data added Successfully")
            }
        }else{
            alert("Invalid Input or password do not match confirm password")
        }
    }

    return (
        <div className='register'>
            <h1>Admin Register</h1>

            <input type='text' name='name' value={user.name} placeholder='Enter your Name'
                onChange={handleChange}></input>

            <input type='text' name='email' value={user.email} placeholder='Enter your Email'
                onChange={handleChange}></input>

            <input type='password' name='password' value={user.password}
                placeholder='Enter your Password' onChange={handleChange}></input>

            <input type='password' name='reEnterPassword' value={user.reEnterPassword}
                placeholder='Confirm Password' onChange={handleChange}></input>

            <div className='button' onClick={register}>Register</div>
            <div>or</div>
            <div><NavLink to="/admin" className='button'>Login</NavLink></div>
        </div>
    )
}

export default AdminRegister
