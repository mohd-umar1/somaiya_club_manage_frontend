import React from 'react'
import Somaiyalogo from '../assets/somiayalogo.png'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Button, Container} from "react-bootstrap";

const Clubsearch = ({clubs,handleapply,searchvalue}) => {
  return (
    <Container className="align-items-center"style={{ backgroundColor: "#f8f9fa", marginTop: '2rem' }}>
    <Row xs={1} md={3} className="g-4">
    {clubs.filter(club => (club.clubname|| "").toLowerCase().includes((searchvalue || "").toLowerCase())).map((club) => (
        <Col key={club.id} className="d-flex " style={{ width:"380px"}}>
          <Card style={{height:"600px"}}>
            <Card.Img variant="top" src={Somaiyalogo} />
            <Card.Body>
              <Card.Title>{club.clubname}</Card.Title>
              <Card.Subtitle>{club.department}</Card.Subtitle>
              <Card.Text>
                {club.description}
              </Card.Text>
              <Card.Subtitle>{club.interviewdate}</Card.Subtitle>
              <br/>
              <br/>
              <Button variant="primary" href={`#join-club${club.id}`} style={{backgroundColor:"#162443"}} onClick={handleapply}>
              Apply
            </Button>
            </Card.Body>
          </Card>
        </Col>
    ))}
    </Row>
    </Container>
  )
}

export default Clubsearch