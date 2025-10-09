import React, { useContext } from 'react'
import { Form } from 'react-bootstrap';
import { clubcontext } from '../clubcontext';
import axios from 'axios';
function ViewRegisteration() {

  const{clubs,setclubs} = useContext(clubcontext);

  const handleclick=async()=>{
  try {
      const response = await axios.get("http://localhost:8086/api/getclubs");
      setclubs(response.data);
      // setloading(true);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
    <Form style={{marginTop:"100px"}}>
      <Form.Label ><h4 className='fw-bold'>Select club</h4></Form.Label>
      <Form.Select onClick={handleclick}>
        <option value="">--Select--</option>
        {clubs.map((club)=>(
        <option key={club.id} >{club.clubname}</option>
         ))
        }
      </Form.Select>
    </Form>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Year</th>
      <th scope="col">Email-Id</th>
      <th scope="col">Phone-Number</th>
      <th scope="col">Applied Club</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Umar Inamdar</td>
      <td>AIDS</td>
      <td>SY</td>
      <td>mohdumar.i@somaiya.edu</td>
      <td>8097140907</td>
      <td>S4DS</td>
      </tr>
  </tbody>
  </table>
    </>
  )
}

export default ViewRegisteration;