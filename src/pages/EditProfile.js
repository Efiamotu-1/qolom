import { Avatar, Button, Card, CardContent, TextField, CardHeader, Grid, Typography } from '@mui/material'

import { makeStyles } from '@material-ui/core';
import { red } from '@mui/material/colors';
import React from 'react'
import CountrySelect from '../components/Selectors/CountrySelect';
import StateSelect from '../components/Selectors/StateSelect';
import AgeSelect from '../components/Selectors/AgeSelect';

const useStyles = makeStyles({
  center : {
    display : 'flex', 
    flexDirection : 'column',
    justifyContent : 'center'
  
  }, 
  button : {
    width : '100%'
  }
})


export default function EditProfile() {

const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={8} lg={8} sx={{margin : 'auto'}}> 

    <Card>
    <Typography
            sx={{ fontSize: 30 }}
            color="text.secondary"
            align="center"
            gutterBottom
          >
            Edit Business Profile
          </Typography>
    <CardHeader 
    className={classes.center}
    // sx={{margin : 'center'}}
        avatar={
          
          <Avatar 
    className={classes.center}
          
          sx={{ bgcolor: red[500], width : 70, height : 70}} aria-label="recipe">
            M
          </Avatar>
        }
       
      />
    <CardContent>
    <form noValidate autoComplete='off' >
<Typography variant="h6">Country</Typography>
    <br/>
    <CountrySelect />
    <br/>

<Typography variant="h6">State/Origin</Typography>
    <br/>
    <StateSelect /> 
    <br/>

<Typography variant="h6">Business Name</Typography>
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
    <br/><br/>
    <Typography variant="h6">Address (including state/region)</Typography>

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
    <br/><br/>
    <Typography variant="h6">Minimun required age to use business</Typography>

    <br/>
    <AgeSelect /> 
    <br/>
    <Typography variant="h6">Password</Typography>

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
    <br/><br/>
    
  <Button type='submit' color='primary' variant='contained'>submit</Button>
  
  
  </form>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  </Grid>
  </Grid>
  )
}
