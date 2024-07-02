import React from "react";
import Container from "react-bootstrap/Container";

const Welcome = () => {
  return (
    <div
      name="start"
      className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center p-4 component-style"
    >
      <Container>
        <h1 className="mb-4" style={{fontFamily:"Montserrat"}}>Hej! Jestem Ola</h1>
        <p className="lead" style={{ width: "50%" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="py-4">
          <button type="button" className="btn btn-info me-3">
            Dowiedz się więcej
          </button>
          <button type="button" className="btn btn-info mx-3">
            Sprawdź ofertę
          </button>
          <button type="button" className="btn btn-info mx-3">
            Sprawdź cennik
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
