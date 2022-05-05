import React from 'react'
import {Grid, Toolbar, Button, Card, CardContent, Typography, TextField, CardActions } from '@mui/material'
import {ChevronLeft} from '@mui/icons-material'

export default function Register() {
  return (
    <Grid >
<Toolbar />
      
<Card sx={{ maxWidth: 550, margin : 'auto'}} elevation={10}>
    <CardContent>
    <Button
            variant="text"
            startIcon={<ChevronLeft />}
            color="primary"
            href="/"
          >
            Back to Home
          </Button><br/>

      <Typography variant="h4" color="text.secondary" gutterBottom>
        Create a New Account 
      </Typography>

      <Typography paragraph  gutterBottom>
      Use your email to create a new account 
      </Typography>
      

      <br/>
   <TextField 
  //    sx={{width : 400}}
     label='First Name' 
     variant='outlined'
     placeholder='' 
     color='primary' 
     fullWidth
     required
   />   
  <br/>

  <br/>
   <TextField 
  //    sx={{width : 400}}
     label='Last Name' 
     variant='outlined'
     placeholder='' 
     color='primary' 
     fullWidth
     required
   />   
  <br/>

  <br/>
   <TextField 
  //    sx={{width : 400}}
     label='Email ' 
     variant='outlined'
     placeholder='' 
     color='primary' 
     fullWidth
     required
   />   
  <br/>

  <br/>
   <TextField 
  //    sx={{width : 400}}
     label='Password' 
     variant='outlined'
     placeholder='' 
     color='primary' 
     fullWidth
     required
   />   
  <br/>
  </CardContent>

    <CardActions>
      <Button variant='contained' size="large" sx={{width: '100%', }}>Sign Up Now</Button>
    
    </CardActions>

    <Typography paragraph sx={{ml:2}}>
          Have an account? <Button variant='text' href="/register" sx={{textTransform : 'lowercase', ml : -1}}>Sign In</Button> 
      </Typography>

    {/* <br/> */}
      {/* <br/> */}
  </Card>
  </Grid>
  )
}
