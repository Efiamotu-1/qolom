import { Container, Grid } from '@mui/material'
import React from 'react'
import HomeCard from '../components/Cards/HomeCard'
import queueOne from '../assests/images/patience-queue.jpg'
import queueTwo from '../assests/images/atm-queue-.jpg'
import queueThree from '../assests/images/covid-queue.jpg'


export default function Home() {
  return (
    <Container  >
      <Grid container spacing={4} sx={{display : 'flex', justifyContent : 'center'}}>
         <Grid item xs={12} md={6} lg={4} 
              sx={{display : 'flex', justifyContent : 'center'}}
         
         >

            <HomeCard 
            title = "Create A Queue"
            date = "April, 24th 2022"
            queue= {queueOne}

            />
         </Grid>

          <Grid item xs={12} md={6} lg={4} 
              sx={{display : 'flex', justifyContent : 'center'}}
          
          >

            <HomeCard 
            title = "Create A Queue"
            date = "April, 24th 2022"
            queue= {queueTwo}

            />
         </Grid>

         <Grid item xs={12} md={6} lg={4} 
          sx={{display : 'flex', justifyContent : 'center'}}
         
         >

            <HomeCard 
            title = "Create A Queue"
            date = "April, 24th 2022"
            queue= {queueThree}

            />
           </Grid>
      </Grid>
     
      

    </Container>
  )
}
