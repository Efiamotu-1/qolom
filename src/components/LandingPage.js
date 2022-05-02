import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core';
import Logo from '../assests/images/logo-mock-removebg-preview.png'
import bodyImage from '../assests/images/covid-queue.jpg'


let useStyles = makeStyles({
  layoutBackground : {
    background: "linear-gradient(to left, #0550ae,#03001c);"
  }
})

function LandingPage() {
const classes = useStyles();

  return (
    <div className={classes.layoutBackground}>
       <Link to = "/admin"> Welcome Home </Link>


       <Navbar collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
    <img 
    src={Logo}
    alt="../"
    width = "70px"
    height = '50px'
    />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    <Container>
    <img 
    alt="../"
    src={bodyImage}
    width = '100%'
    />
    </Container>

    </div>
  )
}

export default LandingPage;