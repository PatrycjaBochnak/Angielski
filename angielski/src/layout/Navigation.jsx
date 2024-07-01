import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavButtons from "../components/NavButtons";
import "../styles/custom.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navigation = () => {
  return (
    <>
      <Navbar
        className="w-100 py-3 fixed-top"
        style={{ backgroundColor: "pink" }}
      >
        <Container>
          <Navbar.Brand>Elefoncik</Navbar.Brand>
          <Navbar.Toggle />
          <button type="button" className="btn btn-info">
            Umów się na bezpłatne konsultacje
          </button>
          <Navbar.Collapse
            className="justify-content-end"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Nav style={{ gap: "1em", fontSize: "18px", cursor: "pointer" }}>
              <NavButtons source="start" linkName="Start" />
              <NavButtons source="about" linkName="O mnie" />
              <NavButtons source="how-i-teach" linkName="Jak uczę?" />
              <NavButtons source="offer" linkName="Oferta" />
              <NavButtons source="pricing" linkName="Cennik" />
              <NavButtons source="reviews" linkName="Opinie" />
              <NavButtons source="contact" linkName="Kontakt" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <div className="d-flex left-0 flex-col list-group translate-middle-y start-0 top-50 position-fixed">
          <ul className="list-unstyled">
            <li className="list-group-item d-flex justify-content-between align-items-center bg-gray-900 text-gray-300 mb-2 p-3">
              <a
                className="list-group-item d-flex justify-content-between align-items-center text-dark mb-2"
                href="https://www.linkedin.com/in/patrycja-bochnak-779a931a7/"
              >
                <span style={{ marginRight: "1rem" }}>Facebook</span>{" "}
                <FaFacebook size={30} />
              </a>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center bg-gray-900 text-gray-300 mb-2 p-3">
              <a
                className="list-group-item d-flex justify-content-between align-items-center text-dark mb-2"
                href="https://github.com/PatrycjaBochnak"
              >
                <span style={{ marginRight: "1rem" }}>Instagram </span>{" "}
                <FaInstagram size={30} />
              </a>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center bg-gray-900 text-gray-300 mb-2 p-3">
              <a
                className="list-group-item d-flex justify-content-between align-items-center text-dark mb-2"
                href="mailto:patrycjabochnak@protonmail.com"
              >
                <span style={{ marginRight: "1rem" }}>Email</span>{" "}
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
