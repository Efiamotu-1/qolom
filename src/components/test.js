import React, {useState} from 'react'
import { InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

function Test() {

  // const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !showPassword);
  };


  const handleChange = (e) => {
   setPassword(e.target.value)

  
  }

  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
    <OutlinedInput
      id="outlined-adornment-password"
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={handleChange}
      label="Password"
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  </FormControl>
  )
}

export default Test

{create &&  
  <div className={create ? classes.backdrop : null} onClick={()=> {setCreate(false)}}>

        <Grid container
         sx={{
         
        }}
        >
        <Grid item xs={12} md={12} lg={12} > 
        <Card sx={{ 
          width : 400, marginLeft : 'auto', marginRight : 'auto', marginTop : 15
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