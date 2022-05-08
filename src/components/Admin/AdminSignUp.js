import React, { useState } from 'react'
import {Grid, Toolbar, Button, Card, CardContent, Typography, TextField, CardActions, Box, } from '@mui/material'
import {ChevronLeft} from '@mui/icons-material'
import { makeStyles } from '@material-ui/core'
import CountrySelect from '../Selectors/CountrySelect';
import StateSelect from '../Selectors/StateSelect';
import AgeSelect from '../Selectors/AgeSelect';




const useStyles = makeStyles({
    fill : {
        width : '100%',
        borderWidth : '100%',
        borderRadius : 5,
        background : 'red'
    }
})

export default function AdminSignUp() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const classes = useStyles()


    
   
    const handleSubmit = (e) => {
      e.preventDefault()

     
    }

  return (
    <Grid >
<Toolbar />
      
<Card sx={{ maxWidth: 600, margin : 'auto'}} elevation={10}>
    <CardContent>
    <Button
            variant="text"
            startIcon={<ChevronLeft />}
            color="primary"
            href="/"
          >
            Back to Home
          </Button><br/>

      <Typography variant="h4" color="text.secondary" align="center" gutterBottom>
        Register a Business
      </Typography>
    
      <br/>
      <form onSubmit={handleSubmit}>

      <CountrySelect/>
      <br/>

      <StateSelect />
      <br/>

   <TextField 
     label='Business Name' 
     variant='outlined'
     placeholder='' 
     color='primary' 
     fullWidth
     required
     onChange={(e) => {setFirstname(e.target.value)}}
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
     onChange={(e) => {setLastname(e.target.value)}}

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

  <br/>
    <AgeSelect /> 

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
      <Button type="submit" variant='contained' size="large" sx={{width: '100%', }}>Sign Up Now</Button>
    
    </CardActions>
    </form>


    <Box sx={{ml:0}}>
          Have an account? <Button variant='text' href="/register" sx={{textTransform : 'lowercase', ml : -1}}>Sign In</Button> 
      </Box>

      </CardContent>


  </Card>
  </Grid>
  )
}
