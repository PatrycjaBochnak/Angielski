import React from "react";

const HowITeach = () => {
  return (
    <div
      name="how-i-teach"
      className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center component-style"
    >
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto p-4">
            <h1 className="mb-4" style={{ fontFamily: "Montserrat" }}>
              Jak uczymy?
            </h1>
            <p className="lead">
              InsideOut oferuje zajęcia grupowe oraz indywidualne dostosowane do
              potrzeb oraz poziomu zaawansowania każdego ucznia. Bazuje na
              metodzie TPR (Total Physical Response), która łączy ruch fizyczny
              z nauką języka, co przyspiesza i ułatwia proces przyswajania
              nowych słówek i struktur gramatycznych. Wszystkie zajęcia odbywają
              się w małych grupach, co pozwala na indywidualne podejście do
              każdego ucznia i maksymalne wykorzystanie czasu specjalnego na
              nauce. Komunikacja podczas zajęć odbywa się w języku angielskim.
            </p>
            <p className="lead">
              InsideOut kładzie duży nacisk na komfort uczniów, dlatego
              nauczanie odbywa się bez presji i pośpiechu, a program nauczania
              jest dostosowany do możliwości i potrzeb uczniów. Szkoła dba o to,
              aby każdy czuł się swobodnie i mógł rozwijać swoje umiejętności w
              odpowiednim dla siebie tempie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowITeach;
