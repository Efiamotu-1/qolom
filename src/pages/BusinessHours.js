import { Button, CardActions} from "@mui/material";
import { makeStyles } from '@material-ui/core';
// import { Button} from 'react-bootstrap'
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
    width : 600
  },
  center : {
    marginLeft : 'auto',
    marginRight : 'auto'
  }, 
  spacing : {
    display : 'flex',
    justifyContent : 'space-evenly',
    alignItems : 'center'
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
    // <Container sx={{backgroundColor : '#f4f4f4'}}>
      <Card className={`${classes.cardWidth} ${classes.center}`}>
        <CardContent className={classes.center}>
          <Typography
            sx={{ fontSize: 30 }}
            color="text.secondary"
            align="center"
            gutterBottom
            className={classes.cardBg}
          >
            Select Business Hours
          </Typography>

          {businessDays.map((days) => (
            <>
              <br />
              <Typography variant="h6">{days}</Typography>
              <br />
              <div className={classes.spacing}>
              <BasicTimePicker title="Opens At" />
              <BasicTimePicker title="Closes At" />
              </div>
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
  );
}
