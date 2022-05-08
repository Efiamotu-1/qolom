import React from "react";
// import { Link } from 'react-router-dom'
import { Navbar, Nav, } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import Logo from "../assests/images/logo-mock-removebg-preview.png";
import Carousels from "../components/Carousel";
import Footer from "../components/Footer";

import { Grid, Avatar } from "@mui/material";
import { BusinessCenter, People, TimerTwoTone } from "@mui/icons-material";
import {Typography } from '@mui/material'
// background: "linear-gradient(to left ,#03001c, #1E3A8A);",

let useStyles = makeStyles({
  layoutBackground: {
    background: "linear-gradient(to bottom ,#0891b2, #0369a1, #1E3A8A, #1e3a8a, #03001c);",
  },
  hover: {
    "&:hover": {
      fontSize: 18,
      color: "white",
      // background : 'lightblue'
    },
  },
  opacity : {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
});

function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.layoutBackground}>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home" >
          <img src={Logo} alt="../" width="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
          </Nav>
          <Nav className="mx-3">
            <Nav.Link href="/" className={classes.hover}>
              Home
            </Nav.Link>

            <Nav.Link href="/login" className={classes.hover}>Log In</Nav.Link>

            <Nav.Link eventKey={2} href="/register" className={classes.hover}>
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Carousels />

      <Grid container spacing={4} sx={{color : 'white', display : 'flex', justifyContent : 'center', py : 20}}>
        <Grid item xs={12} md={3} lg={3}>
          <Avatar sx={{width : '70px', height : '70px', margin : 'auto', mb : 5}}> 
           <TimerTwoTone />
         </Avatar>
         
          <Typography variant="h4" align="center">Save Time</Typography>
          <Typography paragraph align="center">
            You can save a lot of time by doing other activities while you
            queue. Only be present when you it's time for you to be attended to
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} lg={4} >
        <Avatar sx={{width : '70px', height : '70px', margin : 'auto', mb : 5}}> 
           <BusinessCenter />
         </Avatar>
          <Typography variant="h4" align="center">Skip Queues</Typography>
          <Typography paragraph align="center">
            You can skip queues entirely by using our ordering service. You will
            be notified when the order is ready and you only have to pick it up
          </Typography>
        </Grid>

        <Grid item xs={12} md={3} lg={3}>
        <Avatar sx={{width : '70px', height : '70px', margin : 'auto', mb : 5}}> 
           <People />
         </Avatar>
          <Typography variant="h4" align="center">
            Control Your Queue
          </Typography>
          <Typography paragraph align="center">
            You can also create you own queue and have complete control over it.
            Set opening and closing time, send messages to people on the queue,
            remove people, and many more
          </Typography>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default LandingPage;