import React from "react";
import Container from "react-bootstrap/Container";
import NavButtons from "../components/NavButtons";

const Welcome = () => {
  const buttonStyle = {
    cursor: 'pointer',
    marginRight: '1em',
    color: 'pink'
  };

  return (
    <div
      name="start"
      className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center p-4 component-style"
    >
      <Container>
        <h1 className="mb-4" style={{ fontFamily: "Montserrat" }}>
          Hej! Jestem Ola.
        </h1>
        <p className="lead" style={{ width: "50%" }}>
          Mam na imię Aleksandra i jestem absolwentką Filologii Angielskiej z
          tytułem magistra. Nauczać zaczęłam już podczas studiów licencjackich.
          Wtedy nie zdawałam sobie sprawy, że będę się spełniać w tym zawodzie i
          doskonalić.
        </p>
        <p className="lead" style={{ width: "50%" }}>
          Najwięcej doświadczenia zdobyłam pracując w renomowanej szkole
          językowej w Lublinie, gdzie pod moimi skrzydłami jednocześnie uczyło
          się 90 dzieci. Ponadto przez cały ten czas udzielałam korepetycji
          osobom w różnym wieku, od dzieci po dorosłych. To wtedy wypracowałam
          takie metody, które pozwoliły mi dotrzeć do każdego z uczniów.
          Osiągali oni wyniki maksymalne na miarę swoich możliwości. W tym roku
          mija 6 lat odkąd poprowadziłam pierwsze zajęcia.
        </p>
        <div className="py-4 d-flex">
          <NavButtons
            source="offer"
            linkName="Sprawdź ofertę"
            style={buttonStyle}
          />
          <NavButtons
            source="pricing"
            linkName="Sprawdź cennik"
            style={buttonStyle}
          />
          <NavButtons
            source="contact"
            linkName="Skontaktuj się"
            style={{ ...buttonStyle, marginRight: 0 }} 
          />
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
