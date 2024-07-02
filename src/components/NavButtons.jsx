import React from "react";
import { Link } from "react-scroll";

const NavButtons = ({ source, linkName }) => (
  <Link
    className="button text-decoration-none"
    style={{ color: "#333333", fontWeight: "bold", fontFamily: "Arial" }}
    activeClass="active"
    to={source}
    spy={true}
    smooth={true}
    offset={0}
    duration={400}
  >
    {linkName}
  </Link>
);

export default NavButtons;
