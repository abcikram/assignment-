import React, { useState } from 'react'
import './ContectUs.css'
import { adddata } from '../context/ContextProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const ContectUs = () => {

  const { udata, setUdata } = useContext(adddata);

  const navigate = useNavigate()

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    description: ""
  })

  const setData = (e) => {
    const { name, value } = e.target;

    setINP({
      ...inpval,
      [name]: value
    })
  }

  const addinpdata = async (e) => {

    e.preventDefault();

    const { name, email, age, phone, address, description } = inpval;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name, email, age, phone, address, description
      })
    })
    const data = await res.json();
    console.log("data", data)

    if (res.status === 404 || !data || res.status === 400) {
      alert(data.message)
    } else {
      setUdata(data)
      alert("data added Successfully");
      console.log("data added Successfully")
      navigate('/')
    }
  }

  return (
    <>
      {
        udata ? <>
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{udata.name}</strong> user added successfully
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>


        </> : ""
      }
      <h1>Contact Us :-</h1>

      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={inpval.name} name="name" placeholder='Enter your Name'
            onChange={setData} required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={inpval.email} name="email" placeholder='Enter your email'
            onChange={setData} required />
        </div>

        <div className="row">
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="number" id="phone" value={inpval.phone} name="phone" placeholder='Enter your phone number'
              onChange={setData} required />
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" value={inpval.age} name="age" placeholder='Enter your age'
              onChange={setData} required />
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" value={inpval.address} name="address" placeholder='Enter your address' onChange={setData} required />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" value={inpval.description} name="description" onChange={setData} required />
          </div>
        </div>

        <input type="submit" onClick={addinpdata} value="Submit" />
      </form>
    </>
  )
}

export default ContectUs
