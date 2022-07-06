
import React, {useState} from 'react'
import Logo from '../assets/images/vector/default-monochrome.svg'
import {useNavigate} from 'react-router-dom'
import {Card, CardContent, CardActions, Box, Button, Toolbar, TextField, Grid, InputAdornment, IconButton, FormControl} from '@mui/material'
import { ChevronLeft, Visibility, VisibilityOff } from '@mui/icons-material'

const ResetPassword = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])
  const [token, setToken] = useState('')

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


  const handleSubmit = async (e) => {
    e.preventDefault()

  
    if (email.includes('@') && password.trim().length > 7 && token) {
      
      // navigate('/admin/dashboard')
      const response = await fetch('http://backend.qolom.com/api/account/reset-password/verify/', {
        method : 'POST',
        headers : {"content-type" : "application/json"},
        body : JSON.stringify({email, password, token})
      })
      let data = await response.json()
      console.log(data)
      console.log(response.status)
      if(response.ok) {
        navigate('/admin/dashboard')
        localStorage.setItem('token', data.token)
        console.log(data.token)

      } 
      // const data = await response.json()

      // console.log(data.token)
      setErrorMessage(data)

      if(response.status === 400) {
        console.log(response.status)
        setErrors(true)
      }
     
    }


    if (email === '' ) {
      console.log('invalid email')
      setErrors(true)

    }

    if (password === '' || password.trim().length < 7) {
      console.log('invalid password')
      setErrors(true)


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
      label="New Password"
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
    <br/>

    <TextField 
       label='Token' 
      //  variant='filled'
       color='primary' 
       fullWidth
       onChange= {(e) => { 
        setToken(e.target.value) 
        setErrors(false)
      }}
       error={errors}
       helperText={errors ? errorMessage.email : ''}

     />   
    <br/>
    <br/>

    <CardActions>
      <Button type="submit" variant='contained' sx={{width: '100%', }}>RESET PASSWORD</Button> 
    </CardActions>

      </form>
    </CardContent>

      
    </Card>
    </Grid>
    // </div>
    )
}



export default ResetPassword

