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
      className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center p-4 component-style"
    >
      <Container>
        <h1 style={{ fontFamily: "Montserrat" }}>O mnie</h1>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="lead">
              Mam na imię Aleksandra i jestem absolwentką Filologii Angielskiej z
              tytułem magistra. Nauczać zaczęłam już podczas studiów licencjackich.
              Wtedy nie zdawałam sobie sprawy, że będę się spełniać w tym zawodzie i
              doskonalić.
            </p>
            <p className="lead">
              Najwięcej doświadczenia zdobyłam pracując w renomowanej szkole
              językowej w Lublinie, gdzie pod moimi skrzydłami jednocześnie uczyło
              się 90 dzieci. Ponadto przez cały ten czas udzielałam korepetycji
              osobom w różnym wieku, od dzieci po dorosłych. To wtedy wypracowałam
              takie metody, które pozwoliły mi dotrzeć do każdego z uczniów.
              Osiągali oni wyniki maksymalne na miarę swoich możliwości. W tym roku
              mija 6 lat odkąd poprowadziłam pierwsze zajęcia.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img src={image0} alt="image" className="image-welcome" style={{ width: "100%", maxWidth: "500px" }}/>
          </Col>
        </Row>
        <div className="py-4 d-flex welcome-custom">
          <div className="welcome-custom-btn">
            <NavButtons source="offer" linkName="Sprawdź ofertę" />
          </div>
          <div className="welcome-custom-btn">
            <NavButtons source="pricing" linkName="Sprawdź cennik" />
          </div>
          <div className="welcome-custom-btn">
            <NavButtons source="contact" linkName="Skontaktuj się" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
