import React,{useState} from 'react'
import {Card, CardContent, TextField, Button, Typography, Grid, Box} from '@mui/material'
import { makeStyles } from '@material-ui/core';

const drawerWidth = 300

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
  // overlay : {
  //   position: 'relative',
  //   top: '10%',
  //   right: '20%',
  //   width: '80%',
  //   zIndex: 100,
  //   // backgroundColor : 'black',
  //   // height: '100vh'

  //   // overflow: 'hidden',
  // },
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
  let key = Math.random().toString(36).replace( /[^-Z^]+ /g, '').substr(0, 10)
  return (
    <>
{create &&  
  <div className={create ? classes.backdrop : null} onClick={()=> {setCreate(false)}}>

        <Grid container
         sx={{
         
        }}
        >
        <Grid item xs={12} md={12} lg={12} > 
        <Card sx={{ width: 400,
           position : {
            sm : 'relative', md: 'relative', lg : 'relative'
           },
           top : {
             sm : '10%'
           },
          left: {
            sm : '20%'
          }, 
         
           zIndex: { 
             sm : 100
           },
         marginLeft : {
           sm :'auto',
         },
         marginRight : {
           sm :'auto',
         }
          // width : 400, marginLeft : 'auto', marginRight : 'auto', marginTop : 10
          }}>
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
       
        </Grid>
       
        </>
  )
}
 

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



</form>
</CardContent>
{/* <CardActions>
  <Button size="small">Learn More</Button>
</CardActions> */}
</Card>
</Grid>
</Grid>