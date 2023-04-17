import React, { useEffect, useState } from 'react'
import '../dash/Dashboard.css'
import { GrFormView } from 'react-icons/gr'
import { NavLink ,useNavigate} from 'react-router-dom'

const Dashboard = () => {

  const [getuserdata, setUserData] = useState([]);
  console.log("getuserdata :-", getuserdata)

  const getdata = async (e) => {
    const res = await fetch("/getdata", {
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
    getdata();
  }, [])

  return (
    <>
    <br/>
    <h1>-: Dashboard :-</h1>
      <br/><br/>
    <div className='mt-5'>
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
              <th scope="col">Description</th>
            </tr>
          </thead>


          {
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
                      <td>{element.description}</td>
                    </tr>
                    <td className='d-flex justify-content-between'>
                      <NavLink to={`contact/${element._id}`}><button className='btn btn-success'><GrFormView /></button></NavLink> 
                    </td>
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
