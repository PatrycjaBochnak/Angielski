import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-100 bg-dark text-white p-3">
      <div className="d-flex justify-content-between"
      style={{fontSize: "17px"}}>
        <div className="copyright ms-5">
          &copy; {currentYear} InsideOut Aleksandra Wasiluk Sp. z.o.o.
          All rights reserved.
        </div>
        <div className="projekt me-5">
          Projekt i wykonanie: Patrycja Bochnak
        </div>
      </div>
    </footer>
  );
};

export default Footer;
