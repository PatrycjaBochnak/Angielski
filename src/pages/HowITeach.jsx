import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image3 from "../asstes/photos/image3.jpeg";

const HowITeach = () => {
  return (
    <div
      name="how-i-teach"
      className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center component-style"
    >
      <Container className="text-start">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 style={{ fontFamily: "Montserrat", marginBottom: "1.5rem" }}>
              Jak uczymy?
            </h1>
            <p className="lead">
              InsideOut oferuje zajęcia grupowe oraz indywidualne dostosowane do
              potrzeb oraz poziomu zaawansowania każdego ucznia. Bazuje na metodzie
              TPR (Total Physical Response), która łączy ruch fizyczny z nauką
              języka, co przyspiesza i ułatwia proces przyswajania nowych słówek i
              struktur gramatycznych. Wszystkie zajęcia odbywają się w małych
              grupach, co pozwala na indywidualne podejście do każdego ucznia i
              maksymalne wykorzystanie czasu specjalnego na nauce. Komunikacja
              podczas zajęć odbywa się w języku angielskim.
            </p>
            <p className="lead">
              InsideOut kładzie duży nacisk na komfort uczniów, dlatego nauczanie
              odbywa się bez presji i pośpiechu, a program nauczania jest
              dostosowany do możliwości i potrzeb uczniów. Szkoła dba o to, aby
              każdy czuł się swobodnie i mógł rozwijać swoje umiejętności w
              odpowiednim dla siebie tempie.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img
              src={image3}
              alt="image"
              className="image-welcome"
              style={{ width: "100%", maxWidth: "450px", borderRadius: "10px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowITeach;
