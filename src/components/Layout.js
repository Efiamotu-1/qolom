import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, CssBaseline,  Avatar, Divider, Drawer, Box, AppBar } from '@mui/material';
import PrimarySearchAppBar from './Navbar';
import { BusinessCenter, DashboardCustomize, ShoppingCart, AddShoppingCart, LinearScale, EditAttributes, PasswordOutlined, } from '@mui/icons-material';


import { useNavigate, useLocation} from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import Logo from '../assets/images/logo-mock.jpg'
import {Routes, Route} from 'react-router-dom'
import Home from '../../src/Admin/Home';
import BusinessHours from '../../src/Admin/BusinessHours';
import ManageLine from '../../src/Admin/ManageLine';
import EditProfile from '../../src/Admin/EditProfile';
import ChangePassword from '../../src/Admin/ChangePassword'
import Orders from '../../src/Admin/Orders'
import OrderManagement from '../../src/Admin/OrderManagement'
// import { withStyles } from '@material-ui/styles';


const drawerWidth = 300;

const useStyles = makeStyles({
  active: {
      backgroundColor: '#1F2937',
      // color : 'green',
   
  },

  colorGreen : {
    color : '#4ade80',
    // marginLeft : -25,
    // fontSize : 46,
    // fontWeight : 'bold'

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
      icon : <DashboardCustomize />
    },
    {
      text : "Business Hours",
      path : "businesshours",
      icon : <BusinessCenter />
    },
      {
      text : "Manage Line",
      path : "manageline",
      icon : <LinearScale />
    },

    {
      text : "Orders",
      path : "orders",
      icon : <ShoppingCart />
    },

    {
      text : "Order Management",
      path : "ordermanagement",
      icon : <AddShoppingCart />
    },
   
    {
      text : "Edit Profile",
      path : "editprofile",
      icon : <EditAttributes />
    },
    {
      text : "Change Password",
      path : "changepassword",
      icon : <PasswordOutlined />
    },
   
    
  
  ]
  // let style = { 
   
  //   }, 
  // };

  // let hover = { 
  //   borderRadius : 3, ml: 2, mr : 2, width : 'auto',
  //      '&:hover' : {
  //     background : 'red',
     
  //   }, 
  // };

  // const Comp = ({myStyle, hover, list})=>{
  //   return ()
  // }

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
      <List>
      {drawerList.map((list, i) => (
          <ListItem 
          sx={{borderRadius : 3, ml: 2, mr : 2, width : 'auto', color : '#f4f4f4',
       '&:hover' : {
      background : '#1F2937',
    
    }, }}
   key={i}
    className={location.pathname === "/admin/"+list.path ? classes.active : null}
   
    onClick={()=> navigate(list.path)}
          >
           <ListItemIcon 
    // className={location.pathname === "/admin/"+list.path ? classes.colorGreen : null}
    
    //  className = {classes.white}
     sx = {{color : '#f4f4f4'}}
     >
       {list.icon} 
     </ListItemIcon>

            <ListItemText 
    // className={location.pathname === "/admin/"+list.path ? classes.colorGreen : null} 
    primary={list.text} 
    sx = {{ ml : -3}}

    /> 
          </ListItem>
        ))}
      </List>
      <Divider />
     
       
{/* </List> */}
      <Divider className={classes.divider}/>

           {/* let myStyle = {};
           console.log("/admin/"+list.path === location.pathname)
             if(location.pathname === "/admin/"+list.path){
               console.log(true);
               myStyle = {...style, backgroundColor:'#1F2937', color : 'green'}
             }
             return (
               <Comp list={list} key={i} myStyle={myStyle} />
              
             )
           <ListItem 
    sx={{borderRadius : 3, ml: 2, mr : 2, width : 'auto',
       '&:hover' : {
      background : 'red',
    
    }, }}
   style={style}
   key={list.index}
   classes={{backgroundColor: 'red'} }
    className={classes.active}
    button
    selected={list.path}
    alignItems="flex-start"
    onClick={()=> navigate(list.path)}
   >
        
     <ListItemIcon 
     className = {classes.white}
     sx = {{color : 'white'}}
     >
       {list.icon} 
     </ListItemIcon>
    <ListItemText 
    sx={{fontSize : 1}}
    primary={list.text} 
    sx = {{color : '#f4f4f4', ml : -3,}}

    /> 
   </ListItem>
     */}

            
      
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
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
          <Route path="dashboard" element={<Home /> } />
          <Route path="businesshours" element={<BusinessHours /> } />
          <Route path="manageline" element={<ManageLine /> } />
          <Route path="editprofile" element={<EditProfile /> } />
          <Route path="changepassword" element={<ChangePassword /> } />
          <Route path="orders" element={<Orders /> } />
          <Route path="ordermanagement" element={<OrderManagement /> } />


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
