import React from 'react'
import {Card, CardContent, Typography, CardActions, Button, Toolbar, TextField, Grid} from '@mui/material'
import { ChevronLeft } from '@mui/icons-material'

function Login() {
  return (
      <Grid >
      <Toolbar />
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
            </Button>

        <Typography sx={{ fontSize: 30}} color="text.secondary" align = "center" gutterBottom>
          LOG IN  
        </Typography>

        <br/>
     <TextField 
    //    sx={{width : 400}}
       label='Email Address' 
       variant='outlined'
       placeholder='' 
       color='primary' 
       fullWidth
       required
     />   
    <br/><br/>

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
    <br/><br/>

      </CardContent>
      <CardActions>
        <Button href="/admin" variant='contained' size="large" sx={{width: '100%', marginLeft : 'auto', marginRight : 'auto'}}>Sign in Now</Button>
      
      </CardActions>
      {/* <br/> */}

      <Typography paragraph sx={{ml:2}}>
          Don't have an account? <Button variant='text' href="/register" sx={{textTransform : 'lowercase', ml : -1}}>Sign Up</Button> 
      </Typography>
        {/* <br/> */}
    </Card>
    </Grid>
  )
}

export default Login