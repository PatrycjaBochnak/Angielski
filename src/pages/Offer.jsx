import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dorosli from "../asstes/photos/dorosli.jpg";
import mlodziez from "../asstes/photos/mlodziez.jpg";
import egzaminy from "../asstes/photos/egzaminy.jpg";
import dzieciPonizej6Lat from "../asstes/photos/dzieciPonizej6Lat.jpg";
import dzieciWiekSzkolny from "../asstes/photos/dzieciWiekSzkolny.jpg";

const courses = [
  {
    title: "KURS DLA DZIECI W WIEKU PONIŻEJ 6 LAT",
    text: "Jest to kurs dla maluchów, który opiera się na zabawie, reagowaniu, powtarzaniu i naśladowaniu, a więc za pomocą metody TPR. Wszystko to odbywa się w przyjaznej atmosferze, zwykle w akompaniamencie prostych piosenek i rymowanek w języku angielskim. Stopniowo wprowadzane jest czytanie globalne.",
    image: dzieciPonizej6Lat,
  },
  {
    title: "KURS DLA DZIECI W WIEKU SZKOLNYM",
    text: "Na każdych zajęciach występuje co najmniej jedna forma zabawy, ale ćwiczone jest również pisanie i czytanie w języku angielskim. Duży nacisk kładziemy na mówienie, a więc zadaniem które pojawia się na każdej lekcji jest przeprowadzanie dialogów tematycznych w parach lub grupach. Oprócz tego dzieci ćwiczą osłuchiwanie się z językiem angielskim za pomocą piosenek, rymowanek i nagrań.",
    image: dzieciWiekSzkolny,
  },
  {
    title: "KURS DLA MŁODZIEŻY",
    text: "Podczas pracy z młodzieżą skupiamy się na mówieniu, a więc podobnie jak w grupach dziecięcych, na każdej lekcji  pojawia się co najmniej jedno zadanie ćwiczące tę umiejętność. Zajmuje około 20% zajęć niezależnie od poziomu grupy. Pozostały czas zajęć, na który składa się słownictwo, gramatyka, słuchanie i pisanie, dopasowujemy do potrzeb uczniów. Oznacza to, że niekiedy nauce np. gramatyki lektor może poświęcić nawet 40% lekcji.",
    image: mlodziez,
  },
  {
    title: "KURSY PRZYGOTOWUJĄCE DO EGZAMINÓW",
    text: "Kurs przygotowujący do egzaminu ósmoklasisty i ten przygotowujący do matury mają podobną strukturę. W przypadku matury z języka angielskiego oferujemy przygotowanie do poziomu podstawowego i rozszerzonego. Skupiamy się na przerabianiu zadań typowo egzaminacyjnych oraz poznawaniu strategii które pozwolą wejść na salę egzaminacyjną bez stresu i uzyskać zadowalający wynik.",
    image: egzaminy,
  },
  {
    title: "KURS DLA DOROSŁYCH",
    text: "Zajęcia te mają podobną strukturę jak te dla młodzieży, ale z planem nauczania zadedykowanym osobom dorosłym. Pojawiają się tematy „na czasie”, co sprawia, że każdy kursant może się swobodnie wypowiedzieć, a w konsekwencji bariera językowa szybko idzie w zapomnienie.",
    image: dorosli,
  },
];

const Offer = () => {
  return (
    <div
      name="offer"
      className="d-flex flex-column justify-content-center align-items-center component-style"
      style={{ height: "180vh" }}
    >
      <h1 className="heading-custom mb-5 mt-5">Oferta</h1>
      <Container>
        <Row className="justify-content-center">
          <p className="lead mb-5 text-center" style={{ width: "70%" }}>
            Zajęcia na każdym poziomie zaawansowania{" "}
            <span style={{ fontWeight: "bold" }}>
              odbywają się wyłącznie w języku angielskim
            </span>{" "}
            po to, aby każdy zanurzył się w nim jak tylko jest to możliwe ☺
            Dzieci powyżej 6 lat,
            <span style={{ fontWeight: "bold" }}> młodzież oraz dorośli przypisywani są do grup poziomowych
            </span>{" "}
            na podstawie rozmowy z lektorem i/lub krótkiego testu pisemnego.
          </p>
          {courses.map((course, index) => (
            <Col
              key={index}
              md={4}
              className="mb-4 d-flex justify-content-center"
            >
              <div className="rectangle">
                <img src={course.image} alt={course.title} />
                <span className="title-text">{course.title}</span>
                <div className="hover-text">{course.text}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Offer;