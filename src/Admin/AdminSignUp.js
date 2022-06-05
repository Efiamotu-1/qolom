import React, { useState } from 'react'
import {Grid,Button, Card, CardContent, Typography,Box, TextField, CardActions, Link } from '@mui/material'
import Logo from '../assets/images/vector/default-monochrome.svg'
import {ChevronLeft} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
// import { makeStyles } from '@material-ui/core'
// import CountrySelect from '../components/Selectors/CountrySelect';
// import StateSelect from '../components/Selectors/StateSelect';
// import AgeSelect from '../components/Selectors/AgeSelect';




// const useStyles = makeStyles({
//     fill : {
//         width : '100%',
//         borderWidth : '100%',
//         borderRadius : 5,
//         background : 'red'
//     }
// })

export default function AdminSignUp() {

  const navigate = useNavigate()

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    
   
    const handleSubmit = (e) => {
      e.preventDefault()

      if (name.trim().length > 50) {
        alert("empty");
      }

      if (address.trim().length > 100) {
        console.log("empty")
      }

      if (!email.trim().includes('@')) {
        console.log("empty")
      }

      if (password.trim().length < 8) {
        console.log("empty")
      }

      if (name.trim() && address.trim() && email.trim().includes('@') && password.trim().length > 7) {
        
        fetch('http://localhost:4000/users', {
          method : 'POST',
          headers : {"content-type" : "application/json"},
          body : JSON.stringify({name, address, email, password})
        }).then(() => navigate('/admin/register/verify'))
      }


     
    }

  return (
    <Grid xs={12} md={6} lg={6}>
{/* <Toolbar /> */}
      
<Card sx={{ maxWidth: 400, marginLeft : 'auto', marginRight : 'auto', my : 5}} elevation={10}>
    <CardContent>
    <Button
            variant="text"
            startIcon={<ChevronLeft />}
            color="primary"
            href="/"
          >
            Back to Home
          </Button><br/>

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
        Register a Business
      </Typography>
    
      <br/>
      <form onSubmit={handleSubmit}>

      {/* <CountrySelect/>
      <br/>

      <StateSelect />
      <br/> */}

   <TextField 
     label='Business Name' 
     variant='outlined'
     placeholder='' 
     color='primary' 
     fullWidth
     required
     onChange={(e) => {setName(e.target.value)}}
   />   
  <br/>

  <br/>
   <TextField 
  //    sx={{width : 400}}
     label='Company Address (Including State & Region)' 
     variant='outlined'
     placeholder='' 
     color='primary' 
     fullWidth
     required
     onChange={(e) => {setAddress(e.target.value)}}

   />   
  <br/>

  <br/>
   <TextField 
  //    sx={{width : 400}}
     label='Email ' 
     variant='outlined'
     placeholder='' 
     color='primary' 
     fullWidth
     required
     onChange={(e) => {setEmail(e.target.value)}}

   />   
  <br/>

  {/* <br/>
    <AgeSelect />  */}

  <br/>
   <TextField 
  //    sx={{width : 400}}
     label='Password' 
     variant='outlined'
     type="password"
     color='primary' 
     fullWidth
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
      <Button type="submit" variant='contained' size="large" sx={{width: '100%', }}>Sign Up</Button>
    
    </CardActions>
    </form>


    <Typography paragraph sx={{ml:2, my : 2}} align="center">
          Have an account? <Link underline="hover" href="/login" >Sign In</Link> 
      </Typography>

      </CardContent>


  </Card>
  </Grid>
  )
}
