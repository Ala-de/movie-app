import React from 'react'
import {Navbar,Nav,Form,FormControl } from 'react-bootstrap';
import {Link, Route, Router} from 'react-router-dom'
import './film.css'
export default function Navgation({handelchange}) {
    return (
        <div>
<Navbar className="azaz" expand="lg">
  <Navbar.Brand href="#home">MOVIES</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
   
    <Nav className="links">
     
    <Link to="/"><li>Home</li></Link>
      
      <Link to="/"><li>Films</li></Link>

        <Link to="/favorie"><li>Favorie</li></Link>
        <Link to="/Contact"><li>contact</li></Link>
        
      
    </Nav>
   
    <Form inline className="limine ml-auto">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handelchange} />
  
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
