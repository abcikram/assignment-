import React, { useState } from 'react'
import './AdminLogin.css'
import { useNavigate, NavLink } from 'react-router-dom';



const Admin = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value);
    setUser({
      ...user,
      [name]: value
    })
  }

  const login = async(e) => {
    const { email, password } = user;
    if (email && password) {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      })
      const data = await res.json();
      console.log("data", data)

      if (res.status === 404 || !data) {
        alert(data.message)
      } else {
        alert("Login Successfull");
        console.log("Login is Successfully");
        window.localStorage.setItem("token",data.data);
        window.location.href = './dashboard'
      }
    } else {
      alert("invalid input")
    }
  }

  return (
    <>
      <div className='login'>
        <h1>Admin Login</h1>
        <input type='text' name='email' value={user.email} placeholder='Enter your Email'
          onChange={handleChange}></input>

        <input type='password' name='password' value={user.password} placeholder='Enter your Password'
          onChange={handleChange}></input>

        <div className='button' onClick={login}>login</div>
        <div>or </div> 
        <div onClick={() => navigate('/adminregister')} className='button'>Register</div>
      </div>

    </>

  )
}

export default Admin
