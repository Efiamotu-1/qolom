// import React from 'react'
// import Bunny from '../assests/images/carousel.jpg'


// function TestPage() {
//   return (
//       <>



      
      
      {/* <div class="container">

<div class="about-us-img m-auto" >
  <div class="opacity d-flex align-items-center">
    <div
      class="m-auto border border-5 border-secondary text-white d-flex flex-column align-items-center"
      style="width: 220px; height: 170px; margin-top: 50px"
    >
      <h2 class="text-center m-auto mt-5">ABOUT US</h2>
      <div class="d-flex">
        <a
          href="index.html"
          class="me-2 text-white text-decoration-none on-hover"
          >HOME
        </a>
        <div>/</div>
        <a
          href="about.html"
          class="ms-2 text-warning mb-5 text-decoration-none"
        >
          ABOUT US
        </a>
      </div>
    </div>
  </div>
</div>
</div> */}

    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  

  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  <div class="carousel-item active" data-bs-interval="1000">
                                    <h1 class="text-center">Queue virtually </h1>
    
                                    <div class="d-flex justify-content-center ">
                                        <h5 class="inner-carousel-width text-center">
    
                                            Be present only when you need to
                                        </h5>
                                    </div>
    
                                    <br/>
                                </div>
                                <div class="carousel-item" data-bs-interval="1000">
                                    <h1 class="text-center">Create your line</h1>
                                    <div class="d-flex justify-content-center ">
    
                                        <h5 class="inner-carousel-width text-center">
                                            Make your own line and manage the queue.
                                        </h5>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="1000">
                                    <h1 class="text-center">Make Orders</h1>
                                    <div class="d-flex justify-content-center ">
    
    
    
                                        <h5 class="inner-carousel-width text-center">
                                            Skip queues entirely.
                                            Just order and pick up
                                        </h5>
                                    </div>
                                    <br/>
                                </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}









//   </>
//   )
// }

// export default TestPage




// Layout starts from here

import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, CssBaseline,  Avatar, Divider, Drawer, Box, AppBar } from '@mui/material';
import PrimarySearchAppBar from './Navbar';
import { BusinessCenter, DashboardCustomize, LinearScale, EditAttributes, PasswordOutlined,} from '@mui/icons-material';
import { useNavigate, useLocation} from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import Logo from '../assests/images/logo-mock.jpg'
import {Routes, Route} from 'react-router-dom'
import Home from '../../src/Admin/Home';
import BusinessHours from '../../src/Admin/BusinessHours';
import CreateLine from '../../src/Admin/CreateLine';
import EditProfile from '../../src/Admin/EditProfile';
import ChangePassword from '../../src/Admin/ChangePassword'
// import { withStyles } from '@material-ui/styles';


const drawerWidth = 300;

const useStyles = makeStyles({
  active: {
      backgroundColor: 'red',
      // color : 'green',
   
  },
 center : {
   marginLeft : 'auto',
   marginRight : 'auto',
   margin : 30,
 },
 divider : {
  background : 'white'
},

whiteBg : {
  display : 'flex',
  flexDirection : 'column',
  alignItems : 'center',
   marginLeft : '20px',
   marginRight : '20px',
   borderRadius : 7,
   background : '#1F2937',
   width : 'auto',
   padding : 15,
   marginBottom : '20px'
}
})



function ResponsiveDrawer(props) {



  const { window } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  console.log()

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggler = (toggler) => {
    setMobileOpen(toggler);
  };

  const closeHandleDrawerToggler = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerList = [
    {
      text : "Dashboard",
      path : "dashboard",
      index : 1,
      icon : <DashboardCustomize />
    },
    {
      text : "Business Hours",
      path : "businesshours",
      index : 2,
      icon : <BusinessCenter />
    },
      {
      text : "Create Line",
      path : "createline",
      index : 3,
      icon : <LinearScale />
    },
   
    {
      text : "Edit Profile",
      path : "editprofile",
      index : 4,
      icon : <EditAttributes />
    },
    {
      text : "Change Password",
      path : "changepassword",
      index : 5,
      icon : <PasswordOutlined />
    },
   
    
  
  ]
  let style = { 
    borderRadius : 3, ml: 2, mr : 2, width : 'auto',
       '&:hover' : {
      // background : 'red',
     
    }, 
  };

  let hover = { 
    borderRadius : 3, ml: 2, mr : 2, width : 'auto',
       '&:hover' : {
      background : 'red',
     
    }, 
  };

  const Comp = ({myStyle, hover, list})=>{
    return (<ListItem 
      sx={{borderRadius : 3, ml: 2, mr : 2, width : 'auto',
      '&:hover' : {
     background : 'red',
    
   }, }}
      style={style}
      key={list.index}
      classes={{backgroundColor: 'red'} }
      //  className={classes.active}
       button
      //  selected={list.path}
      //  alignItems="flex-start"
       onClick={()=> navigate(list.path)}
      >
        
        <ListItemIcon 
        className = {classes.white}
        sx = {{color : 'white'}}
        >
          {list.icon} 
        </ListItemIcon>
       <ListItemText 
      //  sx={{fontSize : 1}}
       primary={list.text} 
       sx = {{color : '#f4f4f4', ml : -3,}}

       /> 
      </ListItem>)
  }

  // const customStyle = 
  const drawer = (

      <>
      {/* <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="right"
            onClick={closeHandleDrawerToggler}
            sx={{ color: 'white'}}
          >
      </IconButton> */}

          <Avatar
            src={Logo}
            sx={{ height: "70px", width: "70px" }}
            className={classes.center}
          />
           <div className={classes.whiteBg}>
            <Typography variant="h6" color="white">Acme Inc</Typography>
            <Typography paragraph color="gray">Your Premium</Typography>
          </div>
          
<Divider className={classes.divider}/>
      <List >
        {drawerList.map((list, i) =>{
          let myStyle = {};
          console.log("/admin/"+list.path === location.pathname)
            if(location.pathname === "/admin/"+list.path){
              console.log(true);
              myStyle = {...style, backgroundColor:'#1F2937', color : 'green'}
            }
            return (
              <Comp list={list} key={i} myStyle={myStyle} />
              
            )
        } 
        )}

      </List>
      <Divider className={classes.divider}/>
      
      
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          

        }}
      >
        {/* <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar> */}
        <PrimarySearchAppBar onToggle = {handleDrawerToggler}/>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
        aria-label="mailbox folders"
      >
        {/* <Toolbar sx={{flexDirection: 'column', backgroundColor : 'green'}}> */}
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={closeHandleDrawerToggler}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            // backgroundColor : 'rgb(17, 24, 39)',
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background : '#111827' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background : '#111827' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, background : '#f4f4f4', }}
      >
        <Toolbar />
        <Routes>
          <Route path="dashboard" element={<Home /> } />
          <Route path="businesshours" element={<BusinessHours /> } />
          <Route path="createline" element={<CreateLine /> } />
          <Route path="editprofile" element={<EditProfile /> } />
          <Route path="changepassword" element={<ChangePassword /> } />

        </Routes>

      </Box>

    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
