import React from "react";
import PerfectFoods from "./main-home-new-clients-2.png.png";
import FunnyFarm from "./main-home-new-clients-4.png.png";
import PhilyLily from "./main-home-new-clients-5.png.png";
import KingsDrinks from "./main-home-new-clients-1.png.png";
import Onyx from "./onyxcoffee.png"
function Supplies() {
  return (
    <div style={{ position:'relative',bottom:'186em' }}>
      <h1 >OUR TRUSTED SUPPLIES</h1>
      
      <div style={{  }}>
      <div style={{border: "1px solid black", height:'12rem', width:'20rem'}}>
        <img style={{position:'relative', left:'-0rem'}} src={Onyx}></img>
        </div>
        <div style={{border: "1px solid black", position:'relative', left:'20rem',bottom:'12.15em', height:'12rem', width:'20rem'}}>
        <img style={{ position:'relative', left:'4rem',top:'3rem' }} src={PerfectFoods}></img>
        </div>
        <div style={{border: "1px solid black", position:'relative', left:'40rem',bottom:'24.3em', height:'12rem', width:'20rem'}}>
        <img style={{ position:'relative', left:'6rem',top:'3rem' }} src={FunnyFarm}></img>
        </div>
        <div style={{ border: "1px solid black", position:'relative', left:'60rem',bottom:'36.45em', height:'12rem', width:'20rem' }}>
        <img style={{  position:'relative', left:'2rem',top:'3rem'}} src={PhilyLily}></img>
        </div>
        <div style={{ border: "1px solid black", position:'relative', left:'80rem',bottom:'48.6em', height:'12rem', width:'20rem' }}>       
             <img  style={{ position:'relative',left:'2em',top:'3em'}}src={KingsDrinks}></img>
        </div>
      </div>
    </div>
  );
}

export default Supplies;