import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../asstes/photos/image1.jpeg";

const About = () => {
  return (
    <div
      name="about"
      className="d-flex flex-column justify-content-center component-style"
      style={{height: "87vh"}}
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img
              src={image1}
              alt="image1"
              className="image-welcome"
              style={{ width: "100%", maxWidth: "450px", borderRadius: "10px" }}
            />
          </Col>
          <Col xs={12} md={6}>
            <h1
              className="heading-custom"
              style={{textAlign: "right"}}
            >
              O szkole
            </h1>
            <p className="lead text-end" style={{ textAlign: "right" }}>
            <span style={{fontWeight: "bold"}}>Szkoła InsideOut English Academy to szkoła językowa specjalizująca
              się w nauczaniu języka angielskiego.</span> Oferuje kursy zarówno dla
              dzieci jak i dorosłych. Jej misją jest zapewnienie wysokiej
              jakości edukacji językowej, która umożliwia uczniom rozwijanie
              umiejętności komunikacyjnych i osiąganie sukcesów zarówno w życiu
              szkolnym jak i osobistym.
            </p>
            <p className="lead text-end" style={{ textAlign: "right" }}>
            <span style={{fontWeight: "bold"}}>Szkoła zlokalizowana przy ulicy Wielkopolskiej 68 w Gdańsku </span>
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
