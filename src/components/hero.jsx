import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImage from "../assets/hero_image_kjsit.webp";
import { motion }  from "framer-motion";


const HeroSection = () => {

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
    transition={{duration:0.5}}>

    <section className="hero-section " style={{ backgroundColor: "#f8f9fa", marginTop: '10rem' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0" style={{paddingleft:"20px"}}>
            <h1 className="display-4 fw-bold">Welcome to Somaiya Club Management system</h1>
            <p className="lead">
              Manage all your student clubs, registrations, and events in one place.
            </p>
            <Button variant="primary" href="/addclubs" onMouseEnter={setcolorRED}
            onMouseLeave={setcolorBLUE} style={{backgroundColor:"#162443"}}>
              Get Started
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={heroImage}
              alt="Hero"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
    </motion.div>
  );
};

export default HeroSection;
