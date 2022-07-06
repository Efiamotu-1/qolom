
import React, {useState} from 'react'
import Logo from '../assets/images/vector/default-monochrome.svg'
import {useNavigate} from 'react-router-dom'
import {Card, CardContent, CardActions, Box, Button, Toolbar, TextField, Grid} from '@mui/material'
import { ChevronLeft} from '@mui/icons-material'

const ForgotPassword = () => {

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])

  const navigate = useNavigate()

  // useEffect(()=> {
  //   // fetch('http://54.159.134.168:9000/api/account/business-profile/sign-in/')
  //   fetch('http://localhost:4000/users')
  //   .then(response => response.json())
  //   .then(data => setUsers(data))
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

  
    if (email.includes('@')) {
      
      // navigate('/admin/dashboard')
      const response = await fetch('http://backend.qolom.com/api/account/reset-password/', {
        method : 'POST',
        headers : {"content-type" : "application/json"},
        body : JSON.stringify({email})
      })
      let data = await response.json()
      console.log(response.status)
      if(response.ok) {
        navigate('/resetpassword')
        // dispatch({type : 'login', payload : {token : data.token}})
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
              href="/login"
            >
              Back to Login
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



export default ForgotPassword

