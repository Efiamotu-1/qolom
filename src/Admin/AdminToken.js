// import React, { useState } from 'react'
import {Grid,Button, Card, CardContent, Typography,Box, TextField, CardActions, Toolbar } from '@mui/material'
import Logo from '../assets/images/vector/default-monochrome.svg'
import {ChevronLeft} from '@mui/icons-material'
import {Link} from 'react-router-dom'


export default function AdminToken() {

   
    // const [token, setToken] = useState('')




    
   
    const handleSubmit = (e) => {
      e.preventDefault()

      

      // if (token === '') {
      //   console.log("empty")
      // }

     
    }

  return (
    <Grid xs={12} md={6} lg={6}>
<Toolbar />
      
<Card sx={{ maxWidth: 400, marginLeft : 'auto', marginRight : 'auto', my : 5}} elevation={10}>
    <CardContent>
    <Link to="/admin/register">
    <Button
            variant="text"
            startIcon={<ChevronLeft />}
            color="primary"
          >
            Back to Sign Up
          </Button><br/>
    </Link>
    

          <Box
        component="img"
        sx={{
          height: 50,
          width: 100,
          marginLeft : 16,
          // marginRight : '10px',
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="...logo"
        src={Logo}
      />

      <Typography variant="h4" color="text.secondary" align="center" gutterBottom sx={{my : 2}}>
        Verify Token
      </Typography>
    
      <br/>
      <form onSubmit={handleSubmit}>

   <TextField 
     label='verification token' 
     variant='outlined'
     placeholder='' 
     color='primary' 
     fullWidth
     required
    //  onChange={(e) => {setFirstname(e.target.value)}}
   />   
  <br/><br/>

  
    <CardActions>
      <Button type="submit" variant='contained' size="large" sx={{width: '100%', }}>verify token</Button>
    
    </CardActions>
    </form>

      </CardContent>


  </Card>
  </Grid>
  )
}
