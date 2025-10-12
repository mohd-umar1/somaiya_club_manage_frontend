import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap';
import { clubcontext } from '../clubcontext';
import axios from 'axios';
function ViewRegisteration() {

  const{clubs,setclubs} = useContext(clubcontext);
  const [applications, setapplications] = useState([{}]);
  const [club, setclub]=useState();

  const handleclick=async()=>{
  try {
      const response = await axios.get("http://localhost:8086/api/getclubs");
      setclubs(response.data);
      // setloading(true);
    } catch (error) {
      console.error(error);
    }
  }

  const handlechange = async(e)=>{
    try {
      const response = await axios.get(`http://localhost:8086/appliaction/getapplications/${e.target.value}`)
      setapplications(response.data);
      console.log(response.data)
      console.log(applications)
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
    <Form style={{marginTop:"100px"}}>
      <Form.Label ><h4 className='fw-bold'>Select club</h4></Form.Label>
      <Form.Select onClick={handleclick} value={club} onChange={handlechange}>
        <option value="">--Select--</option>
        {clubs.map((club)=>(
        <option key={club.id} value={club.clubname} >{club.clubname}</option>
         ))
        }
      </Form.Select>
    </Form>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Year</th>
      <th scope="col">Email-Id</th>
      <th scope="col">Phone-Number</th>
      <th scope="col">Applied Club</th>
    </tr>
  </thead>
  <tbody>
    {applications.map((application)=>(
    <tr key={application.id}>
      <td>{application.name}</td>
      <td>{application.department}</td>
      <td>{application.yearofstudy}</td>
      <td>{application.email_id}</td>
      <td>{application.phone_number}</td>
      <td>{application.clubname}</td>
      </tr>
  )) }
  </tbody>
  </table>
    </>
  )
}

export default ViewRegisteration;