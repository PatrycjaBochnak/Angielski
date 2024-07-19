import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavButtons from "../components/NavButtons";
import "../styles/custom.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo2 from "../asstes/images/logo-poziom.png";

const Navigation = () => {
  return (
    <>
      <Navbar className="navbar-custom w-100 p-4 fixed-top">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand>
            <img src={logo2} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <a
            type="button"
            className="btn-custom"
            href="mailto:biuro@szkolainsideout.pl"
            target="_blank"
          >
            Skontaktuj się
          </a>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="nav-links">
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
      <Container className="mt-5">
        <div className="d-flex flex-column list-group translate-middle-y start-0 top-50 p-3 position-fixed">
          <ul className="list-unstyled">
            <li>
              <a
                className="list-group-item d-flex my-3 justify-content-between align-items-center text-dark mb-2 social-link"
                href="https://www.facebook.com/profile.php?id=61562394448294"
                target="_blank"
              >
                <span className="link-text">Facebook</span>
                <FaFacebook size={30} />
              </a>
            </li>
            <li>
              <a
                className="list-group-item d-flex my-3 justify-content-between align-items-center text-dark mb-2 social-link"
                href="https://www.instagram.com/insideout.englishacademy/"
                target="_blank"
              >
                <span className="link-text">Instagram</span>
                <FaInstagram size={30} />
              </a>
            </li>
            <li>
              <a
                className="list-group-item d-flex my-3 justify-content-between align-items-center text-dark mb-2 social-link"
                href="mailto:biuro@szkolainsideout.pl"
                target="_blank"
              >
                <span className="link-text">Email</span>
                <HiOutlineMail size={30} />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Navigation;
