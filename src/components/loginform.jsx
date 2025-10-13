import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Await, Navigate, useNavigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode";

const Loginform = () => {

  const [login, setlogin]=useState({
    username:"",
    password:"",
  })
  const navigate = useNavigate();

  const handlechange=(e)=>{
    e.preventDefault()
   const{name,value}=e.target
   setlogin((prev)=>({...prev,[name]:value}))
  }
  
  const setcolorRED=(e)=>{
    e.target.style.backgroundColor="#922623"
  }
  const setcolorBLUE=(e)=>{
     e.target.style.backgroundColor="#162443"
  }
const handlesubmit= async (e)=>{
  e.preventDefault();
  if(login.username==""||login.password==""){
    alert("Please enter the credentials")
  }
  // else{
  // if(admin.email.startsWith("admin")&&admin.email.endsWith("@somaiya.edu")&&admin.password=="admin123"){
  //   navigate("/admin");
  //   setadmin({
  //   email:"",
  //   password:"",
  //   })
  // }
  // }
  else{
     const response = await axios.post("http://localhost:8086/auth/login",login).then(
      setlogin({
        username:"",
        password:"",
      })
     )
     if(response.data!=""){
      console.log(response.data)
      localStorage.setItem("jwttoken",response.data)
      const token = localStorage.getItem("jwttoken");
      if(token){
        const decodeed_token = jwtDecode(token);
        const role = decodeed_token.Role||decodeed_token.role

        if(role =="ADMIN"){
          navigate("/admin")
        }else if(role=="STUDENT"){
          navigate("/student-home")
        }
      }
     }else{
      alert("Wrong Credentials")
     }
  }
}
  return (
    <div 
    style={{marginInline:"15%", width:"100%"}}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Username"
        onChange={handlechange} value={login.username} name="username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" name="password"
         onChange={handlechange} value={login.password} />
      </Form.Group>
      <br/>
      <Button variant="primary" type="submit" style={{backgroundColor:"#162443"}}
      onMouseEnter={setcolorRED} onMouseLeave={setcolorBLUE} onClick={handlesubmit}>
        Login
      </Button>
      <Button variant="primary" href="/register" style={{backgroundColor:"#162443",marginLeft:"10px"}}
      onMouseEnter={setcolorRED} onMouseLeave={setcolorBLUE} >
        Register
      </Button>
    </Form>
    </div>
  )
}

export default Loginform