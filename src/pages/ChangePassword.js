import { Avatar, Button, Card, CardContent, TextField, CardHeader, Container, FormControl, FormLabel, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { red } from '@mui/material/colors';


import React from 'react'
import CountrySelect from '../components/Selectors/CountrySelect';
import StateSelect from '../components/Selectors/StateSelect';
import AgeSelect from '../components/Selectors/AgeSelect';

export default function EditProfile() {
  return (
    <Container>
    <Card sx={{ width : 600, margin : 'auto'}}>
    
    <CardContent>
    <Typography
            sx={{ fontSize: 24 }}
            color="text.secondary"
            align="center"
            gutterBottom
          >
            Change Password
          </Typography>
    <form noValidate autoComplete='off' >
  
  <FormControl >
    
    <br/>

 
     <TextField 
      //  sx={{width : 400}}
       label='Current Password' 
       variant='outlined'
       placeholder='' 
       color='secondary' 
       fullWidth
       required
     />   
    <br/>

    <TextField 
      //  sx={{width : 400}}
       label='New Password' 
       variant='outlined'
       placeholder='' 
       color='secondary' 
       fullWidth
       required
     />   
    <br/>

    <TextField 
      //  sx={{width : 400}}
       label='Confirm Password' 
       variant='outlined'
       placeholder='' 
       color='secondary' 
       fullWidth
       required
     />   
    <br/>
    
  <Button type='submit' color='primary' variant='contained'>submit</Button>
  
  </FormControl>
  
  </form>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  </Container>
  )
}
