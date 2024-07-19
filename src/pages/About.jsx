import React from "react";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <div
      name="about"
      className="vh-100 bg-light d-flex flex-column justify-content-center component-style"
    >
      <Container style={{ maxWidth: "600px" }}>
        <h1
          style={{
            fontFamily: "Montserrat",
            marginBottom: "1.5rem",
            textAlign: "right",
          }}
        >
          O szkole
        </h1>
        <p className="lead text-end" style={{ textAlign: "right" }}>
          Szkoła InsideOut English Academy to szkoła językowa specjalizująca się
          w nauczaniu języka angielskiego. Oferuje kursy zarówno dla dzieci jak
          i dorosłych. Jej misją jest zapewnienie wysokiej jakości edukacji
          językowej, która umożliwia uczniom rozwijanie umiejętności
          komunikacyjnych i osiąganie sukcesów zarówno w życiu szkolnym jak i
          osobistym.
        </p>
        <p className="lead text-end" style={{ textAlign: "right" }}>
          Szkoła zlokalizowana przy ulicy Wielkopolskiej 68 w Gdańsku zapewnia
          indywidualne podejście do ucznia oraz kameralną atmosferę sprzyjającą
          przyswajaniu wiedzy. Duża odpowiedzialność w kontekście nauki stoi
          zarówno po stronie szkoły jak i rodziców, dlatego regularny kontakt z
          Państwem jest jednym z kluczowych elementów współpracy.
        </p>
      </Container>
    </div>
  );
};

export default About;
