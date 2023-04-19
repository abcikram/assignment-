import React, { useEffect, useState } from 'react'
import "./details.css"
import { FaUserAlt } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Details = () => {

    const navigate = useNavigate();

    // const userId = useParams("");  
    // console.log("userId",userId)
    // const id = userId.id 

    const { id } = useParams(); //using the useParams we are get the params id form
    //from NavLink to={`contact/${element._id}`} in dashboard .
    
    console.log("param_id", id);

    const [getuserdata, setUserData] = useState("");
    console.log("getuserdata",getuserdata)

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
            setUserData(data)  /*{// update the data using useSate([]) hook and update data will store getuserdata //}*/
            console.log("get data")
        }
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
    <>
         <div className='button' onClick={() => navigate(-1)}>Go Back</div><br/>
        <div className='style-viewer'>
            <FaUserAlt />
            <h2>Name:{getuserdata.name}</h2>
            <p><strong>Email:</strong>{getuserdata.email}</p>
            <p><strong>Age:</strong>{getuserdata.age}</p>
            <p><strong>Phone:</strong>{getuserdata.phone}</p>
            <p><strong>Location:</strong>{getuserdata.address}</p>
            <p><strong>Description:</strong>{getuserdata.description}</p>
        </div>
       </>
    )
}

export default Details
