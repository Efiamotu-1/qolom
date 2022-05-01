import { Button, CardActions, Grid} from "@mui/material";
import { makeStyles } from '@material-ui/core';
// import Card
// import Card from "../components/Cards/Card"
// import React, { Component, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import BasicTimePicker from "../components/Selectors/TimePicker";

const useStyles = makeStyles({
  cardWidth : {
    width : 'auto'
  },
  center : {
    marginLeft : 'auto',
    marginRight : 'auto'
  }, 
  spacing : {
    display : 'flex',
    justifyContent : 'space-evenly',
    alignItems : 'center',
    marginTop : '10px'
    
  },
  button : {
    // display : 'block',
    width : '100%'
  }
})

export default function BusinessHours() {
  const classes = useStyles();

  // const [title, setTitle] = useState("");

  let businessDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (


    <Grid container  >
    <Grid item xs={12} md={6} lg={6} sx={{margin : 'auto'}}>
      {/* <Item>xs=8</Item> */}


      <Card >
        <CardContent className={classes.center}>
          <Typography
            sx={{ fontSize: 30 }}
            color="text.secondary"
            align="center"
            gutterBottom
          >
            Select Business Hours
          </Typography>

          {businessDays.map((days) => (
            <>
              <br />
              <Typography variant="h6">{days}</Typography>
              <br />
              <Grid container spacing={2}>
              <Grid 
              item xs={12} md={6} lg={6}
              >
              <BasicTimePicker title="Opens At" />
              </Grid>
              <Grid 
              item xs={12} md={6} lg={6}
              >
              <BasicTimePicker title="Closes At" />
              </Grid>
              </Grid>
              <br />
            </>
          ))}

          <CardActions>

            <Button
              size="Large"
              variant="contained"
              disableElevation
              className={classes.button}
            >
              Submit
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      </Grid>
   
   </Grid>
  );
}
