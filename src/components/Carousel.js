
import React from "react";
// import Bunny from "../assests/images/carousel.jpg";
import {Link} from '@mui/material'

function Carousels() {



  return (
    <>
     
    {/* {hide && */}
      <div
        id="carouselExampleCaptions"
        class="carousel slide d-flex align-items-center"
        data-bs-ride="carousel"
      >
     
        <div class="carousel-inner">
          <div class="carousel-item active text-white" >
            <h1 class="text-center">Queue virtually </h1>

            <div class="d-flex justify-content-center ">
              <h5 class="inner-carousel-width text-center">
                Be present only when you need to
              </h5>
            </div>

            {/* <br /> */}
          </div>
          <div class="carousel-item text-white" >
            <h1 class="text-center">Create your line</h1>
            <div class="d-flex justify-content-center ">
              <h5 class="inner-carousel-width text-center">
                Make your own line and manage the queue.
              </h5>
            </div>
          </div>
          <div class="carousel-item text-white" >
            <h1 class="text-center">Make Orders</h1>
            <div class="d-flex justify-content-center ">
              <h5 class="inner-carousel-width text-center">
                Skip queues entirely. Just order and pick up
              </h5>
            </div>
            {/* <br /> */}
          </div>
          
        </div>
        
      </div> 
      {/* } */}

      <div class="row justify-content-center" >
                    <Link href="/register">
    
                      <button onClick={() => {dispatch({type : 'login'})}} class="btn btn-primary btn-lg"> Get Started</button>
                    </Link>
     </div>
    </>
  );
}

export default Carousels;
