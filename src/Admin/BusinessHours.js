import { Button, Grid, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  cardWidth: {
    width: "auto",
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  spacing: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "10px",
  },
  button: {
    // display : 'block',
    width: "100%",
  },
});

export default function BusinessHours() {
  const classes = useStyles();
  const token = useSelector(store => store.auth.token)

  const [mondayOpenTime, setMondayOpenTime] = useState(null);
  const [mondayCloseTime, setMondayCloseTime] = useState(null)

  const [tuesdayOpenTime, setTuesdayOpenTime] = useState(null);
  const [tuesdayCloseTime, setTuesdayCloseTime] = useState(null)

  const [wednesdayOpenTime, setWednesdayOpenTime] = useState(null);
  const [wednesdayCloseTime, setWednesdayCloseTime] = useState(null)

  const [thursdayOpenTime, setThursdayOpenTime] = useState(null);
  const [thursdayCloseTime, setThursdayCloseTime] = useState(null)

  const [fridayOpenTime, setFridayOpenTime] = useState(null);
  const [fridayCloseTime, setFridayCloseTime] = useState(null)

  const [saturdayOpenTime, setSaturdayOpenTime] = useState(null);
  const [saturdayCloseTime, setSaturdayCloseTime] = useState(null)

  const [sundayOpenTime, setSundayOpenTime] = useState(null);
  const [sundayCloseTime, setSundayCloseTime] = useState(null)


console.log(token)
console.log(localStorage.getItem('token'))
  const handleSubmit = async(e) => {
    e.preventDefault()    

    if((mondayOpenTime && mondayCloseTime) || (tuesdayOpenTime && tuesdayCloseTime) || (wednesdayOpenTime && wednesdayCloseTime) || (thursdayOpenTime && thursdayCloseTime) || (fridayOpenTime && fridayCloseTime) || (saturdayOpenTime & saturdayCloseTime) || (sundayOpenTime && sundayCloseTime) ) {
      const response = await fetch('http://backend.qolom.com/api/business/calendar/', {
      method : 'PATCH',
      headers : { 
        'content-type' : 'application/json', 
        'Authorization' : `Token ${localStorage.getItem('token')}`
      },
        
      body : JSON.stringify({
          
          mo_o : mondayOpenTime ? mondayOpenTime.toLocaleTimeString() : null,
          mo_c : mondayCloseTime ? mondayCloseTime.toLocaleTimeString() : null,
          tu_o : tuesdayOpenTime ? tuesdayOpenTime.toLocaleTimeString() : null,
          tu_c : tuesdayCloseTime ? tuesdayCloseTime.toLocaleTimeString() : null,
          we_o : wednesdayOpenTime ? wednesdayOpenTime.toLocaleTimeString() : null,
          we_c : wednesdayCloseTime ? wednesdayCloseTime.toLocaleTimeString() : null,
          th_o : thursdayOpenTime ? thursdayOpenTime.toLocaleTimeString() : null,
          th_c : thursdayCloseTime ? thursdayCloseTime.toLocaleTimeString() : null,
          fr_o : fridayOpenTime ? fridayOpenTime.toLocaleTimeString() : null,
          fr_c : fridayCloseTime ? fridayCloseTime.toLocaleTimeString() : null,
          sa_o : saturdayOpenTime ? saturdayOpenTime.toLocaleTimeString() : null,
          sa_c : saturdayCloseTime ? saturdayCloseTime.toLocaleTimeString() : null,
          su_o : sundayOpenTime ? sundayOpenTime.toLocaleTimeString() : null,
          su_c : sundayCloseTime ? sundayCloseTime.toLocaleTimeString() : null          
        })
      })

      console.log(await response.status)
      console.log(await response.json())
      
      
    }

    
  
  }

  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={6} sx={{ margin: "auto" }}>
        <Card sx={{ borderRadius: 5 }} elevation={5}>
          <CardContent className={classes.center}>
            <Typography
              sx={{ fontSize: 30 }}
              color="text.secondary"
              align="center"
              gutterBottom
            >
              Business Hours
            </Typography>

           <>
             <form onSubmit={handleSubmit}>

              <Typography variant="h6" align="center">Monday</Typography>
              <br />
              <Grid container spacing={3}>
              <Grid 
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}
              item xs={12} md={12} lg={12}
              >
                <TimePicker
              label="Opens At"
              renderInput={(params) => <TextField {...params} />}
              value={mondayOpenTime}
              onChange={(newValue) => {
                setMondayOpenTime(newValue);
              }}
            />
              </Grid>
              <Grid 
              item xs={12} md={12} lg={12}
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}

              >
              <TimePicker
              label="Closes At"
              renderInput={(params) => <TextField {...params} />}
              value={mondayCloseTime}
              onChange={(newValue) => {
                setMondayCloseTime(newValue);
              }}
            />
              </Grid>
              </Grid>
              <br />

              <Typography variant="h6" align="center">Tuesday</Typography>
              <br />
              <Grid container spacing={3}>
              <Grid 
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}
              item xs={12} md={12} lg={12}
              >
                <TimePicker
              label="Opens At"
              renderInput={(params) => <TextField {...params} />}
              value={tuesdayOpenTime}
              onChange={(newValue) => {
                setTuesdayOpenTime(newValue);
              }}
            />
              </Grid>
              <Grid 
              item xs={12} md={12} lg={12}
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}

              >
              <TimePicker
              label="Closes At"
              renderInput={(params) => <TextField {...params} />}
              value={tuesdayCloseTime}
              onChange={(newValue) => {
                setTuesdayCloseTime(newValue);
              }}
            />
              </Grid>
              </Grid>
              <br />

              <Typography variant="h6" align="center">Wednesday</Typography>
              <br />
              <Grid container spacing={3}>
              <Grid 
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}
              item xs={12} md={12} lg={12}
              >
                <TimePicker
              label="Opens At"
              renderInput={(params) => <TextField {...params} />}
              value={wednesdayOpenTime}
              onChange={(newValue) => {
                setWednesdayOpenTime(newValue);
              }}
            />
              </Grid>
              <Grid 
              item xs={12} md={12} lg={12}
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}

              >
              <TimePicker
              label="Closes At"
              renderInput={(params) => <TextField {...params} />}
              value={wednesdayCloseTime}
             
              onChange={(newValue) => {
                setWednesdayCloseTime(newValue);
              }}
            />
              </Grid>
              </Grid>
              <br />

              <Typography variant="h6" align="center">Thursday</Typography>
              <br />
              <Grid container spacing={3}>
              <Grid 
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}
              item xs={12} md={12} lg={12}
              >
                <TimePicker
              label="Opens At"
              renderInput={(params) => <TextField {...params} />}
              value={thursdayOpenTime}
              onChange={(newValue) => {
                setThursdayOpenTime(newValue);
              }}
            />
              </Grid>
              <Grid 
              item xs={12} md={12} lg={12}
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}

              >
              <TimePicker
              label="Closes At"
              renderInput={(params) => <TextField {...params} />}
              value={thursdayCloseTime}
             
              onChange={(newValue) => {
                setThursdayCloseTime(newValue);
              }}
            />
              </Grid>
              </Grid>
              <br />

              <Typography variant="h6" align="center">Friday</Typography>
              <br />
              <Grid container spacing={3}>
              <Grid 
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}
              item xs={12} md={12} lg={12}
              >
                <TimePicker
              label="Opens At"
              renderInput={(params) => <TextField {...params} />}
              value={fridayOpenTime}
              onChange={(newValue) => {
                setFridayOpenTime(newValue);
              }}
            />
              </Grid>
              <Grid 
              item xs={12} md={12} lg={12}
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}

              >
              <TimePicker
              label="Closes At"
              renderInput={(params) => <TextField {...params} />}
              value={fridayCloseTime}
             
              onChange={(newValue) => {
                setFridayCloseTime(newValue);
              }}
            />
              </Grid>
              </Grid>
              <br />

              <Typography variant="h6" align="center">Saturday</Typography>
              <br />
              <Grid container spacing={3}>
              <Grid 
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}
              item xs={12} md={12} lg={12}
              >
                <TimePicker
              label="Opens At"
              renderInput={(params) => <TextField {...params} />}
              value={saturdayOpenTime}
              onChange={(newValue) => {
                setSaturdayOpenTime(newValue);
              }}
            />
              </Grid>
              <Grid 
              item xs={12} md={12} lg={12}
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}

              >
              <TimePicker
              label="Closes At"
              renderInput={(params) => <TextField {...params} />}
              value={saturdayCloseTime}
             
              onChange={(newValue) => {
                setSaturdayCloseTime(newValue);
              }}
            />
              </Grid>
              </Grid>
              <br />

              <Typography variant="h6" align="center">Sunday</Typography>
              <br />
              <Grid container spacing={3}>
              <Grid 
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}
              item xs={12} md={12} lg={12}
              >
                <TimePicker
              label="Opens At"
              renderInput={(params) => <TextField {...params} />}
              value={sundayOpenTime}
              onChange={(newValue) => {
                setSundayOpenTime(newValue);
              }}
            />
              </Grid>
              <Grid 
              item xs={12} md={12} lg={12}
              sx={{display : 'flex', justifyContent : 'center', marginLeft : 1, marginRight : 1}}

              >
              <TimePicker
              label="Closes At"
              renderInput={(params) => <TextField {...params} />}
              value={sundayCloseTime}
             
              onChange={(newValue) => {
                setSundayCloseTime(newValue);
              }}
            />
              </Grid>
              </Grid>
              <br />

           
            {/* <TimePicker
              label="Monday"
              renderInput={(params) => <TextField {...params} />}
              value={modayTime}
              onChange={(newValue) => {
                setMondayTime(newValue);
                console.log(newValue);
              }}
            /> */}
            {/* <CardActions> */}
              <Button
                type="submit"
                size="Large"
                variant="contained"
                disableElevation
                className={classes.button}
                // onClick={handleSubmit}
              >
                Submit
              </Button>
            {/* </CardActions> */}
          </form>
          </>

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}


