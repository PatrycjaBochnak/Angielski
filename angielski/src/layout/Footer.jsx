import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-100 bg-dark text-white text-center py-3 mt-auto ">
      <div className="container">
        <div className="copyright">
          &copy; {currentYear} Szkoła językowa Elefoncik. Aleksandra Wasiluk.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
