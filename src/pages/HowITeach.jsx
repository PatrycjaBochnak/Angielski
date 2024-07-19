import React from "react";
import Container from "react-bootstrap/Container";

const HowITeach = () => {
  return (
    <div
      name="how-i-teach"
      className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center component-style"
    >
      <Container className="text-start">
        <h1 style={{ fontFamily: "Montserrat", marginBottom: "1.5rem" }}>
          Jak uczymy?
        </h1>
        <p className="lead" style={{ width: "50%" }}>
          InsideOut oferuje zajęcia grupowe oraz indywidualne dostosowane do
          potrzeb oraz poziomu zaawansowania każdego ucznia. Bazuje na metodzie
          TPR (Total Physical Response), która łączy ruch fizyczny z nauką
          języka, co przyspiesza i ułatwia proces przyswajania nowych słówek i
          struktur gramatycznych. Wszystkie zajęcia odbywają się w małych
          grupach, co pozwala na indywidualne podejście do każdego ucznia i
          maksymalne wykorzystanie czasu specjalnego na nauce. Komunikacja
          podczas zajęć odbywa się w języku angielskim.
        </p>
        <p className="lead" style={{ width: "50%" }}>
          InsideOut kładzie duży nacisk na komfort uczniów, dlatego nauczanie
          odbywa się bez presji i pośpiechu, a program nauczania jest
          dostosowany do możliwości i potrzeb uczniów. Szkoła dba o to, aby
          każdy czuł się swobodnie i mógł rozwijać swoje umiejętności w
          odpowiednim dla siebie tempie.
        </p>
      </Container>
    </div>
  );
};

export default HowITeach;
