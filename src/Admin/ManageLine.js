import React,{useState} from 'react'
import {Card, CardContent, TextField, Button, Typography, Grid, Box} from '@mui/material'
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
  },
  overlay : {
    position: 'fixed',
    top: '20vh',
    left: '20%',
    width: '80%',
    zIndex: 100,
    // backgroundColor : 'black',
    // height: '100vh'

    // overflow: 'hidden',
  },
  backdrop : {
    background : 'rgb(0, 0, 0, 0.75)', 
    height : '100vh',
    // zIndex: 100,
    position : 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    // height: '100vh',
    zIndex: 10,
  }
})

export default function CreateLine() {
  const classes = useStyles();
  const [create, setCreate] = useState(false)
  let key = Math.random().toString(36).replace(/[^a-z^]+/g, '').substr(0, 10)
  return (
    <>
{create &&  
  <div className={create ? classes.backdrop : null} onClick={()=> {setCreate(false)}}>

        <Grid className={classes.overlay} sx={{marginLeft : -5}}>
        <Grid item xs={12} md={6} lg={6} > 
        <Card sx={{ width : 400, marginLeft : 'auto', marginRight : 'auto'}}>
      <CardContent>
      <Typography
            sx={{ fontSize: 22, textAlign :  'center' }}
            color="text.secondary"
            align="center"
            gutterBottom
          >
            Create Line
          </Typography>
      <form noValidate autoComplete='off' >
  
{/* <FormControl > */}
<Typography variant="h6">Name</Typography>
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
        </Grid>
        </Grid>
        </div>
        }

      <Grid container >
        <Grid item xs={12} md={12} lg={12} >
          <Box >
      <Button variant="contained" 
      sx={{marginLeft : 'auto', marginRight : 'auto'}}
      onClick={()=> {setCreate((prev)=> !create)}}
     >
       Create Line
       </Button>
       <br/>
       </Box>
       </Grid>
     <Grid item xs={12} md={12} lg={12} > 
     
    

        <Card sx={{borderRadius : 5, width : 600, margin : 'auto'}} elevation={5}>
      <CardContent>
     
        <Typography variant="h5" color="blue" align="center">Manage Lines</Typography>
        <br/>
      <Typography
            sx={{ fontSize: 20, textAlign :  'center' }}
            color="text.secondary"
            align="center"
            gutterBottom
          >
           Customers may join any of your lines by searching for your business name or using your key.
            This key is connected to all your lines.
      </Typography>
      <Typography align="center" color= "blue">
        Your key is <span style={{fontWeight : 'bold'}}>{key}</span>
      </Typography>
          <br/>
        
      </CardContent>
      
    </Card>
        </Grid>
        </Grid>

       
        </>
  )
}
 