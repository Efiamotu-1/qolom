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
    <CardHeader 
        avatar={
          
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            M
          </Avatar>
        }
       
      />
    <CardContent>
    <form noValidate autoComplete='off' >
  
  <FormControl >
    <FormLabel>Country</FormLabel>
    <br/>
    <CountrySelect />
    <br/>

    <FormLabel>State/Region</FormLabel>
    <br/>
    <StateSelect /> 
    <br/>

    <FormLabel>Business Name</FormLabel>
    <br/>
     <TextField 
      //  sx={{width : 400}}
       label='Write Your Business Name' 
       variant='outlined'
       placeholder='' 
       color='secondary' 
       fullWidth
       required
     />   
    <br/>

    <FormLabel>Address (including state/region)</FormLabel>
    <br/>
     <TextField 
      //  sx={{width : 400}}
       label='Company Address' 
       variant='outlined'
       placeholder='' 
       color='secondary' 
       fullWidth
       required
     />   
    <br/>

    <FormLabel>Minimun required age to use business</FormLabel>
    <br/>
    <AgeSelect /> 
    <br/>

    <FormLabel>Password</FormLabel>
    <br/>
     <TextField 
      //  sx={{width : 400}}
       label='Password' 
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
