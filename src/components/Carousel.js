import React from 'react'
import  { CarouselItem, Carousel }  from 'react-bootstrap'
import atmQueue from '../assests/images/atm-queue-.jpg'
import covidQueue from '../assests/images/covid-queue.jpg'
import patienceQueue from '../assests/images/patience-queue.jpg'


function Carousels() {
  return (
    <Carousel fade variant="dark" controls={false} indicators={false}>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={atmQueue}
        alt="First slide"
      />
      <Carousel.Caption 
      >
        <h3>Queue virtually</h3>
        <p>Be present only when you need to.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}> 
      <img
        className="d-block w-100"
        src={atmQueue}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Create your line</h3>
        <p>Make your own line and manage the queue.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}> 
      <img
        className="d-block w-100"
        src={atmQueue}
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