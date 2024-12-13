import React from "react";
import Uma from "./main-home-img-9.jpg.png";
import Tom from "./main-home-img-10.jpg.png";
import Jonas from "./main-home-img-6.jpg.png";
import John from "./main-home-img-8.jpg.png";
import Ed from "./main-home-img-5.jpg.png";

function OurTeam() {
  return (
    <div style={{ fontFamily: "monospace",position:"relative",bottom:'105.9em' }}>
      <h1
        style={{
          color: "#202020",
          border: "1px solid black",
          fontSize: "3.3rem",
          fontWeight: "bolder",
        }}
      >
        OUR AWESOME TEAM
      </h1>
      <div
        style={{
          position: "relative",
          bottom: "2.86em",
          border: "2px solid gray",
          width: "20vw",
          height: "50vh",
          textAlign: "center",
        }}
      >
        <img
        className="Uma"
          style={{
            height: "35vh",
            width: "13vw",
            position: "relative",
            top: "1em",
          }}
          src={Uma}
        ></img>
        <h1 style={{ position: "relative", right: "3em" }}>Uma Clark</h1>
        <h4
          style={{
            position: "relative",
            right: "6.5em",
            fontFamily: "Montserrat",
          }}
        >
          Manager
        </h4>
      </div>
      <div
        style={{
          position: "relative",
          bottom: "32.9em",
          left: "24.8em",
          border: "2px solid gray",
          width: "20vw",
          height: "50vh",
          textAlign: "center",
        }}
      >
        <img
         className="Tom"
          style={{
            height: "35vh",
            width: "13vw",
            position: "relative",
            top: "1em",
          }}
          src={Tom}
        ></img>
        <h1 style={{ position: "relative", right: "2em" }}>Tom Splinder</h1>
        <h4
          style={{
            position: "relative",
            right: "6.5em",
            fontFamily: "Montserrat",
          }}
        >
          Manager
        </h4>
      </div>
      <div
        style={{
          position: "relative",
          bottom: "62.9em",
          left: "49.63em",
          border: "2px solid gray",
          width: "20vw",
          height: "50vh",
          textAlign: "center",
        }}
      >
        <img
         className="Jonas"
          style={{
            height: "35vh",
            width: "13vw",
            position: "relative",
            top: "1em",
          }}
          src={Jonas}
        ></img>
        <h1 style={{ position: "relative", right: "2em" }}>Jonas Hanks</h1>
        <h4
          style={{
            position: "relative",
            right: "6.5em",
            fontFamily: "Montserrat",
          }}
        >
          Pastry Chef
        </h4>
      </div>
      <div
        style={{
          position: "relative",
          bottom: "92.999em",
          left: "74.45em",
          border: "2px solid gray",
          width: "20vw",
          height: "50vh",
          textAlign: "center",
        }}
      >
        <img
         className="John"
          style={{
            height: "35vh",
            width: "13vw",
            position: "relative",
            top: "1em",
          }}
          src={John}
        ></img>
        <h1 style={{ position: "relative", right: "2em" }}>John Simons</h1>
        <h4
          style={{
            position: "relative",
            right: "5.5em",
            fontFamily: "Montserrat",
          }}
        >
          Media Manager
        </h4>
      </div>
      <div
        style={{
          position: "relative",
          bottom: "122.99em",
          left: "99.42em",
          border: "2px solid gray",
          width: "20vw",
          height: "50vh",
          textAlign: "center",
        }}
      >
        <img
        className="Ed"
          style={{
            height: "35vh",
            width: "13vw",
            position: "relative",
            top: "1em",
          }}
          src={Ed}
        ></img>
        <h1 style={{ position: "relative", right: "3em" }}>Ed Morris</h1>
        <h4
          style={{
            position: "relative",
            right: "7.5em",
            fontFamily: "Montserrat",
          }}
        >
          Chef
        </h4>
      </div>
    </div>
  );
}

export default OurTeam;