
import { Container, Row, Col, Button } from "react-bootstrap";
import Eventphoto from '../assets/unnamed.webp';
import Clubform from './clubform';
import ColorSchemesExample from '../components/Navbar';
import {motion} from "framer-motion"

const Clubadd = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}>

    <section style={{backgroundColor: "#f8f9fa", marginTop: '8rem'}}>
      <Container className="club-add ">
        <Row>
          <Col md={6}>
          <div style={{ padding:"10px"}}>
          <Clubform/>
          </div>
          </Col>
          <Col md={6}>
          <img src={Eventphoto} alt="photo of event "
          className='text-center img-fluid'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
           />
          </Col>
        </Row>
      </Container>
    </section>
    </motion.div>
  )
}

export default Clubadd;