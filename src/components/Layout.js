import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
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
import { BusinessCenter, ChevronLeft, DashboardCustomize, LinearScale, ContactMail} from '@mui/icons-material';
import { useNavigate} from 'react-router-dom'
import { makeStyles } from '@material-ui/core';

const drawerWidth = 300;

const useStyles = makeStyles({
  active: {
      backgroundColor: '#f9f9f9',
      color : 'red'
  },
  white : {
    // backgroundColor : 'gray',
    // color : 'white'
  },
  red : {
    color : 'gray'
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
      text : "DASHBOARD",
      path : "/",
      index : 1,
      icon : <DashboardCustomize />
    },
    {
      text : "BUSINESS HOURS",
      path : "/businesshours",
      index : 2,
      icon : <BusinessCenter />
    },
      {
      text : "CREATE LINE",
      path : "/createline",
      index : 3,
      icon : <LinearScale />
    },
    {
      text : "CONTACT US",
      path : "/contactus",
      index : 4,
      icon : <ContactMail />
    },
  
  ]

  const drawer = (
    <div >
      <Toolbar 
      sx={{backgroundColor : 'rgb(17, 24, 39)', flexDirection : 'column', color : 'white', alignItems: 'flex-start', width: '100%'}}
      >
      <Divider />
      <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="right"
            onClick={closeHandleDrawerToggler}
            sx={{ color: 'white'}}
          >
               <ChevronLeft />
            {/* <MenuIcon /> */}
          </IconButton>
      <List>
        {drawerList.map((list) => (
          <ListItem 
          button key={list.index}
          className={classes.active}
          // className={location.pathname == list.path ? classes.active : null}
          onClick={()=> navigate(list.path)}
          >
            <ListItemIcon 
            className = {classes.white}
            sx = {{color : 'white'}}
            >
              {list.icon} 
            </ListItemIcon>
           <ListItemText primary={list.text} 
           className = {classes.red}
           /> 
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
      
      </Toolbar>
    </div>
  );
  console.log(classes.active)

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
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, backgroundColor : 'green' }}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
        {props.children}
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
