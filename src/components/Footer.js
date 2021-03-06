import React from 'react'
import { makeStyles } from '@material-ui/core';
import {Box, Grid, Link, Typography} from '@mui/material'
import Logo from '../assets/images/vector/default-monochrome.svg'

import { Facebook,  Instagram, Twitter, YouTube } from '@mui/icons-material'


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


    <Grid container spacing={2} sx={{background: 'rgb(26, 25, 25, 0.5)', color : 'white', display : 'flex', justifyContent : 'start', py : 8}}>

    <Grid item xs={12} md={4} lg={4} >
      <Box sx={{width : 200, margin : 'auto'}}>
      <Box
        component="img"
        sx={{
          height: 50,
          width: 100,
          marginLeft : 5,
          marginRight : 5,
          marginTop : -2,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="...logo"
        src={Logo}
      />
  

             <Typography paragraph align="center" sx={{width : '100%', mb : 1}}>
             Follow us on our journey to help you skip the hassle of queues 
             and get what you want at the click of a button connect with us via our socials
             </Typography>
             <Box sx={{width : '100%', display : 'flex', justifyContent : 'space-around', mb : 2,}}>
                 <Facebook sx={{width : '30px', height: '30px'}}/>
                 <Instagram sx={{width : '30px', height: '30px'}}/>
                 <Twitter sx={{width : '30px', height: '30px'}}/>
                 <YouTube sx={{width : '30px', height: '30px'}}/>
            </Box>
 
      </Box>
    </Grid>

    <Grid item xs={6} md={4} lg={4} >
    <Box sx={{width : '100%', margin : 'auto', paddingLeft : 2}}>
    <Typography variant="h5" align='center'> Company </Typography>
    <Typography align="center">
    <Link href="/" underline='hover' paragraph color="white" className={classes.hoverlink}>Contact</Link>

    </Typography>

    <Typography align="center">
    <Link href="/" underline='hover' paragraph color="white" className={classes.hoverlink}>Sign In</Link>

</Typography>

<Typography align="center">
<Link href="/" underline='hover' paragraph color="white" className={classes.hoverlink}>Sign Up</Link>

</Typography>

<Typography align="center">
<Link href="/" underline='hover' paragraph color="white" className={classes.hoverlink}>Sign UP(Business)</Link>

</Typography>

<Typography align="center">
<Link href="/" underline='hover' paragraph color="white" className={classes.hoverlink}>Forgot Password</Link>

</Typography>


            
   
      </Box>
    </Grid>

    <Grid item xs={6} md={4} lg={4}>
    <Box sx={{width : '100%', margin: 'auto' }}>
    <Typography variant="h5" >Location</Typography>
   <Typography paragraph sx={{width : 200}}>
     Qolom Ltd
     K55/56, Ikota Complex,
     Victoria Garden City,
     Lagos.
     Tel: + 234 811 719 4807
     E-mail: support@qolom.com
     </Typography>

    
      </Box>
    </Grid>

    <Grid>

  </Grid>

    <Box sx={{display : 'flex', flexDirection : 'column', margin : 'auto', mt : 5}}>
   <Box>
   <Link href="#" paragraph underline="hover" color="white" >
   Terms of use
 </Link>
 <Link href="#" paragraph underline="hover" color="white" sx={{ml : 2}}>
     Privacy policy
 </Link>
     </Box>
     
     <Typography paragraph>Copyright &copy; 2022 Qolom Ltd</Typography>
     <Typography paragraph align='center' sx={{mt:-2}}>All rights reserved</Typography>

   </Box>
    </Grid>


//     <Grid container spacing={2} sx={{ color : 'white', display : 'flex', justifyContent : 'center', pt : 5, pb : 10, margin : 'auto'}}>
//   <Grid item xs={12} md={4} lg={4} sx={{ mb : 4 }}>
//   <img 
//             src={Logo}
//             width='70px'
//             height='50px'
//             alt='...Logo'
//             class="m-auto"
//             />
//             {/* <Typography paragraph>
//             Talent is everywhere, but opportunity is not.
//             </Typography> */}

//             <Typography variant="h6" sx={{width : 250, mb : 1, mt : -1}}>
//             Follow us on our journey to help you skip the hassle of queues 
//             and get what you want at the click of a button connect with us via our socials
//             </Typography>
//             <Box sx={{width : 250, display : 'flex', justifyContent : 'space-between'}}>
//                 <Facebook sx={{width : '40px', height: '40px', background : '#3b82f6', borderRadius : 1}}/>
//                 <Instagram sx={{width : '40px', height: '40px', background : 'linear-gradient(to left ,#8a3ab9, #e95950, #bc2a8d, #fccc63, #fbad50, #cd486b, #4c68d7);', borderRadius : 1}}/>
//                 <Twitter sx={{width : '40px', height: '40px', background : '#60a5fa', borderRadius : 1}}/>
//                 <YouTube sx={{width : '40px', height: '40px', background : 'red', borderRadius : 1}}/>
//             </Box>
            
//   </Grid>

//   <Grid item xs={12} md={3} lg={3} sx={{ mb : 4}}>
//   <Typography variant="h4" color="#93c5fd"> Company </Typography>
//            <Typography variant="h6" className={classes.hoverlink}>Home</Typography>
//            <Typography variant="h6" className={classes.hoverlink}>Contact</Typography>
//            <Typography variant="h6" className={classes.hoverlink}>Sign In</Typography>
//            <Typography variant="h6" className={classes.hoverlink}>Sign Up</Typography>
//            <Typography variant="h6" className={classes.hoverlink}>Sign Up(Business)</Typography>
//            <Typography variant="h6" className={classes.hoverlink}>Forgot Password</Typography>
//  </Grid>
//   <Grid item xs={12} md={3} lg={3} sx={{ }}>
//   <Typography variant="h4" color="#93c5fd">Location</Typography>
//     <Typography variant='h6' sx={{width : 300}}>
//     Qolom Ltd
//     K55/56, Ikota Complex,
//     Victoria Garden City,
//     Lagos.
//     Tel: + 234 811 719 4807
//     E-mail: support@qolom.com
//     </Typography>
//   </Grid>

//   <Box sx={{display : 'flex', flexDirection : 'column', margin : 'auto', mt : 5,}}>
//     <Box>
//     <Link href="#" variant='h6' underline="hover" color="white" >
//   Terms of use
// </Link>

// <Link href="#" variant='h6' underline="hover" color="white" sx={{ml : 2}}>
//     Privacy policy
// </Link>
//     </Box>

//     <Typography variant='h6'>Copyright &copy; 2022 Qolom Ltd</Typography>

//     <Typography variant='h6' align='center'>All rights reserved</Typography>
 
//   </Box>

// </Grid>
  )
}

export default Footer