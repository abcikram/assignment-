import React, { useEffect, useState } from 'react'
import "./details.css"
import { FaUserAlt } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Details = () => {

    const { id } = useParams("");
    console.log("param_id", id);

    const [getuserdata, setUserData] = useState([]);
    console.log(getuserdata)

    const getdata = async (e) => {
        const res = await fetch(`/getviewer/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json();
        console.log("data", data)

        if (res.status === 404 || !data) {
            console.log('error')
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
         <NavLink className='btn' to='/dashboard'>Go Back</NavLink>
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
