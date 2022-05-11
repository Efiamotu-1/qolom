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