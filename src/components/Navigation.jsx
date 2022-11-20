import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import kota from "../pictures/kota.png";
import odyssey from "../pictures/odyssey.svg"
import Image from 'react-bootstrap/Image'

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={odyssey}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <h2 className="odyssey-head">&nbsp;&nbsp;Odyssey</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="fs-5">Home</Nav.Link>
            <Nav.Link href="#about" className="fs-5">About Us</Nav.Link>
            <Nav.Link href="#gallery" className="fs-5">Gallery</Nav.Link>
            <Nav.Link href="#team" className="fs-5">Our Team</Nav.Link>
            <Nav.Link href="#contact" className="fs-5">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
