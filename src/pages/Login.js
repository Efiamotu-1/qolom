import React, {useState, useEffect} from 'react'
import Logo from '../assets/images/vector/default-monochrome.svg'
import {useNavigate} from 'react-router-dom'
import {Card, CardContent, Typography, CardActions, Box, Button, Toolbar, TextField, Grid, Link, InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput} from '@mui/material'
import { ChevronLeft, Visibility, VisibilityOff } from '@mui/icons-material'
import { useDispatch } from 'react-redux'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])
  const dispatch = useDispatch()

  const navigate = useNavigate()

  // useEffect(()=> {
  //   // fetch('http://54.159.134.168:9000/api/account/business-profile/sign-in/')
  //   fetch('http://localhost:4000/users')
  //   .then(response => response.json())
  //   .then(data => setUsers(data))
  // }, [])


  
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !showPassword);
  };


  const handleChange = (e) => {
   setPassword(e.target.value)
   setErrors(false)
   
  
  }
  // console.log(users[0])



  const handleSubmit = async (e) => {
    e.preventDefault()

  
    if (email.includes('@') && password.trim().length > 7) {
      
      // navigate('/admin/dashboard')
      const response = await fetch('https://backend.qolom.com/api/account/business-profile/sign-in/', {
        method : 'POST',
        headers : {"content-type" : "application/json"},
        body : JSON.stringify({email, password})
      })
      console.log(response.status)
      if(response.status === 200) {
        navigate('/admin/dashboard')
        dispatch({type : 'login'})
      } 
      const data = await response.json()

      setErrorMessage(data)

      if(response.status === 400) {
        console.log(response.status)
        setErrors(true)
      }
     
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
      //  variant='filled'
       color='primary' 
       fullWidth
       onChange= {(e) => { 
        setEmail(e.target.value) 
        setErrors(false)
      }}
       error={errors}
       helperText={errors ? errorMessage.email : ''}

     />   
    <br/><br/>

    <br/>
    <FormControl sx={{ width: '100%' }} variant="outlined">
    <TextField
      id="outlined-adornment-password"
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={(e) => 
        {
          setPassword(e.target.value)
          setErrors(false)
        }}
      label="Password"
      error={errors}
      helperText= {errors ? errorMessage.email : '' }
      InputProps = {{
        endAdornment : (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  </FormControl>
  <br />
  <br />
  <Link to="/register"> <Typography align="right" color="blue" paragraph>Forgot Password ?</Typography> </Link>
    {/* <br/> */}

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