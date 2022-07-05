// import React, { useState } from 'react'
import {Grid,Button, Card, CardContent, Typography,Box, TextField, CardActions, Toolbar } from '@mui/material'
import Logo from '../assets/images/vector/default-monochrome.svg'
import {ChevronLeft} from '@mui/icons-material'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function AdminToken() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const email = useSelector(store => store.business.email)
    const [token, setToken] = useState('')
    const [errors, setErrors] = useState(false)
    const [errorMessage, setErrorMessage] = useState([])


// console.log(email);

    
   
    const handleSubmit = async(e) => {

      e.preventDefault()

      if (token === '') {
        return
      }

      if (token) {
        const sendToken = await fetch ('https://backend.qolom.com/api/account/business-profile/activation/verify/', {
          method : 'POST',
          headers : {'content-type' : "application/json"},
          body : JSON.stringify({token , email})
        })
       
        if(sendToken.status === 200) {
          // console.log(response)
          navigate('/admin/dashboard')
          dispatch({type : 'login'})
        }

        console.log(sendToken.status)
        const res = await sendToken.json()
        setErrorMessage(res)

        if(sendToken.status === 400) {
          setErrors(true)
        }

      }


     
    }

  return (
    <Grid item xs={12} md={6} lg={6}>
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
     onChange={(e) => {setToken(e.target.value)}}
     error={errorMessage.non_field_errors ? true : false}
     helperText = {errors ? errorMessage.non_field_errors : 'welcome token'}
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
