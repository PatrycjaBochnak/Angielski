import React from "react";
import { Link } from "react-scroll";

const NavButtons = ({ source, linkName }) => (
  <Link
    className="nav-custom-btn"
    style={{ color: "#333333", fontWeight: "bold", fontFamily: "Arial", textDecoration: "none" }}
    activeClass="active"
    to={source}
    spy={true}
    smooth={true}
    offset={-111}
    duration={400}
  >
    {linkName}
  </Link>
);

export default NavButtons;
