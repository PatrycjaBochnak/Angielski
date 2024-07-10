import React from "react";
import Container from "react-bootstrap/Container";
import NavButtons from "../components/NavButtons";

const Welcome = () => {
  return (
    <div
      name="start"
      className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center p-4 component-style"
    >
      <Container>
        <h1 className="mb-4" style={{fontFamily:"Montserrat"}}>Hej! Poznajcie nas.</h1>
        <p className="lead" style={{width:"50%"}}>
              Szkoła InsideOut English Academy to szkoła językowa specjalizująca
              się w nauczaniu języka angielskiego. Oferuje kursy zarówno dla
              dzieci jak i dorosłych. Jej misją jest zapewnienie wysokiej
              jakości edukacji językowej, która umożliwia uczniom rozwijanie
              umiejętności komunikacyjnych i osiąganie sukcesów zarówno w życiu
              szkolnym jak i osobistym.
            </p>
            <p className="lead" style={{width:"50%"}}>
              Szkoła zlokalizowana przy ulicy Wielkopolskiej 68 Gdańsku zapewnia
              indywidualne podejście do ucznia oraz kameralną atmosferę
              sprzyjającą nauce.
            </p>
        <div className="py-4">
        <NavButtons source="offer" linkName="Sprawdź ofertę" />
        <NavButtons source="pricing" linkName="Sprawdź cennik" />
        <NavButtons source="contact" linkName="Skontaktuj się z nami" />
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
