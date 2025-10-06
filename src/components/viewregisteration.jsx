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
      <Form.Label ><h4>Select club</h4></Form.Label>
      <Form.Select onClick={handleclick}>
        <option value="">--Select--</option>
        {clubs.map((club)=>(
        <option key={club.id} >{club.clubname}</option>
         ))
        }
      </Form.Select>
    </Form>
    </>
  )
}

export default ViewRegisteration;