import React, { useEffect, useState } from 'react'
import '../dash/Dashboard.css'
import { GrFormView } from 'react-icons/gr'
import { MdModeEditOutline, MdDeleteOutline } from 'react-icons/md'
import { NavLink, useNavigate } from 'react-router-dom';
import { adddata, deletedata, updatedata } from '../context/ContextProvider';
import { useContext } from 'react';


const Dashboard = () => {

  const navigate = useNavigate();

  const [getuserdata, setUserData] = useState([]);
  console.log("getuserdata :-", getuserdata)

  const { udata, setUdata } = useContext(adddata);
  
  const { update, setUpdate } = useContext(updatedata)

  const { dlt, setDelete } = useContext(deletedata)

  const token = window.localStorage.getItem("token")

  const getdata = async (e) => {
    if (token) {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`
        },
      })
      const data = await res.json();
      console.log("data", data)

      if (res.status === 404 || !data) {
        console.log('error')
      } else {
        setUserData(data)  /*{// update the data using useSate([]) hook and update data will store getuserdata //}*/
        console.log("get data")
      }
    } else (
      alert("first you need to Login")
    )
  }

  useEffect(() => {
    getdata();
  }, [])

  const logOut = () => {
    window.localStorage.clear();
  }


  const deleteuser = async (id) => {
    const res2 = await fetch(`/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 200) {
      console.log("user deleted");
      setDelete(deletedata)
      getdata();
    } else {
      alert(deletedata.message)
    }
  }

  console.log('dlt',dlt)

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
      {
        update ? <>
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{update.data.name}</strong> Updated successfully
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </> : ""
      }
    
      {
        dlt ? <>
          <div class="alert alert-warn alert-dismissible fade show" role="alert">
            <strong>{dlt.data.name}</strong> {dlt.name} Delelte successfully
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </> : ""
      }

 
      <br />
      <h1>-: Dashboard :-</h1>
      <NavLink to="/admin"><button onClick={logOut} className='btn btn-success'>Logout</button></NavLink>

      <div className='mt-5'>
        <br />
        <div className='container'>
          <table>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">email</th>
                <th scope="col">Phone number</th>
                <th scope="col">Age</th>
                <th scope="col">Address</th>
              </tr>
            </thead>

            {  //using map their are array store in element and id store in id parameter 
              //lineno 84 , element._id is array's particuar id  which will go to contact/${element._id} path.
              getuserdata.map((element, id) => {

                return (
                  <>
                    <tbody>
                      <tr>
                        <th scope="row">{id + 1}</th>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.phone}</td>
                        <td>{element.age}</td>
                        <td>{element.address}</td>

                        <td className='d-flex justify-content-between'>
                          <NavLink to={`contact/${element._id}`}><button className='btn btn-success'><GrFormView /></button></NavLink>
                          <NavLink to={`edit/${element._id}`}><button className='btn btn-success'><MdModeEditOutline /></button> </NavLink>
                          <button className='btn btn-success' onClick={() => deleteuser(element._id)}><MdDeleteOutline /></button>
                        </td>
                      </tr>
                    </tbody>

                  </>
                )

              })
            }

          </table>

        </div>

      </div>
    </>
  )
}

export default Dashboard
