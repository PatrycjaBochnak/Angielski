import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Offer = () => {
  return (
    <div
      name="offer"
      className="d-flex flex-column justify-content-center align-items-center component-style"
      style={{ height: "87vh" }}
    >
      <h1 className="heading-custom">Oferta</h1>
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4 d-flex justify-content-center">
            <div className="rectangle">
              <span className="default-text">
                KURSY DLA DZIECI W WIEKU PONIZEJ 6 LAT
              </span>
              <span className="hover-text">
                Jest to kurs dla maluchów dzięki któremu zaznajomią się z
                podstawowymi słówkami. Nauka opiera się na zabawie, reagowaniu,
                powtarzaniu i naśladowaniu. Wszystko o odbywa się w przyjaznej
                atmosferze, często w akompaniamencie prostych piosenek i
                rymowanek w języku angielskim. Stopniowo wprowadzane jest też
                tzw. czytanie globalne.
              </span>
            </div>
          </Col>
          <Col md={4} className="mb-4 d-flex justify-content-center">
            <div className="rectangle">
              <span className="default-text">
                KURS DLA DZIECI W WIEKU SZKOLNYM
              </span>
              <span className="hover-text">
                Dzieci przypisywane są do grup poziomowych na podstawie rozmowy
                z lektorem oraz krótkiego testu pisemnego. Na każdych zajęciach
                występuje co najmniej jedna forma zabawy, ale ćwiczone jest
                również pisanie i czytanie w języku angielskim. Duży nacisk
                kładziemy na mówienie, a więc zadaniem które pojawia się na
                każdej lekcji jest przeprowadzanie dialogów tematycznych w
                parach lub grupach. Oprócz tego dzieci ćwiczą osłuchiwanie się z
                językiem angielskim za pomocą piosenek, rymowanek i nagrań z
                książki.
              </span>
            </div>
          </Col>
          <Col md={4} className="mb-4 d-flex justify-content-center">
            <div className="rectangle">
              <span className="default-text">KURS DLA MŁODZIEZY</span>
              <span className="hover-text">
                Młodzież przypisywana jest do grup poziomowych na podstawie
                rozmowy z lektorem oraz krótkiego testu pisemnego. Podczas pracy
                z młodzieżą skupiamy się na mówieniu, a więc podobnie jak w
                grupach dziecięcych, na każdej lekcji pojawia się co najmniej
                jedno zadanie ćwiczące tę umiejętność. Zajmuje około 20% zajęć
                niezależnie od poziomu grupy. Pozostały czas zajęć, na który
                składa się słownictwo, gramatyka, słuchanie i pisanie,
                dopasowujemy do potrzeb uczniów. Oznacza to, że niekiedy nauce
                np. gramatyki lektor może poświęcić nawet 40% lekcji.{" "}
              </span>
            </div>
          </Col>
          <Col md={4} className="mb-4 d-flex justify-content-center">
            <div className="rectangle">
              <span className="default-text">
                KURSY PRZYGOTOWUJĄCE DO EGZAMINÓW
              </span>
              <span className="hover-text">
                Kurs przygotowujący do egzaminu ósmoklasisty i ten
                przygotowujący do matury mają podobną strukturę. W przypadku
                matury z języka angielskiego oferujemy przygotowanie do poziomu
                podstawowego i rozszerzonego. Skupiamy się na przerabianiu zadań
                typowo egzaminacyjnych, szczególną uwagę przywiązując do tych,
                które sprawiają uczniom największą trudność. Na około 2 miesiące
                przed egzaminem ćwiczymy arkusze egzaminacyjne. Część pisemna
                egzaminu stanowi prace domową, która jest sprawdzana i
                weryfikowana na następnej lekcji.{" "}
              </span>
            </div>
          </Col>
          <Col md={4} className="mb-4 d-flex justify-content-center">
            <div className="rectangle">
              <span className="default-text">KURS DLA DOROSŁYCH</span>
              <span className="hover-text">
                Osoby dorosłe przypisujemy do konkretnego poziomu po rozmowie z
                lektorem. Zajęcia dla dorosłych mają podobną strukturę jak te
                dla młodzieży. Ćwiczymy mówienie, pisanie, słuchanie, gramatykę
                i czytanie.*{" "}
              </span>
              <p className="hover-text">*nie dotyczy zajęć konwersacyjnych</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Offer;
