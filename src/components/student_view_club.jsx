import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Somaiyalogo from '../assets/somiayalogo.png'
import {Button, Container} from "react-bootstrap";
import Header from './Navbar';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Clubsearch from './clubsearch';
import Searchc from './search';
import { motion }  from "framer-motion";
import { clubcontext } from '../clubcontext';
import { Link } from "react-router-dom";
import Nabvar_user from './navbar_student';

function Student_Viewclubs() {

// const [loading, setloading] = useState(false)
const[displayclub,setdisplayclub] =useState(false)

// const{setselectedclub} = useContext(clubcontext)


const [clubs, setclubs] =useState([{}])
useEffect(() => {
  const fetchdata = async () => {
    try {
      const response = await axios.get("http://localhost:8086/api/getclubs");
      setclubs(response.data);
      // setloading(true);
    } catch (error) {
      console.error(error);
    }
    // setloading(false);
  };
  fetchdata();
},[displayclub]);

const handleapply=()=>{
  alert("applied sucessfully")
}


const setcolorRED=(e)=>{
    e.target.style.backgroundColor="#922623"
  }
  const setcolorBLUE=(e)=>{
     e.target.style.backgroundColor="#162443"
 
}
// const setcolorDARKBLUE=(e)=>{
//   e.target.style.backgroundColor="#00021cff"
// }
  return (
    <>
    <Nabvar_user displayclub={displayclub} setdisplayclub={setdisplayclub}/>
    {
    clubs.length>0?
    <>
    <Container className="align-items-center"style={{ backgroundColor: "#f8f9fa", marginTop: '8rem' }}>
    <Row xs={1} md={3} className="g-4 justify-content-center">
    {clubs.map((club,index) => (
        <Col key={club.id} className="d-flex " style={{ width:"380px"}}>
         <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:index*0.2,duration:0.5}}
            >
          <Card style={{maxHeight:"1000px"}}>
            <Card.Img variant="top" src={Somaiyalogo} />
            <Card.Body>
              <Card.Title>{club.clubname}</Card.Title>
              <Card.Subtitle>{club.department}</Card.Subtitle>
              <Card.Text>
                {club.description}
              </Card.Text>
              <Card.Subtitle>{club.interviewdate}</Card.Subtitle>
              <br/>
              <Button variant="primary" style={{backgroundColor:"#922623"}} 
              onMouseEnter={setcolorBLUE} onMouseLeave={setcolorRED} onClick={handleapply}>
              Apply
            </Button>
            </Card.Body>
          </Card>
          </motion.div>
        </Col>
    ))}
    </Row>
    </Container>
    </>
     :<div style={{alignItems:"center",marginTop: '75%',fontSize:"medium"}}><h1>No Clubs are added</h1></div>
    }
     </>
  );
}
export default Student_Viewclubs