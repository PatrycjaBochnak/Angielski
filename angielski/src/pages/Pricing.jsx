import React from "react";
import Container from "react-bootstrap/Container";

const Pricing = () => {
  return (
    <div
      name="pricing"
      className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center component-style"
    >
      <h1 style={{fontFamily:"Montserrat"}}>Cennik</h1>
    <div className="d-flex flex-row">
      <Container>
        <h1 className="d-flex flex-column rectangle" style={{ backgroundColor: '#007bff', height: '200px', border: '2px solid #0000ff' }}>
          Kafelka 1
        </h1>
      </Container>
      <Container>
        <h1 className="d-flex flex-column rectangle" style={{ backgroundColor: '#007bff', height: '200px', border: '2px solid #0000ff' }}>Kafelka 2</h1>
      </Container>
      <Container>
        <h1 className="d-flex flex-column rectangle" style={{ backgroundColor: '#007bff', height: '200px', border: '2px solid #0000ff' }}>Kafelka 3</h1>
      </Container>
      </div>
    </div>
  );
};

export default Pricing;
