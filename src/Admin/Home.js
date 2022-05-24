import {  Grid, Button } from "@mui/material";
import React from "react";
import HomeCard from "../components/Cards/HomeCard";
import queueOne from "../../src/assests/images/patience-queue.jpg";
// import queueTwo from "../../src/assests/images/atm-queue-.jpg";
import queueThree from "../../src/assests/images/covid-queue.jpg";

export default function Home() {
  console.log(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10))
  return (
      <Grid
        container
        spacing={3}
        sx={{ py: 5 }}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{ display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center' }}
          // sx={{ display: "flex", justifyContent: "center" }}
        >
          <HomeCard
            title="Create A Queue"
            queue={queueOne}
            clickbutton={
              <Button variant="contained" sx={{ width: "100%", mx: 2, my: 1 }}>
                Create a Line
              </Button>
            }
            content="Create a line and have full control over it. 
            You can display information and provide instructions to 
            your customer on what should be done after they join the line.
            You can also set the period your customers will be able or unable to join the line among other features."
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{ display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center' }}
        >
          <HomeCard
            title="Manage Lines"
            clickbutton={
              <Button variant="contained" sx={{ width: "100%", mx: 2, my: 1 }}>
                Manage a line
              </Button>
            }
            content="Customers may join any of your lines by searching for your business name or using your key. 
            This key is connected to all your lines."
            queue={queueThree}
            key ={Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{ display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center' }}
        >
          <HomeCard
            title="Orders"
            clickbutton={
              <Button variant="contained" sx={{ width: "100%", mx: 2, my: 1 }}>
                Make an Order
              </Button>
            }
            content="Orders can be accessed here after they have been made"
            queue={queueThree}
          />
        </Grid>
      </Grid>
  );
}
