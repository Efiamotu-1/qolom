import React, { useState } from 'react'
import {Grid,Button, Card, CardContent, Typography,Box, TextField, CardActions, Link, InputAdornment, IconButton, FormControl } from '@mui/material'
import Logo from '../assets/images/vector/default-monochrome.svg'
import {ChevronLeft, Visibility, VisibilityOff,}  from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { makeStyles } from '@material-ui/core'
// import CountrySelect from '../components/Selectors/CountrySelect';
// import StateSelect from '../components/Selectors/StateSelect';
// import AgeSelect from '../components/Selectors/AgeSelect';



export default function AdminSignUp() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(false)
    const [errorMessage, setErrorMessage] = useState([])
    const [showPassword, setShowPassword] = useState(false)


    // useEffec


    const handleClickShowPassword = ()  => {
      setShowPassword(() => !showPassword)
    }
   
    const handleSubmit = async (e) => {
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
        
          let authenticate = await fetch('https://backend.qolom.com/api/account/business-profile/', {
          method : 'POST',
          headers : {"content-type" : "application/json"},
          body : JSON.stringify({name, address, email, password})});
          console.log("authenticate",authenticate.status)
          // console.log("authenticate",authenticate.json())
          const response = await authenticate.json()
          setErrorMessage(response)
          console.log(response)
          if (authenticate.status === 400) {
            setErrors(true)
          }
          if (authenticate.ok) {
            navigate('/admin/register/verify')
            dispatch({type : 'signIn', payload : {name, address, email, password}})
          }
          if (authenticate.status === 201){
            let verify = await fetch('https://backend.qolom.com/api/account/activation/', {
                method : 'POST',
                headers : {'content-type' : "application/json"},
                body : JSON.stringify({email})
              });
            console.log("verify :", verify.status)  
            // setEmail(email)
            
          //  let response = await verify.json()
          //  if(verify.status === 201) {
          //  console.log(response.status)
          //  }
         }

        
      }


     
    }

    // useEffect(() => {
      // let abortController = new AbortController();
      //  // your async action is here
      //   return () => {
      //     abortController.abort();
      //   }
      // }, []);


  return (
    <Grid item xs={12} md={6} lg={6}>
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
     error={errorMessage.name ? true : false}
     helperText= {errors ? errorMessage.name : '' }

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
     error={errorMessage.email ? true : false}
     helperText= {errors ? errorMessage.email : ''}


   />   
  <br/>

  {/* <br/>
    <AgeSelect />  */}

  <br/>
   {/* <TextField 
  //    sx={{width : 400}}
     label='Password' 
     variant='outlined'
     type="password"
     color='primary' 
     fullWidth
     required
     onChange={(e) => {setPassword(e.target.value)}}
     error={errorMessage.password ? true : false}
     helperText= {errors ? errorMessage.password : '' }
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

   />   */}

       <FormControl sx={{ width: '100%' }} variant="outlined">
    {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
    <TextField
      id="outlined-adornment-password"
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={(e) => {setPassword(e.target.value)}}
      label="Password"
      error={errorMessage.password ? true : false}
      helperText= {errors ? errorMessage.password : '' }
      InputProps = {{
        endAdornment : (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  </FormControl> 

  {/* <TextField
  label='Some label'
  variant="outlined"
  type={showPassword ? "text" : "password"} // <-- This is where the magic happens
  // onChange={someChangeHandler}
  InputProps={{ // <-- This is where the toggle button is added.
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          // onClick={handleClickShowPassword}
          // onMouseDown={handleMouseDownPassword}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    )
  }}
/> */}
  {/* <Typography variant="body2" color="red">{errorMessage.password}</Typography> */}
   
  {/* <br/> */}

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

 //  if (authenticate.status === 400) {
        //   let respond = await authenticate.json();
        //   console.log(respond)
        //  }
          // setErrors(res);
          // .then((res) => {
          //   console.log(res.status)
          //   console.log(res.json())
          //   if (res.status === 201) {
          //     let response = fetch('http://qolom-container-load-balancer-556861353.us-east-1.elb.amazonaws.com:9000/api/account/activation/', {
          //       method : 'POST',
          //       headers : {'content-type' : "application/json"},
          //       body : JSON.stringify({email})
          //     });
          //     let data = response.
             
          //   }

          //   if(res.status === 400) {
              

          //   }
          

          // .then(() =>