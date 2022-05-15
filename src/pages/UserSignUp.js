import React, { useState } from 'react'
import {Grid, Toolbar, Button, Card, CardContent,Link, Typography, TextField, CardActions, Box, } from '@mui/material'
import {ChevronLeft} from '@mui/icons-material'
import DatePicker from '../components/Selectors/DatePicker';


export default function Register() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [firstnameError, setFirstnameError] = useState(false)
    const [lastnameError, setLastnameError] = useState(false) 
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false) 

    const handleSubmit = (e) => {
      e.preventDefault()

      if (firstname === '') {
        setFirstnameError(true)
      }

      if (lastname === '') {
        setLastnameError(true)
      }

      if (email === '') {
        setEmailError(true)
      }

      if (password === '') {
        setPasswordError(true)
      }

      if (firstname && lastname && email && password) {
        fetch('http://localhost:4000/users', {
          method: 'POST',
          headers: {"content-type" : "application/json"},
          body: JSON.stringify({firstname,lastname,email,password})
        })
      }
    }

  return (
    <Grid >
{/* <Toolbar /> */}
      
<Card sx={{ maxWidth: 550, marginLeft : 'auto', marginRight : 'auto', my :10}} elevation={10}>
    <CardContent>
    <Button
            variant="text"
            startIcon={<ChevronLeft />}
            color="primary"
            href="/"
          >
            Back to Home
          </Button><br/>

      <Typography variant="h4" align="center" color="text.secondary" gutterBottom>
        Create a New Account 
      </Typography>

      <Typography paragraph align="center" gutterBottom>
      Use your email to create a new account 
      </Typography>
      

      <br/>
      <form onSubmit={handleSubmit}>
   <TextField 
  //    sx={{width : 400}}
     label='First Name' 
     variant='outlined'
     placeholder='' 
     color='primary' 
     fullWidth
     required
     error={firstnameError}
     onChange={(e) => {setFirstname(e.target.value)}}
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
     error={lastnameError}
     required
     onChange={(e) => {setLastname(e.target.value)}}

   />   
  <br/>

    <br />
  <DatePicker />
  {/* <br /> */}

  <br/>
   <TextField 
  //    sx={{width : 400}}
     label='Email ' 
     variant='outlined'
     placeholder='' 
     color='primary' 
     fullWidth
     error={emailError}
     required
     onChange={(e) => {setEmail(e.target.value)}}

   />   
  <br/>

  <br/>
   <TextField 
  //    sx={{width : 400}}
     label='Password' 
     variant='outlined'
     type="password"
     color='primary' 
     fullWidth
     error={passwordError}
     required
     onChange={(e) => {setPassword(e.target.value)}}

   />   
   
  <br/>

  {/* <FormControlLabel control={<Checkbox  />} label="Terms and condition"/> */}
  {/* <Box sx={{ml : -1}}>
  <Checkbox />
  I have read the <Link>Terms and Conditions</Link>
  </Box> */}
<br/>
    <CardActions>
      <Button type="submit" variant='contained' size="large" sx={{width: '100%', }}>Sign Up Now</Button>
    
    </CardActions>
    </form>


    <Typography paragraph sx={{ml:2}} align="center">
          Don't have an account? <Link underline="hover" href="/register" >Sign Up</Link> 
      </Typography>

      </CardContent>


  </Card>
  </Grid>
  )
}
