import React, { useState } from 'react'
import './AdminLogin.css'
import AdminRegister from './AdminRegister'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom'

const Admin = () => {

  const history = useNavigate();

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

  const login = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post("http://localhost:9002/login", user)
        .then(res => {
          if (res.data == 'exist') {
            alert('Admin login Successfully')
            history("/dashboard")
          } else if (res.data == "not exist") {
            alert("Admin have not sign in")
          }
        })
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
        <br/>
        <NavLink to="/adminregister" className='button'>Register</NavLink>
      </div>

    </>

  )
}

export default Admin
