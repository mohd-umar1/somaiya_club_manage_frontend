import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router';

const Registerform = () => {
  const [student, setstudent] = useState({
    name:"",
    department:"",
    yearofstudy:"",
    phone_number:"",
    email_id:"",
    username:"",
    password:"",
    role:"",
  })

  const handlechange=(e)=>{
    const {name,value} = e.target
    setstudent((prev)=>({...prev,[name]:value}))
  }

  const handlesubmit=async(e)=>{
    
    e.preventDefault();
    
    if(student.name==""||
      student.department==""||
      student.email_id==""||
      student.phone_number==""||
      student.yearofstudy==""||
      student.username==""||
      student.password==""
    ){
      alert("Please enter all Credentials")
    }
    else{
    try {
      await axios.post("http://localhost:8086/studentapi/registration",student);
    } catch (error) {
      console.log(error)
    }

    setstudent({
    name:"",
    department:"",
    yearofstudy:"",
    phone_number:"",
    email_id:"",
    username:"",
    password:"",
    role:"",})
    }
  }

  const setcolorRED=(e)=>{
    e.target.style.backgroundColor="#922623"
  }
  const setcolorBLUE=(e)=>{
     e.target.style.backgroundColor="#162443"
  }
  return (
    <div style={{width:"100%",marginInline:"15%"}}>
     <Form onSubmit={handlesubmit} >
      <div className='text-start'>
      <div className="d-flex flex-row" >
      <Form.Group className="mb-3"  style={{width:"50%"}}>
        <Form.Label className='fw-bold'>Name</Form.Label>
        <Form.Control
         name="name"
         value={student.name}
         type="text"
         placeholder="Enter Name" 
         onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-3 ms-3" style={{width:"50%"}}>
        <Form.Label className='fw-bold'>Department</Form.Label>
        <Form.Control
        name="department"
        value={student.department} 
        type="text" 
        placeholder="Enter Department"
        onChange={handlechange} />
      </Form.Group>
      </div>
      <div className="d-flex flex-row" >
      <Form.Group className="mb-3"style={{width:"50%"}} >
        <Form.Label className='fw-bold'>Year of Study</Form.Label>
        <Form.Control 
        name="yearofstudy"
        value={student.yearofstudy}
        type="text" 
        placeholder="Enter Year of Study"
        onChange={handlechange} />
      </Form.Group>
      <Form.Group className="mb-3 ms-3" style={{width:"50%"}} >
        <Form.Label className='fw-bold'>Phone number</Form.Label>
        <Form.Control
        name="phone_number"
        value={student.phone_number} 
        type="tel" 
        placeholder="Enter Phone Number"
        onChange={handlechange} />
      </Form.Group>
      </div>
      <div className="d-flex flex-row" >
      <Form.Group className="mb-3" style={{width:"50%"}} >
        <Form.Label className='fw-bold'>Email address</Form.Label>
        <Form.Control
        name="email_id"
        value={student.email_id} 
        type="email" 
        placeholder="Enter email"
        onChange={handlechange} />
      </Form.Group>
      <Form.Group className="mb-3 ms-3"style={{width:"50%"}}>
        <Form.Label className='fw-bold'>Username</Form.Label>
        <Form.Control
        name="username"
        value={student.username} 
        type="text" 
        placeholder="Enter Username"
        onChange={handlechange} />
      </Form.Group>
      </div>
      <div className="d-flex flex-row" >
      <Form.Group className="mb-3" style={{width:"50%"}}>
        <Form.Label className='fw-bold'>Password</Form.Label>
        <Form.Control
        name="password"
        value={student.password} 
        type="password" 
        placeholder="Password"
        onChange={handlechange} />
      </Form.Group>
      <Form.Group className="mb-3 ms-3" style={{width:"50%"}}>
      <Form.Label className='fw-bold'>Role</Form.Label>
      <Form.Select name="role" value={student.role}
      onChange={handlechange}>
        <option value="">--Select--</option>
        <option value="STUDENT">Student</option>
        <option value="ADMIN">Admin</option>
      </Form.Select>
      </Form.Group>
      </div>
      </div>
      <Button variant="primary" type="submit"
      onMouseEnter={setcolorRED} onMouseLeave={setcolorBLUE}
      style={{backgroundColor:"#162443",marginRight:"5%"}}> 
        Submit
      </Button>
      <a href="/">Login page</a>
    </Form>
    </div>
  )
}

export default Registerform