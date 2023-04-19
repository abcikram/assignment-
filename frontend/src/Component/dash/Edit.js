import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updatedata } from '../context/ContextProvider'


const Edit = () => {
  const { update, setUpdate } = useContext(updatedata)

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
    console.log(name, value);

    setINP({
      ...inpval,
      [name]: value
    })
  }
  const { id } = useParams(); //using the useParams we are get the params id form
  //from NavLink to={`contact/${element._id}`} in dashboard .

  console.log("param_id", id);

  const getdata = async (e) => {
    const res = await fetch(`/getviewer/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    })
    const data = await res.json();
    console.log("data", data)

    if (res.status === 404 || !data || res.status === 400) {
      alert(data.message)
    } else {
      setINP(data) 
      console.log("get data")
    }
  }

  useEffect(() => {
    getdata()
  }, [])


  const updateviewer = async(e) =>{
    e.preventDefault();

    const { name, email, age, phone, address, description } = inpval;

    const res2 = await fetch(`/update/${id}`,{
      method:"PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body:JSON.stringify({
        name, email, age, phone, address, description
      })
    })

    const data2 = await res2.json()

    console.log("data2",data2);

    if(res2.status=== 200){
      alert("Data updated Successfully")

      navigate('/dashboard') // after data update go or redirect to dashboard page
      
      setUpdate(data2)
      
    }else{
      alert(data2.message);
    }
  }

  return (
    <>
      <h1>Edit:-</h1>

      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={inpval.name} name="name" placeholder='Enter your Name' onChange={setData} required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={inpval.email} name="email" placeholder='Enter your email' onChange={setData} required />
        </div>

        <div className="row">
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="number" id="phone" value={inpval.phone} name="phone" placeholder='Enter your phone number' onChange={setData} required />
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" value={inpval.age} name="age" placeholder='Enter your age' onChange={setData} required />
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

        <input type="submit" onClick={updateviewer} value="Submit" />
      </form>
    </>
  )
}


export default Edit
