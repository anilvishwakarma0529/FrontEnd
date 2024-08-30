import Authentication from "../AuthenticationComponent/Authentication";
import { ThemeContext } from "../ThemeComponent/ThemeContext";
import "./Header.css";
import { useState, useEffect, useContext } from "react";

function Header() {
  const [HeaderComponent, setHeaderComponent] = useState();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (
      localStorage.getItem("token") != undefined &&
      localStorage.getItem("role") == "admin"
    ) {
      setHeaderComponent(
        <>
          {/* Topbar Start */}
          <div
            className={`container-fluid ${
              theme == "dark" ? "bg-dark" : "bg-secondary"
            }`}
          >
            <div className="row align-items-center pl-xl-5">
              <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center">
                  <a className="" href="">
                    FAQs
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="" href="">
                    Help
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="" href="">
                    Support
                  </a>
                </div>
              </div>

              <div class="col-lg-6 text-center text-lg-right">
                <div class="position-relative d-inline-flex align-items-center bg-primary text-dark top-shape px-5">
                  <div class="me-3 pe-3 border-end py-2 pr-5">
                    <p class="m-0">
                      <i class="fa fa-user me-2"></i>&nbsp;Welcome{" "}
                      {localStorage.getItem("name")}
                    </p>
                  </div>
                  <div class="py-2">
                    <p class="m-0">
                      <i class="fa fa-envelope-open me-2"></i>&nbsp;
                      {localStorage.getItem("email")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Topbar End */}
        </>
      );
    } else if (
      localStorage.getItem("token") != undefined &&
      localStorage.getItem("role") == "user"
    ) {
      setHeaderComponent(
        <>
          {/* Topbar Start */}
          <div
            className={`container-fluid ${
              theme == "dark" ? "bg-dark" : "bg-secondary"
            }`}
          >
            <div className="row align-items-center pl-xl-5">
              <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center">
                  <a className="" href="">
                    FAQs
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="" href="">
                    Help
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="" href="">
                    Support
                  </a>
                </div>
              </div>

              <div class="col-lg-6 text-center text-lg-right">
                <div class="position-relative d-inline-flex align-items-center bg-primary text-dark top-shape px-5">
                  <div class="me-3 pe-3 border-end py-2 pr-5">
                    <p class="m-0">
                      <i class="fa fa-user me-2"></i>&nbsp;Welcome{" "}
                      {localStorage.getItem("name")}
                    </p>
                  </div>
                  <div class="py-2">
                    <p class="m-0">
                      <i class="fa fa-envelope-open me-2"></i>&nbsp;
                      {localStorage.getItem("email")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Topbar End */}
        </>
      );
    } else {
      setHeaderComponent(
        <>
          {/* Topbar Start */}
          <div
            className={`container-fluid ${
              theme == "dark" ? "bg-dark" : "bg-secondary"
            }`}
          >
            <div className={`row align-items-center pl-xl-5`}>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center">
                  <a className="" href="">
                    FAQs
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="" href="">
                    Help
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="" href="">
                    Support
                  </a>
                </div>
              </div>

              <div className="col-lg-6 text-center text-sm-right">
                <div className="position-relative d-inline-flex align-items-center bg-primary text-dark top-shape px-5">
                  <div className="me-3 pe-3 border-end py-2 pr-5">
                    <p className="m-0">
                      <i className="fa fa-envelope-open me-2"></i>
                      &nbsp;info@example.com
                    </p>
                  </div>
                  <div className="py-2">
                    <p className="m-0">
                      <i className="fa fa-phone-alt me-2"></i>
                      &nbsp;XXX XXX XXXX
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark px-2" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-dark px-2" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-dark pl-2" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div> */}
            </div>
          </div>
          {/* Topbar End */}
        </>
      );
    }
  });

  return (
    <>
      <Authentication />
      {HeaderComponent}
    </>
  );
}

export default Header;
