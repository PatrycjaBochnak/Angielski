import React, { useEffect } from "react";

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      name="reviews"
      className="d-flex flex-column justify-content-center align-items-center component-style"
    >
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto p-4">
            <h1 className="heading-custom">Tak o nas mówią</h1>
            <div
              className="elfsight-app-5d61179c-11d8-4fb5-a6c4-653ca21eacd1"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
