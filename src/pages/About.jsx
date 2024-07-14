import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center component-style"
    >
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto p-4">
            <h1 className="mb-4" style={{ fontFamily: "Montserrat" }}>
              O szkole
            </h1>
            <p className="lead">
              Szkoła InsideOut English Academy to szkoła językowa specjalizująca
              się w nauczaniu języka angielskiego. Oferuje kursy zarówno dla
              dzieci jak i dorosłych. Jej misją jest zapewnienie wysokiej
              jakości edukacji językowej, która umożliwia uczniom rozwijanie
              umiejętności komunikacyjnych i osiąganie sukcesów zarówno w życiu
              szkolnym jak i osobistym.
            </p>
            <p className="lead">
              {" "}
              Szkoła zlokalizowana przy ulicy Wielkopolskiej 68 w Gdańsku
              zapewnia indywidualne podejście do ucznia oraz kameralną atmosferę
              sprzyjającą przyswajaniu wiedzy. Duża odpowiedzialność w
              kontekście nauki stoi zarówno po stronie szkoły jak i rodziców,
              dlatego regularny kontakt z Państwem jest jednym z kluczowych
              elementów współpracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
