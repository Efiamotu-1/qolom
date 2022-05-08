import React from 'react'
import { makeStyles } from '@material-ui/core';
import {Box, Grid, Link, Typography} from '@mui/material'
import Logo from '../assests/images/logo-mock-removebg-preview.png'
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'


const usesStyles = makeStyles({
    hoverlink : {
      cursor: 'pointer',
      "&:hover" : {
        color : '#1E3A8A',
        
      }
    }
})

function Footer() {

  const classes = usesStyles()

  return (


    <Grid container spacing={2} sx={{ background : '#a8a29e', color : 'white', display : 'flex', justifyContent : 'center', pt : 5, pb : 20}}>
  <Grid item xs={12} md={4} lg={4} sx={{mx : 5, mb : 4 }}>
  <img 
            src={Logo}
            width='100px'
            height='70px'
            alt='...Logo'
            />
            <Typography paragraph>
            Talent is everywhere, but opportunity is not.
            </Typography>

            <Typography paragraph>
            Follow us on our journey to help you skip the hassle of queues 
            and get what you want at the click of a button connect
            </Typography>
            <Box sx={{width : 300, display : 'flex', justifyContent : 'space-between'}}>
                <Facebook sx={{width : '50px', height: '50px', background : '#3b82f6', borderRadius : 2}}/>
                <Instagram sx={{width : '50px', height: '50px', background : 'linear-gradient(to left ,#8a3ab9, #e95950, #bc2a8d, #fccc63, #fbad50, #cd486b, #4c68d7);', borderRadius : 2}}/>
                <Twitter sx={{width : '50px', height: '50px', background : '#60a5fa', borderRadius : 2}}/>
                <YouTube sx={{width : '50px', height: '50px', background : 'red', borderRadius : 2}}/>
            </Box>
            
  </Grid>

  <Grid item xs={12} md={3} lg={3} sx={{mx : 5, mb : 4}}>
  <Typography variant="h4" color="#93c5fd"> Company </Typography>
           <Typography variant="h6" className={classes.hoverlink}>Home</Typography>
           <Typography variant="h6" className={classes.hoverlink}>Contact</Typography>
           <Typography variant="h6" className={classes.hoverlink}>Sign In</Typography>
           <Typography variant="h6" className={classes.hoverlink}>Sign Up</Typography>
           <Typography variant="h6" className={classes.hoverlink}>Sign Up(Business)</Typography>
           <Typography variant="h6" className={classes.hoverlink}>Forgot Password</Typography>
 </Grid>
  <Grid item xs={12} md={3} lg={3} sx={{mx : 5, }}>
  <Typography variant="h4" color="#93c5fd">Location</Typography>
    <Typography paragraph>
    Qolom Ltd
    K55/56, Ikota Complex,
    Victoria Garden City,
    Lagos.
    Tel: + 234 811 719 4807
    E-mail: support@qolom.com
    </Typography>
  </Grid>

  <Box sx={{display : 'flex', flexDirection : 'column', margin : 'auto', mt : 5,}}>
    <Box>
    <Link href="#" variant='h6' underline="hover" color="white" >
  Terms of use
</Link>

<Link href="#" variant='h6' underline="hover" color="white" sx={{ml : 2}}>
    Privacy policy
</Link>
    </Box>

    <Typography variant='h6'>Copyright &copy; 2022 Qolom Ltd</Typography>

    <Typography variant='h6' align='center'>All rights reserved</Typography>
 
  </Box>

</Grid>
  )
}

export default Footer