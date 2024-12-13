import React, { useState } from "react";

const Quotes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const quotes = [
    "I like my coffee like I like my mornings: dark, bitter, and too hot for me to touch. - Unknown",
    "Coffee is a language in itself. - Jackie Chan",
    "I can’t imagine a day without coffee. - Howard Schultz",
    "Behind every successful person is a substantial amount of coffee. - Unknown",
    "Coffee first. Schemes later. - Leanna Renee Hieber",
    "Espresso is a way of life. - Unknown",
    "Without coffee, how would we ever start our day? - Unknown",
    "May your coffee be strong and your Monday be short. - Unknown",
  ];

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.carousel}>
        <div
          style={styles.navButtonLeft}
          onMouseEnter={prevQuote}
        >
          ←
        </div>

        <div style={styles.carouselItem}>
          <div style={styles.quoteBox}>
            <p style={styles.quoteText}>{quotes[currentIndex]}</p>
          </div>
        </div>

        <div
          style={styles.navButtonRight}
          onMouseEnter={nextQuote}
        >
          →
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#d2a87d", 
    position: "relative",
    bottom:'83.42rem',
    fontFamily: "monospace",

  },
  carousel: {
    position: "relative",
    width: "80%",
    maxWidth: "600px",
    padding: "20px",
    overflow: "hidden",
    backgroundColor: "#F3B46D",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  carouselItem: {
    textAlign: "center",
  },
  quoteBox: {
    padding: "20px",
    backgroundColor: "#f4e1c1", 
    borderRadius: "10px",
    border: "1px solid #d1b18b", 
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  quoteText: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#5b4b3a", 
    fontStyle: "italic",
  },
  navButtonLeft: {
    position: "absolute",
    top: "50%",
    left: "0",
    transform: "translateY(-50%)",
    backgroundColor: "#B98951", 
    color: "white",
    borderRadius: "1.5em",
    padding: "10px",
    cursor: "pointer",
    fontSize: "20px",
    zIndex: 10,
    transition: "transform 0.2s ease",
  },
  navButtonRight: {
    position: "absolute",
    top: "50%",
    right: "0",
    transform: "translateY(-50%)",
    backgroundColor: "#B98951", 
    color: "white",
    borderRadius: "1.5em",
    padding: "10px",
    cursor: "pointer",
    fontSize: "20px",
    zIndex: 10,
    transition: "transform 0.2s ease",
  },
};

export default Quotes;