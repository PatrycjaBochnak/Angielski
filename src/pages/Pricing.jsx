import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const Pricing = () => {
  return (
    <div
      name="pricing"
      className="d-flex flex-column justify-content-center align-items-center component-style"
      style={{ minHeight: "87vh", padding: "20px", textAlign: "center"}}
    >
      <h1 className="heading-custom mb-5">Cennik</h1>
      <Row className="text-center mb-5">
        <p className="lead">
          W każdej grupie wypada{" "}
          <span style={{ fontWeight: "bold" }}>30 lekcji w semestrze.</span>{" "}
          Podane kwoty to cena za 1 semestr nauki w grupach maksymalnie
          8-osobowych.{" "}
          <span style={{ fontWeight: "bold" }}>
            Jest możliwość rozdzielenia danej kwoty na 2 raty.
          </span>
        </p>
      </Row>
      <Container className="d-flex justify-content-center">
        <Row className="justify-content-center">
          <Col md={12} lg={10}>
            <Table striped bordered hover className="table">
              <thead>
                <tr>
                  <th>Oferta</th>
                  <th>Dla kogo</th>
                  <th>Cena</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Oferta">Kurs dla dzieci w wieku szkolnym</td>
                  <td
                    data-label="Dla kogo"
                    style={{ whiteSpace: "normal", overflow: "hidden" }}
                  >
                    4-6 lat: 2x45min/tyg (poziom A0) <br />
                    6-12 lat: 2x60min/tyg (poziomy od A0 do A2)
                  </td>
                  <td data-label="Cena">
                    1050 zł <br />
                    1350 zł
                  </td>
                </tr>
                <tr>
                  <td data-label="Oferta">Kursy dla młodziezy i dorosłych</td>
                  <td data-label="Dla kogo"
                   style={{ whiteSpace: "normal", overflow: "hidden" }}>
                    Angielski ogólny: 2x60min/tyg (poziomy od A0 do C1)
                  </td>
                  <td data-label="Cena">1350 zł</td>
                </tr>
                <tr>
                  <td data-label="Oferta">Kursy specjalistyczne</td>
                  <td data-label="Dla kogo"
                   style={{ whiteSpace: "normal", overflow: "hidden" }}>
                    Przygotowanie do egzaminu ósmoklasisty: 2x60min/tyg
                    (poziom B1) <br />
                    Przygotowanie do matury podstawowej: 2x90min/tyg
                    (poziomy B1-B1+) <br />
                    Przygotowanie do matury rozszerzonej: 2x90min/tyg
                    (poziomy B1+-B2+)
                  </td>
                  <td data-label="Cena">
                    1350 zł <br /> <br />
                    1950 zł <br />
                    <br />
                    1950 zł
                  </td>
                </tr>
                <tr>
                  <td data-label="Oferta">Zajęcia indywidualne</td>
                  <td data-label="Dla kogo"
                   style={{ whiteSpace: "normal", overflow: "hidden" }}>
                    Angielski ogólny: indywidualna liczba zajęć (poziomy od A0
                    do C1)
                  </td>
                  <td data-label="Cena">
                    110 zł/ 60min (minimum 1 lekcja tygodniowo)
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
