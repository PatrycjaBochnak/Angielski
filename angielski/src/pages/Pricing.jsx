import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Offer = () => {
  return (
    <div
      name="pricing"
      className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center component-style"
    >
      <h1 style={{ fontFamily: "Montserrat" }}>Cennik</h1>
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="mb-2 px-2 d-flex justify-content-center">
            <div className="rectangle">Kafelka 1</div>
          </Col>
          <Col md={4} className="mb-4 d-flex justify-content-center">
            <div className="rectangle">Kafelka 2</div>
          </Col>
          <Col md={4} className="mb-4 d-flex justify-content-center">
            <div className="rectangle">Kafelka 3</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Offer;
