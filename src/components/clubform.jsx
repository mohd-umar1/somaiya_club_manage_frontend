import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {motion} from "framer-motion"
import { clubcontext } from '../clubcontext';

function Clubform() {
  const[error,seterror] = useState(false)
  const[club, setclub] = useState({
    clubname:"",
    department:"",
    description:"",
    interviewdate:"",
})
// const[clubs,setclubs]=useState([]); insted of this we will use the context we declared in app component

const{setclubs} = useContext(clubcontext);

const handlechange=(e)=>{
const{name,value}=e.target;
setclub((prev) => ({
  ...prev,[name]: value
}))
}

const handlesubmit=(e)=>{
  if(club.clubname==""||club.department==""||club.description==""||club.interviewdate==""){
   alert("Please Enter the required data")
  }
  else{
    seterror(false);
    console.log(error);
    e.preventDefault();
axios.post("http://localhost:8086/api/addclubs",club)
.then((Response)=>{setclubs((prevclubs)=>[...prevclubs,Response.data]);
setclub({clubname:"",
    department:"",
    description:"",
    interviewdate:""})
  })
.catch((error) => {
  console.error("Error adding club:", error);
  seterror(true)
  console.log(error);
  alert("Error: Data upload was unsucessful")
});
// console.log(clubs);
     }
};

const setcolorRED=(e)=>{
    e.target.style.backgroundColor="#922623"
  }
  const setcolorBLUE=(e)=>{
     e.target.style.backgroundColor="#162443"
}
  return (
    <motion.div
    inital={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}>
    <Container className="me-auto text-start">
    <Form>
      <Form.Group className="mb-3" controlId="clubname">
        <Form.Label ><h4>Club Name</h4></Form.Label>
        <Form.Control type="text" 
         placeholder="Enter name of club"
         name="clubname" 
         value={club.clubname}
         onChange={handlechange}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label ><h4>Department</h4></Form.Label>
        <Form.Control type="text" 
        placeholder="Enter name of department"
        name="department" 
        value={club.department} 
        onChange={handlechange}/>
      </Form.Group> */}
      <Form.Label ><h4>Department</h4></Form.Label>
      <Form.Select className="mb-3" controlId="department" name="department" 
        value={club.department} 
        onChange={handlechange}>
        <option value="">--Select--</option>
            <option value="AIDS">AIDS</option>
            <option value="COMP">COMP</option>
            <option value="ENTC">ENTC</option>
            <option value="IT">IT</option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label ><h4>Description</h4></Form.Label>
        <Form.Control type="text" 
        placeholder="Enter description of club" 
        name="description"
        value={club.description} 
        onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="interviewdate">
        <Form.Label ><h4>Interview Date</h4></Form.Label>
        <Form.Control type="date" 
        placeholder="Enter interview date"
        name="interviewdate"  
        value={club.interviewdate}
        onChange={handlechange}/>
      </Form.Group>

      <Button type="submit" onClick={handlesubmit} style={{backgroundColor:"#162443"}}
      onMouseEnter={setcolorRED} onMouseLeave={setcolorBLUE}>
        Submit
      </Button>
    </Form>
    </Container>
    </motion.div>
  );
}

export default Clubform;


