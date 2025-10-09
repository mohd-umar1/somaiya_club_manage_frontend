import React from 'react'
import { useEffect } from 'react'
import Edge from './theedge'
import { Col, Row } from 'react-bootstrap'
import somaiyalogin from "../assets/kjsit_login.jpg"
import kjsitlogo from "../assets/kjsit_logo.png"
import somaiyatrust from "../assets/somaiyatrust.png"
import Loginform from './loginform'
import Registerform from './registerationform'
import { motion }  from "framer-motion";


const Register = () => {
    
     useEffect(() => {
  const root = document.getElementById("root");
  root.style.maxWidth = "100%";
  root.style.margin = "0";
  root.style.padding = "0";

  return () => {
    // Restore original styles when leaving page
    root.style.maxWidth = "";
    root.style.margin = "";
    root.style.padding = "";
  };
}, []);

  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.9}}>
    <div className="fullscreen-page">
      <Edge style={{ zIndex: 9999 }} />
      <Row className="g-0 p-0" style={{ margin: 0, padding: 0,height: "100vh",}}>
        <Col xl={6} md={6} className='p-0' style={{ height: "100%", width: "50%"}}>
        <img src={somaiyalogin} 
        style={{
          height:"100vh",
          marginTop:"28px",
          objectFit: "cover",
          margin:0, 
          width: "100%",
          display: "block",
        }}/>
         </Col>
         <Col xl={6} md={6} className='d-flex flex-wrap justify-content-center align-items-center'style={{ height: "95%", width: "50%" }}>
         <div style={{display:"flex",width:"100%",marginLeft:"5%",marginRight:"10%"}}>
         <img src={kjsitlogo} style={{height:"48%",width:"80%",marginTop:"70px"}} href="https://kjsit.somaiya.edu.in/en/"/>
         <img src={somaiyatrust} style={{height:"13%",width:"21%",marginTop:"70px",marginLeft:"30px"}} href="https://www.somaiya.org/" />
         </div>
         <h1 className='display-4 fw-light'>Student Registeration</h1>
         <Registerform/>
         </Col>
      </Row>
    </div>
    </motion.div>
  )
}

export default Register