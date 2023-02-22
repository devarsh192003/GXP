import React from "react";
import Cardlist from "../Cardlist";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css"
import "../Card.css"

import Data from "../Data2.json"
function Home() {
  return (
    <div>
      <div className="carousel-wrapper" >
        <Carousel
          animationHandler= 'fade'
          infiniteLoop
          autoPlay
          interval={3000}
          transitionTime={500}
          width={window.width}
          dynamicHeight={true}
          showThumbs={false}
          showArrows={true}
          showIndicators={false}
        >
          <div className="img1">
            <img src={require("../img/Slide1.png")} />
          </div>
          <div className="img1">
            <img src={require("../img/Slide2.png")} />
          </div>
          <div className="img1">
            <img src={require("../img/Slide3.png")} />
          </div>
          <div className="img1">
            <img src={require("../img/Slide4.png")} />
          </div>
          <div className="img1">
            <img src={require("../img/Slide5.png")} />
          </div>
          <div className="img1">
            <img src={require("../img/Slide6.png")} />
          </div>
        </Carousel>
      </div>
      <Cardlist />
      <div className='Contents'>
        <div className='Home'>
          <h1>Who are We?</h1>
          <br/>
        <p>{Data.data2.Home.para1}</p>
        <br/>
        <p>{Data.data2.Home.para2}</p>
        <br/>
        <ul className='dottes-list'>
          <li>{Data.data2.Home.Content1}</li>
          <li>{Data.data2.Home.Content2}</li>
          <li>{Data.data2.Home.Content3}</li>
        </ul>
        <br/>
        <p>{Data.data2.Home.para3}</p>
        </div>
      </div>

    </div>
  );
}
export default Home;
