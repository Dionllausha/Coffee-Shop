import React from "react";

const FooterLink = ({ children, onHoverColor = "#8a5d3b" }) => {
  const [hovered, setHovered] = React.useState(false);

  const textStyle = {
    margin: "8px 0",
    cursor: "pointer",
    textDecoration: hovered ? "none" : "underline",
    color: hovered ? onHoverColor : "#6d4b3b", 
    transition: "all 0.3s ease",
    fontSize: "1rem",
  };

  return (
    <p
      style={textStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </p>
  );
};

const FooterSection = ({ title, children, isHeader = false }) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px",
        minWidth: "250px",
        flex: 1, 
      }}
    >
      {isHeader ? (
        <h1
          style={{
            fontSize: "2rem",
            color: "#6d4b3b", 
            margin: "0",
            cursor: "pointer",
            textDecoration: "underline",
            transition: "color 0.3s ease",
            fontFamily: "Arial, sans-serif",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#8a5d3b")}
          onMouseLeave={(e) => (e.target.style.color = "#6d4b3b")}
        >
          {title}
        </h1>
      ) : (
        <h2
          style={{
            fontSize: "1.5rem",
            margin: "10px 0",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#6d4b3b", 
            fontFamily: "Arial, sans-serif",
          }}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f5deb3", 
        color: "#6d4b3b", 
        display: "flex",
        justifyContent: "space-evenly", 
        alignItems: "flex-start",
        borderTop: "2px solid #6d4b3b",
        borderBottom: "2px solid #6d4b3b", 
        padding: "4rem 2rem", 
        position: "relative",
        bottom: "234.6rem",
        flexWrap: "wrap",
      }}
    >
      <FooterSection title="EARLY BIRDS" isHeader>
        <FooterLink>Weteringstraat 48, 1017 SP</FooterLink>
        <FooterLink>Amsterdam</FooterLink>
        <FooterLink>Tel: 020-7718364</FooterLink>
      </FooterSection>

      <FooterSection title="Account & Shop">
        <FooterLink>My Account</FooterLink>
        <FooterLink>Checkout</FooterLink>
        <FooterLink>Cart</FooterLink>
        <FooterLink>Shop</FooterLink>
      </FooterSection>

      <FooterSection title="Follow Us">
        <FooterLink>Facebook</FooterLink>
        <FooterLink>Instagram</FooterLink>
        <FooterLink>Twitter</FooterLink>
      </FooterSection>
    </footer>
  );
};

export default Footer;
