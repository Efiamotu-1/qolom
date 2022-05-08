import React, {useState} from 'react'
import {Card, CardContent, Typography, CardActions, Button, Toolbar, TextField, Grid, Link} from '@mui/material'
import { ChevronLeft } from '@mui/icons-material'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)




  const handleSubmit = (e) => {
    e.preventDefault()

    setEmailError(false)
    setPasswordError(false)
    if (email == '' && password == '') {
      setEmailError(true)
      setPasswordError(true)

      alert('please fill all fields')
      return
    }
    if (email === '') {
      setEmailError(true)
      alert('insert an email')
    }

    if (password === '') {
      setPasswordError(true)
      alert('insert a password')
    }

  }

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
      <form onSubmit={handleSubmit}>

      <TextField 
       label='Email Address' 
       variant='outlined'
       color='primary' 
       fullWidth
       required
       onChange= {(e) => { setEmail(e.target.value)}}

     />   
    <br/><br/>

    <br/>
     <TextField 
    //    sx={{width : 400}}
       label='Password' 
       variant='outlined'
       type="password"
       color='primary' 
       fullWidth
       required
       onChange= {(e) => { setPassword(e.target.value)}}
     />   
    <br/><br/>

    <CardActions>
      <Button type="submit" variant='contained' sx={{width: '100%', }}>Sign In</Button> 
    </CardActions>

      </form>
    </CardContent>

      <Typography paragraph sx={{ml:2}}>
          Don't have an account? <Button variant='text' href="/register" sx={{textTransform : 'lowercase', ml : -1}}>Sign Up</Button> 
      </Typography>

       <Typography sx={{ml:12}}>OR</Typography>

      <Link href="/admin/register" underline="hover" sx={{ml:2}}>Register as a business</Link>
        {/* <br/> */}
    </Card>
    </Grid>
  )
}

export default Login