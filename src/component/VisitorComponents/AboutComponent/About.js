import "./About.css";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import { useContext } from "react";

function About() {
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
            About Us
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">About</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Shop Detail Start */}
      <div
        className={`container-fluid overflow-hidden px-lg-0 ${
          theme == "dark" ? "bg-dark" : "bg-light"
        }`}
      >
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0" style={{ "min-height": "400px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="./assets/img/banner5.jpg"
                  style={{ "object-fit": "cover" }}
                  alt=""
                />
              </div>
            </div>
            <div
              className={`col-lg-6 about-text py-5 wow fadeIn ${
                theme == "dark" ? "bg-dark" : "bg-light"
              }`}
            >
              <div className="p-lg-5 pe-lg-0">
                <div className="text-start">
                  <h1
                    className={`display-5 mb-4 ${
                      theme == "dark" ? "text-light" : "text-dark"
                    }`}
                  >
                    About Us
                  </h1>
                </div>
                <p
                  className={`mb-4 pb-2 ${
                    theme == "dark" ? "text-light" : "text-dark"
                  }`}
                >
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo erat amet
                </p>
                <div className="row g-4 mb-4 pb-2">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center">
                      <div
                        className={`d-flex flex-shrink-0 align-items-center justify-content-center ${
                          theme == "dark" ? "bg-dark" : "bg-light"
                        }`}
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i
                          className={`fa fa-users fa-2x text-primary ${
                            theme == "dark" ? "bg-dark" : "bg-light"
                          }`}
                        ></i>
                      </div>
                      <div className="ms-3">
                        <h2
                          className={`text-primary mb-1`}
                          data-toggle="counter-up"
                        >
                          1234
                        </h2>
                        <p
                          className={`fw-medium mb-0 ${
                            theme == "dark" ? "text-light" : "text-dark"
                          }`}
                        >
                          Happy Clients
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex align-items-center">
                      <div
                        className={`d-flex flex-shrink-0 align-items-center justify-content-center ${
                          theme == "dark" ? "bg-dark" : "bg-light"
                        }`}
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i
                          className={`fa fa-users fa-2x text-primary ${
                            theme == "dark" ? "bg-dark" : "bg-light"
                          }`}
                        ></i>
                      </div>
                      <div className="ms-3">
                        <h2
                          className="text-primary mb-1"
                          data-toggle="counter-up"
                        >
                          1234
                        </h2>
                        <p
                          className={`fw-medium mb-0 ${
                            theme == "dark" ? "text-light" : "text-dark"
                          }`}
                        >
                          Projects Done
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="/"
                  className="btn btn-primary font-bold py-3 px-5 rounded-lg"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
