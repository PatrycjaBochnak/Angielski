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
      style={{ height: "87vh" }}
    >
      <h1 className="heading-custom mb-5">Cennik</h1>
      <Row md={10} className="text-center" style={{ width: "50%" }}>
        <p className="lead mb-5">
          W każdej grupie wypada  <span style={{fontWeight: "bold"}}>30 lekcji w semestrze.</span> Podane kwoty to cena za 1 semestr nauki w grupach maksymalnie 8-osobowych. <span style={{fontWeight: "bold"}}>Jest możliwość rozdzielenia danej kwoty na 2 raty.</span>
        </p>
      </Row>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Oferta</th>
                  <th>Dla kogo</th>
                  <th>Cena</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kurs dla dzieci w wieku szkolnym</td>
                  <td>
                    4-6 lat: 2x45min/tydzień (poziom A0) <br />
                    6-12 lat: 2x60min/tydzień (poziomy od A0 do A2)
                  </td>
                  <td>
                    1050 zł <br />
                    1350 zł 
                  </td>
                </tr>
                <tr>
                  <td>Kursy dla młodziezy i dorosłych</td>
                  <td>
                    Angielski ogólny: 2x60min/tydzień (poziomy od A0 do C1)
                  </td>
                  <td>1350 zł</td>
                </tr>
                <tr>
                  <td>Kursy specjalistyczne</td>
                  <td>
                    Przygotowanie do egzaminu ósmoklasisty: 2x60min/tydzień (poziom B1) <br />
                    Przygotowanie do matury podstawowej: 2x90min/tydzień (poziomy B1-B1+) <br />
                    Przygotowanie do matury rozszerzonej: 2x90min/tydzień (poziomy B1+-B2+)
                  </td>
                  <td>
                    1350zł <br /> <br />
                    1950zł <br /><br />
                    1950zł
                  </td>
                </tr>
                <tr>
                  <td>Zajęcia indywidualne</td>
                  <td>Angielski ogólny: indywidualna liczba zajęć (poziomy od A0 do C1)</td>
                  <td>110zł/ 60min (minimum 1 lekcja tygodniowo)</td>
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
