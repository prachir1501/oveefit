import React from "react";

import {Navbar,NavDropdown,Nav} from 'react-bootstrap';

function Nav2()
{

   return(

    <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-color">
  <Navbar.Brand href="/">OVEE Fit</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/team">Team</Nav.Link>
      <Nav.Link href="/business">Business Model</Nav.Link>
      <Nav.Link href="/features">Features</Nav.Link>
      <Nav.Link href="/hiring">Hiring!</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

// {/* <h1>HEllo</h1> */}

   );

}

export default Nav2;