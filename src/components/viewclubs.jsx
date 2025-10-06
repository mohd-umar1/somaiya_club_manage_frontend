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

function Viewclubs() {

// const [loading, setloading] = useState(false)
const[displayclub,setdisplayclub] =useState(false)

const{setselectedclub} = useContext(clubcontext)

const handleedit=(club)=>{
   setselectedclub({
    id:club.id,
    clubname:club.clubname,
    department:club.department,
    description:club.description,
    interviewdate:club.interviewdate,
   })
}

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

const handledelete = async (id)=>{
  try {
  const response = await axios.delete(`http://localhost:8086/api/deleteclub/${id}`);
    if(response.data===true){
    alert("club deleted sucessfully")
    }
    // if(displayclub){
    // setdisplayclub(false)
    // }else{
    // setdisplayclub(true)
    // }
    setdisplayclub(prev => !prev)
  }
  catch (error) {
  console.error(error)
  alert("there was some problem in deleting the club");
  }
  }

const setcolorRED=(e)=>{
    e.target.style.backgroundColor="#922623"
  }
  const setcolorBLUE=(e)=>{
     e.target.style.backgroundColor="#162443"
  }
const setcolorBrown=(e)=>{
  e.target.style.backgroundColor="#550808ff"
}
const setcolorDARKBLUE=(e)=>{
  e.target.style.backgroundColor="#00021cff"
}
  return (
    <>
    <Header displayclub={displayclub} setdisplayclub={setdisplayclub}/>
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
              <Button variant="primary" style={{backgroundColor:"#162443"}} 
              onMouseEnter={setcolorDARKBLUE} onMouseLeave={setcolorBLUE} 
              //we are using Link because using href will reload the page and reset react components
              //and we need component to show in edit section
              as={Link} // it will Render the Button as a Link
              to="/edit-club" // it will set the target route
              onClick={()=>handleedit(club)}>
              Edit
            </Button>
            <Button variant="primary" href={`#delete-club${club.id}`} style={{backgroundColor:"#922623",marginLeft:"5px"}} onClick={()=>handledelete(club.id)}
              onMouseEnter={setcolorBrown} onMouseLeave={setcolorRED}>
              Delete
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
export default Viewclubs