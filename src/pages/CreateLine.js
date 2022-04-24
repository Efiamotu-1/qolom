import React from 'react'
import {Container, Card, CardContent, TextField, Button, Typography} from '@mui/material'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  cardWidth : {
    width : 600
  },
  center : {
    marginLeft : 'auto',
    marginRight : 'auto'
  },
  inputWidth : { 
    width : '100%'
  },
  spacing : {
    marginTop : 50
  },
  button : {
    // display : 'block',
    width : '100%'
  }
})

export default function CreateLine() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Card xs={12} md={6} lg={4} className={`${classes.cardWidth} ${classes.center}`}>
      <CardContent>
        <br/>
      <Typography
            sx={{ fontSize: 30, textAlign :  'center' }}
            color="text.secondary"
            align="center"
            gutterBottom
          >
            Create Line
          </Typography>
          <br/>
      <form noValidate autoComplete='off' >
  
{/* <FormControl > */}
<Typography variant="h6">Name</Typography>
  <br/>
  <TextField
  className={classes.inputWidth}
  label='Required' 
  variant='outlined'
  placeholder='Name of line e.g (Coffee Line)' 
  color='secondary' 
  required
  // className={classes.field}
  // onChange={(e)=> setTitle(e.target.value)}
  // error={titleError}
  // onChange={}
  />

<br/><br/>

<Typography variant="h6">Information</Typography>
<br/>
  <TextField
  className={classes.inputWidth}
  label='Required' 
  variant='outlined'
  placeholder='Information e.g (Please wait in line to get coffee)' 
  color='secondary' 
  required
  // className={classes.field}
  // onChange={(e)=> setTitle(e.target.value)}
  // error={titleError}
  // onChange={}
  />
  <br/><br/>
<Typography variant="h6">Instruction</Typography>
<br/>
  <TextField
  className={classes.inputWidth}
  label='Required' 
  variant='outlined'
  placeholder='Instruction e.g (Please be available before you are third' 
  color='secondary' 
  required
  // className={classes.field}
  // onChange={(e)=> setTitle(e.target.value)}
  // error={titleError}
  // onChange={}
  />

<br/><br/>
<Button className={classes.button} type='submit' color='primary' variant='contained'>submit</Button>

{/* </FormControl> */}

</form>  
      </CardContent>
      
    </Card>
        </Container>
    </div>
  )
}
 