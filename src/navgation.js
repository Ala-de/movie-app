import React from 'react'
import {Navbar,NavDropdown,Nav,Form,FormControl,Button } from 'react-bootstrap';
 import './film.css'
export default function Navgation() {
    return (
        <div>
<Navbar className="azaz" expand="lg">
  <Navbar.Brand href="#home">MOVIES</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Acceuil</Nav.Link>
      <Nav.Link href="#link">Apropos</Nav.Link>
      <Nav.Link href="#home">Films</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
        
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
