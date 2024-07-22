import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../asstes/photos/image1.jpeg";

const About = () => {
  return (
    <div
      name="about"
      className="vh-100 bg-light d-flex flex-column justify-content-center component-style"
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="d-flex justify-content-center">
            <img
              src={image1}
              alt="image"
              className="image-welcome"
              style={{ width: "100%", maxWidth: "450px", borderRadius: "10px" }}
            />
          </Col>
          <Col md={6}>
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
              Szkoła InsideOut English Academy to szkoła językowa specjalizująca
              się w nauczaniu języka angielskiego. Oferuje kursy zarówno dla
              dzieci jak i dorosłych. Jej misją jest zapewnienie wysokiej
              jakości edukacji językowej, która umożliwia uczniom rozwijanie
              umiejętności komunikacyjnych i osiąganie sukcesów zarówno w życiu
              szkolnym jak i osobistym.
            </p>
            <p className="lead text-end" style={{ textAlign: "right" }}>
              Szkoła zlokalizowana przy ulicy Wielkopolskiej 68 w Gdańsku
              zapewnia indywidualne podejście do ucznia oraz kameralną atmosferę
              sprzyjającą przyswajaniu wiedzy. Duża odpowiedzialność w
              kontekście nauki stoi zarówno po stronie szkoły jak i rodziców,
              dlatego regularny kontakt z Państwem jest jednym z kluczowych
              elementów współpracy.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
