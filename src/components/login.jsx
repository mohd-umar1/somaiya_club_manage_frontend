import React, { useEffect, useState } from 'react'
import Edge from './theedge'
import { Col, Row } from 'react-bootstrap'
import somaiyalogin from "../assets/kjsit_login.jpg"
import kjsitlogo from "../assets/kjsit_logo.png"
import somaiyatrust from "../assets/somaiyatrust.png"
import Loginform from './loginform'
import { motion }  from "framer-motion";

const Login = () => {

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
        <Col xl={6} className='p-0 mb-md-0' style={{ height: "100%", width: "50%"}}>
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
         <Col xl={6} className='d-flex flex-wrap justify-content-center'style={{ height: "80%", width: "50%" }}>
         <div style={{display:"flex",width:"100%",marginInline:"5%"}}>
         <img src={kjsitlogo} style={{height:"48%",width:"80%", display:"flex",marginTop:"100px"}}/>
         <img src={somaiyatrust} style={{height:"100px",width:"140px", display:"flex",marginTop:"100px",marginLeft:"50px"}} />
         </div>
         <br/>
         <h1 className='display-4 fw-light'>Welcome to Somaiya Club Management System</h1>
         <br/>
         <Loginform/>
         </Col>
      </Row>
    </div>
    </motion.div>
  )
}

export default Login