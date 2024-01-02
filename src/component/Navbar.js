import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={nav}>
      <Link to="/" style={link}>
        <h1>KodeSawal</h1>
      </Link>
      <ul style={myUl}>
        <li>
          <Link style={link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={link} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link style={link} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

const nav = {
  display: "flex",
  background: "#fe024e",
  padding: "0 6rem",
  justifyContent: "space-between",
  color: "#fff",
  alignItems: "center",
};

const myUl = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  width: "20%",
};
const link = {
  color: "#fff",
  textDecoration: "none",
};
