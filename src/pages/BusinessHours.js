import { Button, CardActions, Grid} from "@mui/material";
import { makeStyles } from '@material-ui/core';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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


      <Card sx={{borderRadius : 5}}>
        <CardContent className={classes.center}>
          <Typography
            sx={{ fontSize: 30 }}
            color="text.secondary"
            align="center"
            gutterBottom
          >
          Business Hours
          </Typography>

          {businessDays.map((days) => (
            <>
              <br />
              <Typography variant="h6">{days}</Typography>
              <br />
              <Grid container spacing={2}>
              <Grid 
              sx={{display : 'flex', justifyContent : 'center'}}
              item xs={12} md={6} lg={6}
              >
                
              <BasicTimePicker title="Opens At" />
              </Grid>
              <Grid 
              item xs={12} md={6} lg={6}
              sx={{display : 'flex', justifyContent : 'center'}}

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
