import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Pricing = () => {
  return (
    <div
      name="pricing"
      className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center component-style"
    >
      <h1 style={{ fontFamily: "Montserrat" }}>Cennik</h1>
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="mb-2 px-2 d-flex justify-content-center">
            <div className="pricing-rectangle">
              <span className="default-text">
                KURS DLA DZIECI W WIEKU SZKOLNYM
              </span>
              <span className="hover-text">
                6-12 lat: 2x60min/tydzień (poziomy od A0 do A2)
              </span>
            </div>
          </Col>
          <Col md={4} className="mb-4 d-flex justify-content-center">
            <div className="pricing-rectangle">
              <span className="default-text">
                KURSY DLA MLODZIEZY I DOROSŁYCH
              </span>
              <span className="hover-text">
                Angielski ogólny: 2x60min/tydzień (poziomy od A0 do C1)
              </span>
            </div>
          </Col>
          <Col md={10} className="mb-4 d-flex justify-content-center">
            <div className="pricing-rectangle">
              <span className="default-text">KURSY SPECJALISTYCZNE</span>
              <span className="hover-text">
                Przygotowanie do egzaminu ósmoklasisty: 2x60min/tydzień (poziom
                B1) 1350zł Przygotowanie do matury podstawowej: 2x90min/tydzień
                (poziomy B1-B1+) 1950zł Przygotowanie do matury rozszerzonej:
                2x90min/tydzień (poziomy B1+-B2+) 1950zł Zajęcia indywidualne:
                indywidualna liczba zajęć 110zł/60min (minimum 1 lekcja
                tygodniowo)
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
