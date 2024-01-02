import React from "react";

const Footer = () => {
  return (
    <div>
      <div style={footer}>
        <h5>Oh My Footer</h5>
      </div>
    </div>
  );
};

export default Footer;

const footer = {
  display: "flex",
  background: "#fe024e",
//   padding: "0 6rem",
  justifyContent: "center",
  color: "#fff",
  alignItems: "center",
  position: "absolute",
  bottom: "0px",
  width: "100%",
};

