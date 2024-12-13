import React from "react";
import MainHome from "./main-home-rev-slider-3.jpg.png";
import Dots from "./enjoy-dots.png";
function HeroSection() {
  return (
    <div className="Herosection" style={{width:'50vh'}}>
      <img className="MainHome" style={{ width: "50vw" }} src={MainHome} alt="Coffee" />

<div style={{height:'70em'}}>
      <img className="Dots"
        style={{
          width: "30vw",
          position: "relative",
          left: "60em",
          bottom: "54.5em",
          height: "50em",
          borderTop:'1px solid black',
          height:'40em'
        }}
        src={Dots}
        alt="Dots"
      />

      </div>
      
    </div>
  );
}

export default HeroSection;
