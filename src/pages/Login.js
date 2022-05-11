import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Card, CardContent, Typography, CardActions, Button, Toolbar, TextField, Grid, Link, InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput} from '@mui/material'
import { ChevronLeft, Visibility, VisibilityOff } from '@mui/icons-material'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate= useNavigate()
  
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !showPassword);
  };


  const handleChange = (e) => {
   setPassword(e.target.value)

  
  }



  const handleSubmit = (e) => {
    e.preventDefault()

  
    if (email && password) {
      navigate("register")

      // return
    }
    if (email === '') {
      console.log("error")

    }

    if (password === '') {
      console.log("error")

    }



  }

  return (
      <Grid >
      <Toolbar />
      {/* <Toolbar /> */}
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
  )
}

export default Login