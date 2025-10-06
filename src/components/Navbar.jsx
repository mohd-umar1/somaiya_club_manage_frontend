import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Somaiyalogo from '../assets/somiayalogo.png';
import Trustlogo from '../assets/somaiyatrust.png';
import Kjsitlogo from '../assets/kjsit_logo.png'
import Whitesomaiya from '../assets/Whitesomaiya.png'

function ColorSchemesExample({setdisplayclub}) {
const handleview=()=>{
  setdisplayclub(prev=>!prev)
}

  return (
    <>
      <Navbar variant="underline" style= {{ backgroundColor: "#922623" }} data-bs-theme="dark" fixed="top" >
        <Container>
          <Navbar.Brand href="https://kjsit.somaiya.edu.in/en"><img src={Whitesomaiya} alt="somaiya logo" height="80"/></Navbar.Brand>
          <Nav className="me-auto fw-semibold">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/addclubs">Add Clubs</Nav.Link>
            <Nav.Link href="/view-clubs" onClick={handleview}>View Clubs</Nav.Link>
            <Nav.Link href="/view-registerations" >View Registerations</Nav.Link>
            </Nav>
            <Nav.Link className="ms-auto" href="https://www.somaiya.org/">
            <img src={Trustlogo} alt="somaiya trust logo" height="80"/>
            </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;