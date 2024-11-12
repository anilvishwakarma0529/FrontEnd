import "./Service.css";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import { useContext } from "react";

function Service() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* Page Header Start */}
      <div
        className={`container-fluid ${
          theme == "dark" ? "bg-dark" : "bg-secondary"
        } mb-5`}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ "min-height": "150px" }}
        >
          <h1
            className={`font-weight-semi-bold text-uppercase mb-3 ${
              theme == "dark" ? "text-light" : "text-dark"
            }`}
          >
            Service
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Services</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Shop Start */}
      <div
        className={`container-xxl py-5 ${
          theme === "dark" ? "bg-dark" : "bg-light"
        }`}
      >
        <div className="container">
          <div
            className={`text-center ${
              theme === "dark" ? "text-light" : "text-dark"
            }`}
          >
            <h1
              className={`display-5 mb-5 ${
                theme === "dark" ? "text-light" : "text-dark"
              }`}
            >
              Our Services
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="./assets/img/service1.jpg"
                    alt=""
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="p-4 text-center border-top-0">
                  <h4
                    className={`mb-3 ${
                      theme === "dark" ? "text-light" : "text-dark"
                    }`}
                  >
                    Auction by value
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-light" : "text-dark"
                    }`}
                  >
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam.
                  </p>
                  <a className="fw-medium" href="/">
                    Read More <i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="./assets/img/service4.jpg"
                    alt=""
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="p-4 text-center border-top-0">
                  <h4
                    className={`mb-3 ${
                      theme === "dark" ? "text-light" : "text-dark"
                    }`}
                  >
                    Auction by Category
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-light" : "text-dark"
                    }`}
                  >
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam.
                  </p>
                  <a className="fw-medium" href="/">
                    Read More <i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="./assets/img/service3.jpg"
                    alt=""
                    style={{ height: "300px" }}
                  />
                </div>
                <div className="p-4 text-center border-top-0">
                  <h4
                    className={`mb-3 ${
                      theme === "dark" ? "text-light" : "text-dark"
                    }`}
                  >
                    24/7 Customer service
                  </h4>
                  <p
                    className={`${
                      theme === "dark" ? "text-light" : "text-dark"
                    }`}
                  >
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam.
                  </p>
                  <a className="fw-medium" href="/">
                    Read More <i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
