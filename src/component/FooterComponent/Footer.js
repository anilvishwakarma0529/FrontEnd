import { Link } from "react-router-dom";
import "./Footer.css";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeComponent/ThemeContext";

function Footer() {
  const [FooterComponent, setFooterComponent] = useState();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (localStorage.getItem("token") != undefined) {
      setFooterComponent(<></>);
    } else {
      setFooterComponent(
        <>
          {/* Footer Start */}
          <div
            className={`container-fluid ${
              theme == "dark" ? "bg-dark text-light" : "bg-secondary text-dark"
            } mt-5 pt-5`}
          >
            <div className="row px-xl-5 pt-5">
              <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <a className="text-decoration-none">
                  <h1
                    className={`mb-4 display-5 font-weight-semi-bold ${
                      theme == "dark" ? "text-light" : "text-dark"
                    }`}
                  >
                    <span className="text-primary font-weight-bold  px-3 mr-1">
                      E
                    </span>
                    Auction
                  </h1>
                </a>
                <p>
                  Dolore erat dolor sit lorem vero amet. Sed sit lorem magna,
                  ipsum no sit erat lorem et magna ipsum dolore amet erat.
                </p>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt text-primary mr-3"></i>61
                  Street, Indore, India
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope text-primary mr-3"></i>
                  info@example.com
                </p>
                <p className="mb-0">
                  <i className="fa fa-phone-alt text-primary mr-3"></i>xxx xxx
                  xxxx
                </p>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-md-4 mb-5"></div>
                  <div className="col-md-4 mb-5">
                    <h5
                      className={`font-weight-bold ${
                        theme == "dark" ? "text-light" : "text-dark"
                      } mb-4`}
                    >
                      Quick Links
                    </h5>
                    <div className="d-flex flex-column justify-content-start">
                      <Link
                        className={`${
                          theme == "dark" ? "text-light" : "text-dark"
                        } mb-2`}
                        to="/"
                      >
                        <i className="fa fa-angle-right mr-2"></i>Home
                      </Link>
                      <Link
                        className={`${
                          theme == "dark" ? "text-light" : "text-dark"
                        } mb-2`}
                        to="/service"
                      >
                        <i className="fa fa-angle-right mr-2"></i>Service
                      </Link>
                      <Link
                        className={`${
                          theme == "dark" ? "text-light" : "text-dark"
                        } mb-2`}
                        to="/about"
                      >
                        <i className="fa fa-angle-right mr-2"></i>About
                      </Link>
                      <Link
                        className={`${
                          theme == "dark" ? "text-light" : "text-dark"
                        } mb-2`}
                        to="/login"
                      >
                        <i className="fa fa-angle-right mr-2"></i>Login
                      </Link>
                      <Link
                        className={`${
                          theme == "dark" ? "text-light" : "text-dark"
                        } mb-2`}
                        to="/register"
                      >
                        <i className="fa fa-angle-right mr-2"></i>Register
                      </Link>
                      <Link
                        className={`${
                          theme == "dark" ? "text-light" : "text-dark"
                        } mb-2`}
                        to="/contact"
                      >
                        <i className="fa fa-angle-right mr-2"></i>Contact Us
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4 mb-5">
                    <h5
                      className={`font-weight-bold ${
                        theme == "dark" ? "text-light" : "text-dark"
                      } mb-4`}
                    >
                      Newsletter
                    </h5>
                    <form action="">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control border-0 py-4"
                          placeholder="Your Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control border-0 py-4"
                          placeholder="Your Email"
                          required="required"
                        />
                      </div>
                      <div>
                        <button
                          className="btn btn-primary btn-block border-0 py-3"
                          type="submit"
                        >
                          Subscribe Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  });

  return (
    <>
      {FooterComponent}

      <div
        className={`container-fluid ${
          theme == "dark" ? "bg-dark text-light" : "bg-secondary text-dark"
        }`}
      >
        <div className="row border-top border-light mx-xl-5 py-4">
          <div className="col-md-6 px-xl-0">
            <p
              className={`mb-md-0 text-center text-md-left ${
                theme == "dark" ? "text-light" : "text-dark"
              }`}
            >
              &copy;
              <a
                className={`font-weight-semi-bold ${
                  theme == "dark" ? "text-light" : "text-dark"
                }`}
                href="#"
              >
                E Auction
              </a>
              . All Rights Reserved. Designed by &nbsp;
              <a
                className={`font-weight-semi-bold ${
                  theme == "dark" ? "text-light" : "text-dark"
                }`}
                href="https://htmlcodex.com"
              >
                Adarsh Kumar Dwivedi
              </a>
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img className="img-fluid" src="./assets/img/payments.png" alt="" />
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}

export default Footer;
