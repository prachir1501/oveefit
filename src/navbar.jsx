import React from "react";

import {Navbar,NavDropdown,Nav} from 'react-bootstrap';

function Nav2()
{

   return(

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">OVEE Fit</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Team</Nav.Link>
      <Nav.Link href="#pricing">Business Model</Nav.Link>
      <Nav.Link href="#pricing">Features</Nav.Link>
      <Nav.Link href="#pricing">Hiring!</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

// {/* <h1>HEllo</h1> */}

   );

}

export default Nav2;