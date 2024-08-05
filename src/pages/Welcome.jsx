import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavButtons from "../components/NavButtons";
import image0 from "../asstes/photos/image0.jpeg";

const Welcome = () => {
  return (
    <div
      name="start"
      className="d-flex flex-column justify-content-center component-style"
      style={{ marginTop: "115px", height: "87vh" }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="heading-custom">O mnie</h1>
            <p className="lead">
              <span style={{ fontWeight: "bold" }}>
                Mam na imię Aleksandra i jestem absolwentką Filologii
                Angielskiej z tytułem magistra.{" "}
              </span>
              Nauczać zaczęłam już podczas studiów licencjackich. Wtedy nie
              zdawałam sobie sprawy, że będę spełniać się w tym zawodzie i
              doskonalić.
            </p>
            <p className="lead">
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Najwięcej doświadczenia zdobyłam pracując w renomowanej szkole
                językowej w Lublinie, gdzie pod moimi skrzydłami jednocześnie
                uczyło się 90 dzieci.{" "}
              </span>
              Ponadto przez cały ten czas udzielałam korepetycji osobom w różnym
              wieku, od dzieci po dorosłych. To wtedy wypracowałam takie metody,
              które pozwoliły mi dotrzeć do każdego z uczniów. Osiągali oni
              wyniki maksymalne na miarę swoich możliwości. W tym roku mija 6
              lat odkąd poprowadziłam pierwsze zajęcia.
            </p>
            <div className="py-4 d-flex flex-column flex-md-row welcome-custom">
              <div className="welcome-custom-btn mb-3 mb-md-0">
                <NavButtons source="offer" linkName="Sprawdź ofertę" />
              </div>
              <div className="welcome-custom-btn mb-3 mb-md-0">
                <NavButtons source="pricing" linkName="Sprawdź cennik" />
              </div>
              <div className="welcome-custom-btn">
                <NavButtons source="contact" linkName="Skontaktuj się" />
              </div>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img
              src={image0}
              alt="image0"
              className="image-welcome"
              style={{ width: "100%", maxWidth: "450px", borderRadius: "10px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;