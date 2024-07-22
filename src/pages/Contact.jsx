import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "../components/ContactForm";
import * as Icons from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-light d-flex flex-column justify-content-center align-items-center component-style" 
      style={{ minHeight: "80vh", marginTop: "115px" }} 
    >
      <div className="text-center">
        <h1 style={{ fontFamily: "Montserrat" }}>Kontakt</h1>
        <p className="lead text-gray-700" style={{width: "700px"}}>
          Wypełnij formularz kontaktowy by wysłać bezpośrednio do mnie wiadomość lub skontaktuj się ze mną za pomocą maila - {" "}
          <span className="font-weight-bold">biuro@szkolainsideout.pl</span>
        </p>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <div className="d-flex flex-column" style={{fontSize: "20px"}}>
              <p className="fw-bold" style={{fontSize: "30px"}}>Kontakt</p>
              <p>
                {" "}
                <Icons.TelephoneFill /> +48 727-938-163
              </p>
              <p>
                {" "}
                <Icons.EnvelopeArrowUpFill /> biuro@insideout.pl
              </p>
              <p className="fw-bold" style={{fontSize: "30px"}}>InsideOut Sp. z o.o.</p>
              <p>
                {" "}
                <Icons.GeoAltFill /> ul. Wielkopolska 68 lokal U5
              </p>
              <p style={{marginLeft: "25px"}}>80-180 Gdańsk</p>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <form
              method="POST"
              action="https://getform.io/f/agdylwrb"
              className="max-w-[600px] w-full"
            >
              <ContactForm />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
