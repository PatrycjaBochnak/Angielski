import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  return (
    <div className="row justify-content-center">
      <div className="p-3 border rounded bg-light">
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Imię"
            name="name"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Wpisz swój e-mail"
            name="email"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Napisz wiadomość"
            name="message"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary px-4 py-3 mt-3">
          Wyślij
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
