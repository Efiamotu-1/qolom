import React from 'react'
import  { CarouselItem, Carousel }  from 'react-bootstrap'
import atmQueue from '../assests/images/atm-queue-.jpg'
import covidQueue from '../assests/images/covid-queue.jpg'
import patienceQueue from '../assests/images/patience-queue.jpg'


function Carousels() {
  return (
    <Carousel variant = "dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={atmQueue}
      alt="First slide"
      // height="500px"
  

    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={covidQueue}
      alt="Second slide"
      // height="500px"

    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={patienceQueue}
      alt="Third slide"
      // height="500px"
      

    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default Carousels