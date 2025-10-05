import React, { useContext } from 'react'
import axios from 'axios';
import { useState } from 'react'
import { Col, Container, Form, Button } from 'react-bootstrap'
import {motion} from "framer-motion";
import { clubcontext } from '../clubcontext';

const Clubeditform = () => {

const{selectedclub} = useContext(clubcontext);

const[club,setclub]= useState({
    id:selectedclub?.id,
    clubname:selectedclub?.clubname||"",
    department:selectedclub?.department||"",
    description:selectedclub?.description||"",
    interviewdate:selectedclub?.interviewdate||"",
})

// console.log(selectedclub) -> to check what value selectclub contains and if usecontet is working
// console.log(club)-> to check if the value of club is updated to that of selected club

const handlechange=(e)=>{
    const {name,value}= e.target;
setclub((prev)=>({...prev,[name]:value}))
}

const handlesubmit = async (e)=>{

    e.preventDefault();
    try {
      await axios.put(`http://localhost:8086/api/updateclub/${selectedclub.id}`,club);

    } catch (error) {
      console.error(error)
      alert("there was some error in editing the club")
      console.log(club)
    }
    setclub({clubname:"",
    department:"",
    description:"",
    interviewdate:"",})
}

  const setcolorRED=(e)=>{
    e.target.style.backgroundColor="#922623"
  }
  const setcolorBLUE=(e)=>{
     e.target.style.backgroundColor="#162443"
}
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.3}}>
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
        Edit
      </Button>
     </Form>
    </Container>
    </motion.div>
  )
}

export default Clubeditform