import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  return (
      <div className="row justify-content-center">
          <div className="p-3 border rounded bg-light">
            <p className="text-gray-700 lead">
              Feel free to submit the form below or reach out via email -{" "}
              <span className="font-weight-bold">test@test.com</span>
            </p>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Message"
                name="message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary px-4 py-3 mt-3">
              Send message
            </button>
          </div>
        </div>
  );
};

export default ContactForm;
