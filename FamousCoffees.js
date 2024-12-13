import React from "react";
import RobustaCoffee from "./H1-product-list-1.png.png";
import ArabicaBlackCoffee from "./H1-product-list-3.png.png";
import LibericaCoffee from "./H1-product-list-4.png.png";
import ArabicaWhiteCoffee from "./H2-product-list-6.png.png";

function FamousCoffees() {
  return (
    <div
      style={{
        border: "1px solid black",
        borderBottom: "1px solid black",
        height: "33em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em",
        position: "relative",
        bottom: "83.7rem",
        fontFamily: "monospace",
        backgroundColor: "#F5E0C3",
      }}
    >
      <div
        style={{
          textAlign: "center",
          width: "25%",
          borderRight: "1px solid black",
          padding: "1em",
        }}
      >
        <img
          className="ArabicaCoffee"
          style={{
            maxWidth: "100%",
            marginBottom: "1.5em",
          }}
          src={ArabicaBlackCoffee}
          alt="Arabica Black Coffee"
        />
        <h3 style={{ margin: "0", marginBottom: "0.5em" }}>FRENCH ROAST</h3>
        <p style={{ margin: "0" }}>$37.00</p>
      </div>

      <div
        style={{
          textAlign: "center",
          width: "25%",
          padding: "1em",
        }}
      >
        <h4 className="New-Label">NEW!!!</h4>
        <img
          className="RobustaCoffee"
          style={{
            maxWidth: "100%",
            marginBottom: "1.5em",
          }}
          src={RobustaCoffee}
          alt="Robusta Coffee"
        />
        

        <h3
          style={{
            margin: "0",
            marginBottom: "0.5em",
            position: "relative",
            bottom: "1em",
          }}
        >
          DECAF ESPRESSO
        </h3>
        <p
          style={{
            margin: "0",
            marginBottom: "1em",
            position: "relative",
            bottom: "1em",
          }}
        >
          $41.00
        </p>
      </div>

      <div
        style={{
          textAlign: "center",
          width: "24.6%",
          borderRight: "1px solid black",
          borderLeft: "1px solid black",
          padding: "1em",
        }}
      >
        <img
          className="LibericaCoffee"
          style={{
            maxWidth: "100%",
            marginBottom: "1.5em",
          }}
          src={LibericaCoffee}
          alt="Liberica Coffee"
        />
        <h3 style={{ margin: "0", marginBottom: "0.5em" }}>COSTA RICA</h3>
        <p style={{ margin: "0" }}>$36.00</p>
      </div>

      <div
        style={{
          textAlign: "center",
          width: "25%",
          padding: "1em",
        }}
      >
        <img
          className="ArabicaWhite"
          style={{
            maxWidth: "100%",
            marginBottom: "1.5em",
          }}
          src={ArabicaWhiteCoffee}
          alt="Arabica White Coffee"
        />
        <h4 className="sold-label">SOLD!!!</h4>
        <h3 style={{ margin: "0", marginBottom: "0.5em" }}>
          DECAF FRENCH ROAST
        </h3>
        <p style={{ margin: "0" }}>$45.00</p>
      </div>
    </div>
  );
}

export default FamousCoffees;
