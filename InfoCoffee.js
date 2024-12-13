import React from "react";
import CoffeeImage from "./main-home-img-15.jpg.png";

function InfoCoffee() {
  return (
    <div
      style={{
        background: "wheat",
        height: "45em",
        width: "100vw",
        position: "relative",
        bottom: "83.7em",
      }}
    >
      <img
        style={{ height: "35em", marginTop: "4em", marginLeft: "2em" }}
        src={CoffeeImage}
      ></img>
      <div
        className="div-contact"
        style={{
          position: "relative",
          left: "30em",
          fontSize: "1.97145em",
          bottom: "19em",
        }}
      >
        <h5>AMSTERDAM CENTER COFFEE</h5>
        <p>Weteringstraat 48,1017,Amsterdam</p>
        <p>Tel:020-7718364</p>
        <p>Email:earlybirds@info.com</p>
        <p>Mon-Fri..........6.45am-3.00pm</p>
        <p>Sat-Sun.........8.30am-4.00pm</p>
      </div>
    </div>
  );
}

export default InfoCoffee;
