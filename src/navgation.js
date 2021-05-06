import React from 'react'
import {Navbar,NavDropdown,Nav,Form,FormControl } from 'react-bootstrap';
import {Link} from 'react-router-dom'
 import './film.css'
export default function Navgation() {
    return (
        <div>
<Navbar className="azaz" expand="lg">
  <Navbar.Brand href="#home">MOVIES</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="links">
    <Link to="/">Home</Link>
      
      <Link to="/"><li>Films</li></Link>

        <Link to="/favorie">Favorie</Link>
        
        
    </Nav>
    <Form inline className="limine ml-auto">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
