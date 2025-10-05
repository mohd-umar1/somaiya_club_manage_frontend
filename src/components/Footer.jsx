import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Somaiyalogo from '../assets/somiayalogo.png';

function Footer() {
  return (
    <>
      <Navbar style= {{ backgroundColor: "#162443" }} data-bs-theme="dark" fixed="bottom" text="">
        <Container className="justify-content-center">
          <Nav className="me-auto">
            <Nav.Link >All Rights Reserved ©</Nav.Link>
            <Nav.Link href="/team14">developed by: Team 14</Nav.Link>
            <Nav.Link href="#resume-umar">View Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;