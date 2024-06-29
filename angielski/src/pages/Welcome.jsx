import React from "react";
import Container from "react-bootstrap/Container";

const Welcome = () => {
  return (
    <div
      name="start"
      className="vh-100 bg-light d-flex justify-content-center align-items-center p-4"
    >
      <Container>
        <h1 style={{ fontSize: "30px" }}>Hej! Jestem Ola</h1>
      </Container>
    </div>
  );
};

export default Welcome;
