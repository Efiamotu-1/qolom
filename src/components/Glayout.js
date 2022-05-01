import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import PrimarySearchAppBar from './Navbar';
import { BusinessCenter, DashboardCustomize, LinearScale, EditAttributes, PasswordOutlined} from '@mui/icons-material';
import { useNavigate, useLocation} from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import { Avatar} from '@mui/material';
import Logo from '../assests/images/logo-mock.jpg'
import {Routes, Route} from 'react-router-dom'
import BusinessHours from '../pages/BusinessHours';
import Home from '../pages/Home';
import CreateLine from '../pages/CreateLine';
import EditProfile from '../pages/EditProfile';
import ChangePassword from '../pages/ChangePassword'


const drawerWidth = 240;

const useStyles = makeStyles({
  active: {
      backgroundColor: '#f9f9f9',
      color : 'green',
   
  },
 center : {
   marginLeft : 'auto',
   marginRight : 'auto',
   margin : 40
 },
 divider : {
  background : 'white'
}
})

function ResponsiveDrawer(props) {



  const { window } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();

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
      index : 4,
      icon : <PasswordOutlined />
    },
    //  {
    //   text : "Contact Us",
    //   path : "/contactus",
    //   index : 4,
    //   icon : <ContactMail />
    // },
    // {
    //   text : "Log Out",
    //   path : "/logout",
    //   index : 4,
    //   icon : <Logout />
    // },
 
   
    
  
  ]
  
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
          {/* <Typography className={classes.active}>
            <Typography variant="h6">Prabhatsinh Rathod</Typography>
            <Typography paragraph>UI/UX Designer</Typography>
          </Typography> */}
          {/* <div className="center">
            <Button
              variant="contained"
              startIcon={<RadarOutlined />}
              color="primary"
            >
              Become a Pro
            </Button>
          </div> */}
<Divider className={classes.divider}/>
      <List>
        {drawerList.map((list) => (
          <ListItem 
          button key={list.index}
          className={location.pathname === list.path ? classes.active : null}
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
           sx = {{color : '#f4f4f4'}}

           /> 
          </ListItem>
          
        ))}

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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background : 'rgb(17, 24, 39)' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background : 'rgb(17, 24, 39)' },
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