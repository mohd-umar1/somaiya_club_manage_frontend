import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Clubeditform from './clubeditform'
import Eventphoto from '../assets/unnamed.webp';
import Header from './Navbar';


const Clubedit = () => {
  return (
    <>
    <Header/>
    <section style={{backgroundColor: "#f8f9fa", marginTop: '8rem'}}>
    <Container>
        <Row>
            <Col md={6} style={{padding:"10px"}}>
            <Clubeditform/>
            </Col>
            <Col md={6}>
            <img
            src={Eventphoto}
            className='img-fluid'
            style={{height:"100%", width:"100%"}}
            />
            </Col>
        </Row>
    </Container>
    </section>
    </>
  )
}

export default Clubedit