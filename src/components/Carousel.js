// import { makeStyles } from '@material-ui/core'
// import React from 'react'
// import  { Carousel }  from 'react-bootstrap'
// // import atmQueue from '../assests/images/atm-queue-.jpg'
// // import covidQueue from '../assests/images/covid-queue.jpg'
// // import patienceQueue from '../assests/images/patience-queue.jpg'
//    import Bunny from '../assests/images/carousel.jpg'

// let useStyles = makeStyles({
//   layoutBackground: {
//     background: "linear-gradient(to bottom ,#0891b2, #0369a1, #1E3A8A, #1e3a8a, #03001c);",
//   },
//   hover: {
//     "&:hover": {
//       fontSize: 18,
//       color: "white",
//       // background : 'lightblue'
//     },
//   },
//   opacity : {
//     background: 'black'
//   },
// });

// function Carousels() {

//   const classes = useStyles()

//   return (
//     <Carousel fade variant="dark" controls={false} indicators={false}>
//     <Carousel.Item interval={2000}>

//       <Carousel.Caption
//       >
//         <h3>Queue virtually</h3>
//         <p>Be present only when you need to.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item interval={2000}>

//       <Carousel.Caption>
//         <h3>Create your line</h3>
//         <p>Make your own line and manage the queue.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item interval={2000}>

//       <Carousel.Caption>
//         <h3>Make Orders</h3>
//         <p>Skip queues entirely. Just order and pick up.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
//   )
// }

// export default Carousels

import React from "react";
import Bunny from "../assests/images/carousel.jpg";

function Carousels() {
  return (
    <>
     

      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" >
            <h1 class="text-center">Queue virtually </h1>

            <div class="d-flex justify-content-center ">
              <h5 class="inner-carousel-width text-center">
                Be present only when you need to
              </h5>
            </div>

            <br />
          </div>
          <div class="carousel-item" >
            <h1 class="text-center">Create your line</h1>
            <div class="d-flex justify-content-center ">
              <h5 class="inner-carousel-width text-center">
                Make your own line and manage the queue.
              </h5>
            </div>
          </div>
          <div class="carousel-item" >
            <h1 class="text-center">Make Orders</h1>
            <div class="d-flex justify-content-center ">
              <h5 class="inner-carousel-width text-center">
                Skip queues entirely. Just order and pick up
              </h5>
            </div>
            <br />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousels;
