import React from "react";
import CourseCoffee from "./main-home-img-3.jpg.png";
function CoffeeCourses() {
  return (
    <div
      style={{ backgroundColor: "#c5d6d1", width: "117em", height: "40rem",position:"relative",bottom:'185.9em' }}
    >
      <img
        className="image-course-coffee"
        style={{ width: "47rem", position: "relative", top: "7rem" }}
        src={CourseCoffee}
      ></img>
      <h1 style={{ position: "relative", bottom: "19rem", left: "60rem", fontFamily: 'monospace'
  }}>
        BARISTA SCHOOLS & CAREERS
      </h1>
      <p
        style={{
        position: "relative",
        bottom: "19rem",
        left: "60rem",
        fontSize: "2.1em",
        fontFamily: 'monospace',
      }}>
        We host courses covering everything <br />
        from simple home brewing techniques <br />
        to advanced latte art <br />
        to allow you to learn <br />
        the essential life skill of how to make <br />
        truly great coffee.
      </p>
      
      <button
  style={{
    backgroundColor: "black",
    fontFamily:'monospace',
    color: "white",
    border: "none",
    width: "7rem",
    height: "4rem",
    fontSize: "1.25em",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "8px", // Modern rounded corners
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
    transition: "all 0.3s ease", // Smooth transitions for all properties
    position: "relative",
    left: "59em",
    bottom: "17.2em",
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#333"; // Darken background on hover
    e.target.style.transform = "scale(1.05)"; // Slightly scale up the button
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "black"; // Reset background on hover leave
    e.target.style.transform = "scale(1)"; // Reset scaling
  }}
>
  View More
</button>

    </div>
  );
}

export default CoffeeCourses;