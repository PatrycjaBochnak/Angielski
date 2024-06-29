import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="p-5 border rounded bg-light">
            <h1 className="text-4xl font-bold text-gray-700 pb-4 border-bottom border-pink-600">
              Contact
            </h1>
            <p className="text-gray-700">
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
      </div>
    </div>
  );
};

export default ContactForm;
