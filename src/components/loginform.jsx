import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Loginform = () => {

  const [admin, setadmin]=useState({
    email:"",
    password:"",
  })
  const navigate = useNavigate();

  const handlechange=(e)=>{
    e.preventDefault()
   const{name,value}=e.target
   setadmin((prev)=>({...prev,[name]:value}))
  }
  
  const setcolorRED=(e)=>{
    e.target.style.backgroundColor="#922623"
  }
  const setcolorBLUE=(e)=>{
     e.target.style.backgroundColor="#162443"
  }
const handlesubmit=(e)=>{
  e.preventDefault();
  if(admin.email==""||admin.password==""){
    alert("Please enter the credentials")
  }
  else{
  if(admin.email.startsWith("admin")&&admin.email.endsWith("@somaiya.edu")&&admin.password=="admin123"){
    navigate("/admin");
    setadmin({
    email:"",
    password:"",
    })
  }
  }
}
  return (
    <div 
    style={{marginInline:"15%", width:"100%"}}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email"
        onChange={handlechange} value={admin.email} name="email" />
        <Form.Text className="text-muted" name="email">
          Use Somaiya Email-Id.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" name="password"
         onChange={handlechange} value={admin.password} />
      </Form.Group>
      <br/>
      <Button variant="primary" type="submit" style={{backgroundColor:"#922623"}}
      onMouseEnter={setcolorBLUE} onMouseLeave={setcolorRED} onClick={handlesubmit}>
        Login
      </Button>
      <Button variant="primary" href="/register" style={{backgroundColor:"#922623",marginLeft:"10px"}}
      onMouseEnter={setcolorBLUE} onMouseLeave={setcolorRED} >
        Register
      </Button>
    </Form>
    </div>
  )
}

export default Loginform