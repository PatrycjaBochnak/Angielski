import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavButtons from "../components/NavButtons";
import "../styles/custom.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo2 from "../asstes/images/logo-pion2.png";

const Navigation = () => {
  return (
    <>
      <Navbar className="w-100 p-4 fixed-top" style={{ backgroundColor: "lightgray" }}>
        <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand><img 
          src={logo2} 
          alt="Logo" 
          style={{
            width: "100px",
            height: "auto",
          }} 
        /></Navbar.Brand>
          <button type="button" className="btn btn-info" style={{ fontSize: "20px" }}>
            Skontaktuj się
          </button>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav style={{ gap: "2em", fontSize: "22.5px", cursor: "pointer" }}>
              <NavButtons source="start" linkName="Start" />
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
        <div className="d-flex flex-col list-group translate-middle-y start-0 top-50 p-3 position-fixed">
          <ul className="list-unstyled">
            <li>
              <a
                className="list-group-item d-flex p-3 justify-content-between align-items-center text-dark mb-2"
                href="https://www.linkedin.com/in/patrycja-bochnak-779a931a7/"
              >
                <span style={{ marginRight: "rem" }}>Facebook</span>{" "}
                <FaFacebook size={30} />
              </a>
            </li>
            <li>
              <a
                className="list-group-item d-flex p-3 justify-content-between align-items-center text-dark mb-2"
                href="https://github.com/PatrycjaBochnak"
              >
                <span style={{ marginRight: "1rem" }}>Instagram </span>{" "}
                <FaInstagram size={30} />
              </a>
            </li>
            <li>
              <a
                className="list-group-item d-flex p-3 justify-content-between align-items-center text-dark mb-2"
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
