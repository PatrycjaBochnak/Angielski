import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div
      name="contact"
      className="vh-100 bg-light d-flex flex-column justify-content-center align-items-center component-style"
    >
      <h1 style={{ fontFamily: "Montserrat" }}>Kontakt</h1>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="col-lg-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
