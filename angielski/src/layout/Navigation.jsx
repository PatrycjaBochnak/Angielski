import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavButtons from "../components/NavButtons";
import "../styles/custom.css"

const Navigation = () => {
  return (
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
          <Nav style={{ gap: "1em", fontSize: "18px", cursor:"pointer" }}>
            <NavButtons className="nav-style" source="start" linkName="Start" />
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
  );
};

export default Navigation;
