import React, {useState, useEffect} from 'react'
import Logo from '../assets/images/vector/default-monochrome.svg'
import {useNavigate} from 'react-router-dom'
import {Card, CardContent, Typography, CardActions, Box, Button, Toolbar, TextField, Grid, Link, InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput} from '@mui/material'
import { ChevronLeft, Visibility, VisibilityOff } from '@mui/icons-material'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])
  const [showPassword, setShowPassword] = useState(false)

  const navigate= useNavigate()

  useEffect(()=> {
    // fetch('http://54.159.134.168:9000/api/account/business-profile/sign-in/')
    fetch('http://localhost:4000/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])


  
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !showPassword);
  };


  const handleChange = (e) => {
   setPassword(e.target.value)

  
  }
  // console.log(users[0])



  const handleSubmit = (e) => {
    e.preventDefault()

  
    if (email.includes('@') && email === users.email && password.trim().length > 7) {
      
      navigate('/admin/dashboard')
      // fetch('http://localhost:4000/users', {
      //   method : 'POST',
      //   headers : {"content-type" : "application/json"},
      //   body : JSON.stringify({email, password})
      // }).then(
      //   navigate('/admin/dashboard'))

      // return

     
    }


    if (email === '' ) {
      console.log('invalid email')

    }

    if (password === '' || password.trim().length < 7) {
      console.log('invalid password')

    }



  }

  return (
      // <div style={{backgroundColor : 'rgba(0, 0, 0, 0.75'}}>
      <Grid item xs={12} md={6} lg={6}>
      <Toolbar />
      {/* <Toolbar /> */}
<Card sx={{ width: 400, margin : 'auto'}} elevation={10}>
      <CardContent >

      <Button
              variant="text"
              startIcon={<ChevronLeft />}
              color="primary"
              href="/"
            >
              Back to Home
      </Button>
      <br/><br/>

            <Box
        component="img"
        sx={{
          height: 50,
          width: 100,
          marginLeft : 16,
          marginTop : -2,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="...logo"
        src={Logo}
      /><br/>
  
<br/>
      <form onSubmit={handleSubmit}>

      <TextField 
       label='Email Address' 
       variant='outlined'
       color='primary' 
       fullWidth
       onChange= {(e) => { setEmail(e.target.value)}}

     />   
    <br/><br/>

    <br/>
    <FormControl sx={{ width: '100%' }} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
    <OutlinedInput
      id="outlined-adornment-password"
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={handleChange}
      label="Password"
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  </FormControl>
    <br/><br/>

    <CardActions>
      <Button type="submit" variant='contained' sx={{width: '100%', }}>Sign In</Button> 
    </CardActions>

      </form>
    </CardContent>

      <Typography paragraph sx={{ml:2}} align="center">
          Don't have an account? <Link underline="hover" href="/register" >Sign Up</Link> 
      </Typography>

       <Typography  align="center">OR</Typography>

      <Typography align="center">
      <Link href="/admin/register" underline="hover" >Register as a business</Link>

      </Typography>
        <br/>
    </Card>
    </Grid>
    // </div>
  )
}

export default Login