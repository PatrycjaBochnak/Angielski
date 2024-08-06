import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavButtons from "../components/NavButtons";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo2 from "../asstes/images/logo-poziom.png";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <>
      {/* Navbar for large screens */}
      <Navbar 
        className="navbar-custom w-100 p-4 d-none d-md-flex" 
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000}}
      >
        <Container>
          <Navbar.Brand>
            <img src={logo2} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <a
            type="button"
            className="btn-custom"
            href="mailto:biuro@szkolainsideout.pl"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#f8f9fa", textDecoration: "none", display: "flex", alignItems: "center" }}
          >
            Skontaktuj się
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ml-auto d-flex justify-between gap-4"
              style={{ fontSize: "23px", width: "100%", cursor: "pointer" }}
            >
              <NavButtons source="start" linkName="Start" />
              <NavButtons source="about" linkName="O szkole" />
              <NavButtons source="how-i-teach" linkName="Jak uczymy?" />
              <NavButtons source="offer" linkName="Oferta" />
              <NavButtons source="pricing" linkName="Cennik" />
              <NavButtons source="reviews" linkName="Opinie" />
              <NavButtons source="contact" linkName="Kontakt" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Navbar for mobile screens */}
      <Navbar 
        className="d-md-none w-100 p-4" 
        style={{ color: "#0a192f" }}
      >
        <Container>
          <Navbar.Brand>
            <img src={logo2} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="mobile-navbar-nav" onClick={handleClick} />
          <Navbar.Collapse id="mobile-navbar-nav" className={`${nav ? "show" : ""}`}>
            <Nav className="flex-column mt-2">
              <NavButtons source="start" linkName="Start" onClick={handleClick} />
              <NavButtons source="about" linkName="O szkole" onClick={handleClick} />
              <NavButtons source="how-i-teach" linkName="Jak uczymy?" onClick={handleClick} />
              <NavButtons source="offer" linkName="Oferta" onClick={handleClick} />
              <NavButtons source="pricing" linkName="Cennik" onClick={handleClick} />
              <NavButtons source="reviews" linkName="Opinie" onClick={handleClick} />
              <NavButtons source="contact" linkName="Kontakt" onClick={handleClick} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Social media icons for large screens */}
      <Container className="mt-5 d-none d-md-block">
        <div
          className="d-flex flex-column position-fixed"
          style={{ left: 0, top: "50%", transform: "translateY(-50%)", zIndex: 1000 }}
        >
          <ul className="list-unstyled">
            <li>
              <a
                className="list-group-item d-flex align-items-center text-dark mb-2 social-link"
                href="https://www.facebook.com/profile.php?id=61562394448294"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <span className="link-text">Facebook</span>
                <FaFacebook size={30} className="ml-2" />
              </a>
            </li>
            <li>
              <a
                className="list-group-item d-flex align-items-center text-dark mb-2 social-link"
                href="https://www.instagram.com/insideout.englishacademy/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <span className="link-text">Instagram</span>
                <FaInstagram size={30} className="ml-2" />
              </a>
            </li>
            <li>
              <a
                className="list-group-item d-flex align-items-center text-dark mb-2 social-link"
                href="mailto:biuro@szkolainsideout.pl"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <span className="link-text">Email</span>
                <HiOutlineMail size={30} className="ml-2" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Navigation;
