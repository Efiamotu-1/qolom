import { makeStyles } from '@material-ui/core'
import React from 'react'
import  { Carousel }  from 'react-bootstrap'
// import atmQueue from '../assests/images/atm-queue-.jpg'
import covidQueue from '../assests/images/covid-queue.jpg'
// import patienceQueue from '../assests/images/patience-queue.jpg'


let useStyles = makeStyles({
  layoutBackground: {
    background: "linear-gradient(to bottom ,#0891b2, #0369a1, #1E3A8A, #1e3a8a, #03001c);",
  },
  hover: {
    "&:hover": {
      fontSize: 18,
      color: "white",
      // background : 'lightblue'
    },
  },
  opacity : {
    background: 'black'
  },
});

function Carousels() {

  const classes = useStyles()

  return (
    <Carousel fade variant="dark" controls={false} indicators={false}>
    <Carousel.Item interval={1500}>
      <div className={classes.opacity}>
<img
        className="d-block w-100"
        src={covidQueue}
        alt="First slide"
      />
      </div>
      
      <Carousel.Caption 
      >
        <h3>Queue virtually</h3>
        <p>Be present only when you need to.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500}> 
      <img
        className="d-block w-100"
        src={covidQueue}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Create your line</h3>
        <p>Make your own line and manage the queue.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500}> 
      <img
        className="d-block w-100"
        src={covidQueue}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Make Orders</h3>
        <p>Skip queues entirely. Just order and pick up.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Carousels