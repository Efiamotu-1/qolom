import {Button, Card, CardContent, TextField, Typography, Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core'


import React from 'react'

const  useStyles = makeStyles({
  button : {
    width : '100%'
  }
})

export default function EditProfile() {
const classes = useStyles();

  return (
    <Grid container>
    <Grid item xs={12} md={8} sx={{margin : 'auto'}}>

    <Card sx={{ margin : 'auto', borderRadius : 5}} elevation={5}>
    
    <CardContent>
    <Typography
            sx={{ fontSize: 30 }}
            color="text.secondary"
            align="center"
            gutterBottom
          >
            Change Password
          </Typography>
          <br/>
    <form noValidate autoComplete='off' >
  
<Typography variant="h6">Current Password</Typography>
    
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
    <br/><br/>

    <Typography variant="h6">New Password</Typography>
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
    <br/><br/>

    <Typography variant="h6">Confirm Password</Typography>
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
    <br/><br/>
    
  <Button 
  className={classes.button}
  type='submit' color='primary' variant='contained'>submit</Button>
  
  
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
