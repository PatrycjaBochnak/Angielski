import React from 'react'
import Container from "react-bootstrap/Container";

const Offer = () => {
  return (
    <div 
    name="offer"
    className="vh-100 bg-light d-flex justify-content-center align-items-center">
      <h1 className="d-flex flex-column">Powazna oferta pieniezna</h1>
       <Container>
        <h1 style={{ fontSize: "30px" }}>Kafelka 1</h1>
      </Container>
      <Container>
        <h1 style={{ fontSize: "30px" }}>Kafelka 2</h1>
      </Container>
      <Container>
        <h1 style={{ fontSize: "30px" }}>Kafelka 3</h1>
      </Container>
    </div>
  )
}

export default Offer
