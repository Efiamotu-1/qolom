import React from 'react'
// import { Link } from 'react-router-dom'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core';
import Logo from '../assests/images/logo-mock-removebg-preview.png'
// import Carousels from '../components/Carousel';
import { Button } from '@mui/material';


let useStyles = makeStyles({
  layoutBackground : {
    background: "linear-gradient(to left, #1E3A8A,#03001c);"
  }
})

function LandingPage() {
const classes = useStyles();

  return (
    <div className={classes.layoutBackground}>


       <Navbar collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home">
    <img 
    src={Logo}
    alt="../"
    width='150px'
    />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Features</Nav.Link>
      <NavDropdown title="Products" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/login">
      <Button variant="outlined" sx={{color : 'white'}} >LOG IN</Button>
      </Nav.Link>

      <Nav.Link eventKey={2} href="/register">
      <Button variant="outlined" sx={{color : 'white'}} >SIGN UP</Button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

   {/* <Carousels /> */}

    </div>
  )
}

export default LandingPage;