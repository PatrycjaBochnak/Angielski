import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "../components/ContactForm";
import * as Icons from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div
      name="contact"
      className="vh-98 bg-light d-flex flex-column justify-content-center align-items-center component-style"
    >
      <h1 style={{ fontFamily: "Montserrat" }}>Kontakt</h1>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 lead">
            Zostaw wiadomość wypełniając formularz kontaktowy po prawej stronie
            lub wybierz formę kontaktu z dostępnych poniżej.
            <div className="d-flex flex-column mt-5">
              <p className="fw-bold">Kontakt</p>
              <p>
                {" "}
                <Icons.TelephoneFill /> +48 727-938-163
              </p>{" "}
              <p>
                {" "}
                <Icons.EnvelopeArrowUpFill /> biuro@insideout.pl
              </p>
              <p className="fw-bold">InsideOut Sp. z.o.o.</p>{" "}
              <p>
                {" "}
                <Icons.GeoAltFill /> ul. Wielkopolska 68 lokal U5
              </p>{" "}
              <p>80-180 Gdańsk</p>
            </div>
          </div>
          <div className="col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
