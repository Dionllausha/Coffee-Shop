import React, { useEffect } from "react";
import Arabica from "./H1-product-list-2.png.png";
import Robusta from "./H1-product-list-t.png.png";

function ArabicaRobusta() {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];

    const keyframes = `
     @keyframes moveGradient {
       0% { background-position: 0% 50%; }
       50% { background-position: 100% 50%; }
       100% { background-position: 0% 50%; }
  }
  `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);

  return (
    <div
      className="arabica-Robusta"
      style={{
        fontFamily: "monospace",
        backgroundColor: "#FDF1D9",
        border: "1px solid black",
        padding: "1.25em",
        height: "30em",
        position: "relative",
        bottom: "102.7em",
      }}
    >
      <h1 className="h1-txt" style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
        OUR BLENDS DELIVER ON THE PROMISE OF
        <br />
        BALANCE AND CONSISTENCY, ROASTED TO
        <br />
        MAXIMIZE SWEETNESS.
      </h1>
      <p className="paragraph" style={{ fontSize: "1.3em" }}>
        Each of our blends is carefully crafted to offer a perfect harmony of
        flavors, <br /> ensuring every sip is consistently smooth and
        satisfying. <br />
        Roasted to bring out the natural sweetness in every bean,
        <br /> our coffees are designed to provide an exceptional experience,
        <br /> whether you're enjoying your first cup of the day or winding down
        in the evening.
      </p>
      <a
        style={{
          textDecoration: "none",
          fontSize: "1.15em",
          fontWeight: "bolder",
          cursor: "pointer",
        }}
      >
        VIEW MORE →
      </a>
      <div
        style={{
          marginLeft: "66.5em",
          position: "relative",
          bottom: "19.2rem",
          borderLeft: "1px solid black",
          borderRight: "1px solid black",
          width: "27em",
          height: "29em",
        }}
      >
        <img className="Arabica" style={{ height: "27em" }} src={Arabica} alt="Arabica Bekele" />
        <h3
          style={{
            position: "relative",
            bottom: "3em",
            left: "1em",
            fontWeight: "bolder",
          }}
        >
          ARABICA BEKELE
        </h3>
        <div
          style={{
            position: "relative",
            bottom: "4em",
            left: "1em",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: "1em" }}>$44.00</p>
          <button
            style={{
              background: "linear-gradient(45deg, skyblue , #87744e )",
              backgroundSize: "400% 400%",
              border: "none",
              color: "white",
              fontSize: "1em",
              padding: "12px 24px",
              cursor: "pointer",
              outline: "none",
              borderRadius: "50px",
              position: "relative",
              left: "5em",
              bottom: "1.5em",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              fontWeight: "bold",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              animation: "moveGradient 6s linear infinite",
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
              e.target.style.transform = "scale(1)";
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div
        style={{
          marginLeft: "66.5em",
          position: "relative",
          bottom: "42.7rem",
          left: "27.1em",
          width: "27em",
          height: "29em",
        }}
      >
        <img className="Robusta-coffee" style={{ height: "27em" }} src={Robusta} alt="Robusta Santa" />
        <h3
          style={{
            position: "relative",
            bottom: "3em",
            left: "1em",
            fontWeight: "bolder",
          }}
        >
          ROBUSTA SANTA
        </h3>
        <div
          style={{
            position: "relative",
            bottom: "4em",
            left: "1em",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: "1em" }}>$35.00</p>
          <button
            style={{
              background: "linear-gradient(45deg, skyblue , #87744e )",
              backgroundSize: "400% 400%",
              border: "none",
              color: "white",
              fontSize: "1em",
              padding: "12px 24px",
              cursor: "pointer",
              outline: "none",
              borderRadius: "50px",
              position: "relative",
              left: "5em",
              bottom: "1.5em",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              fontWeight: "bold",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              animation: "moveGradient 6s linear infinite",
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
              e.target.style.transform = "scale(1)";
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArabicaRobusta;
