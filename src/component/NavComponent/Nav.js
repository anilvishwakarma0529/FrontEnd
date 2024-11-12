import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeComponent/ThemeContext";

function Nav() {
  const navigate = useNavigate();
  const [NavComponent, setNavComponent] = useState();
  const [activeBtn, setActiveBtn] = useState();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleActiveBtn = (btnname) => {
    // alert(btnname);
    setActiveBtn(btnname);
  };

  useEffect(() => {
    if (
      localStorage.getItem("token") != undefined &&
      localStorage.getItem("role") == "admin"
    ) {
      setNavComponent(
        <>
          {/* Navbar Start */}
          <div
            className={`container-fluid sticky-top ${
              theme == "dark" ? "bg-dark" : "bg-light"
            } shadow`}
          >
            <nav
              className={`navbar navbar-expand-lg ${
                theme == "dark" ? "bg-dark" : "bg-light"
              } navbar-light py-3
               px-0 row px-xl-5`}
            >
              <div className="col-lg-3 d-none d-lg-block">
                <a href="" className="text-decoration-none">
                  <h1
                    className={`m-0 display-5 font-weight-semi-bold ${
                      theme == "dark" ? "text-light" : "text-dark"
                    }`}
                  >
                    <img
                      src="../assets/img/auction.png"
                      alt="logo"
                      style={{ height: "50px", width: "50px" }}
                    />
                    <span className="text-primary font-weight-bold px-3 mr-1">
                      E
                    </span>
                    Auction
                  </h1>
                </a>
              </div>
              <div className="col-lg-9">
                <nav
                  className={`navbar navbar-expand-lg ${
                    theme === "dark" ? "navbar-dark" : "navbar-light"
                  } py-3 py-lg-0 px-0`}
                >
                  <a href="" className="text-decoration-none d-block d-lg-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold">
                      <span className="text-primary font-weight-bold border px-3 mr-1">
                        E
                      </span>
                      Auction
                    </h1>
                  </a>
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarCollapse"
                  >
                    <div className="navbar-nav ml-auto py-0">
                      <Link to="/admin">
                        <a
                          className={`${
                            theme == "dark"
                              ? activeBtn === "Admin Home"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "Admin Home"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                        `}
                          onClick={() => handleActiveBtn("Admin Home")}
                        >
                          Admin Home
                        </a>
                      </Link>
                      <Link to="/manageusers">
                        <a
                          className={`${
                            theme == "dark"
                              ? activeBtn === "Manage Users"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "Manage Users"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                        `}
                          onClick={() => handleActiveBtn("Manage Users")}
                        >
                          Manage Users
                        </a>
                      </Link>
                      <div className="nav-item dropdown">
                        <Link
                          href="#"
                          className={`${
                            theme == "dark"
                              ? activeBtn === "Manage Category"
                                ? "dropdown-toggle nav-link active"
                                : "dropdown-toggle nav-link"
                              : activeBtn === "Manage Category"
                              ? "dropdown-toggle nav-link active"
                              : "dropdown-toggle nav-link"
                          }`}
                          data-toggle="dropdown"
                        >
                          Manage Category
                        </Link>
                        <div
                          className={`dropdown-menu rounded-0 m-0 ${
                            theme == "dark" ? "bg-dark" : "bg-light"
                          }`}
                        >
                          <Link to="/addcategory">
                            <a
                              className={`dropdown-item ${
                                theme == "dark" ? "text-light" : "text-dark"
                              }`}
                              onClick={() => handleActiveBtn("Manage Category")}
                            >
                              Add Category
                            </a>
                          </Link>
                          <Link to="/addsubcategory">
                            <a
                              className={`dropdown-item ${
                                theme == "dark" ? "text-light" : "text-dark"
                              }`}
                              onClick={() => handleActiveBtn("Manage Category")}
                            >
                              Add Sub Category
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="nav-item dropdown">
                        <Link
                          href="#"
                          className={`${
                            theme == "dark"
                              ? activeBtn === "Settings"
                                ? "dropdown-toggle nav-link active"
                                : "dropdown-toggle nav-link"
                              : activeBtn === "Settings"
                              ? "dropdown-toggle nav-link active"
                              : "dropdown-toggle nav-link"
                          }`}
                          data-toggle="dropdown"
                        >
                          Settings
                        </Link>
                        <div
                          className={`dropdown-menu rounded-0 m-0 ${
                            theme == "dark" ? "bg-dark" : "bg-light"
                          }`}
                        >
                          <Link to="/changepassword">
                            <a
                              className={`dropdown-item ${
                                theme == "dark" ? "text-light" : "text-dark"
                              }`}
                              onClick={() => handleActiveBtn("Settings")}
                            >
                              Change Password
                            </a>
                          </Link>
                          <Link to="/editprofile">
                            <a
                              className={`dropdown-item ${
                                theme == "dark" ? "text-light" : "text-dark"
                              }`}
                              onClick={() => handleActiveBtn("Settings")}
                            >
                              Edit Profile
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Link to="#">
                        <a
                          className={`${
                            theme === "dark"
                              ? activeBtn === "Logout"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "Logout"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                        `}
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => handleActiveBtn("Logout")}
                        >
                          Logout
                        </a>
                      </Link>

                      <button
                        className="rounded-circle h-25 mt-3 ml-3"
                        id="mode-button"
                        title={`${theme == "dark" ? "light" : "dark"} mode`}
                        mode={`${theme == "dark" ? "dark" : "light"}`}
                        onClick={toggleTheme}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="gfg-icon"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width={`${theme == "dark" ? "1.5" : "2.0"}`}
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {theme == "dark" ? (
                            <>
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
                              <path d="M6.343 17.657l-1.414 1.414"></path>
                              <path d="M6.343 6.343l-1.414 -1.414"></path>
                              <path d="M17.657 6.343l1.414 -1.414"></path>
                              <path d="M17.657 17.657l1.414 1.414"></path>
                              <path d="M4 12h-2"></path>
                              <path d="M12 4v-2"></path>
                              <path d="M20 12h2"></path>
                              <path d="M12 20v2"></path>
                            </>
                          ) : (
                            <>
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                            </>
                          )}
                        </svg>{" "}
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </nav>
          </div>
          {/* Navbar End */}
        </>
      );
    } else if (
      localStorage.getItem("token") != undefined &&
      localStorage.getItem("role") == "user"
    ) {
      setNavComponent(
        <>
          {/* Navbar Start */}
          <div
            className={`container-fluid sticky-top ${
              theme == "dark" ? "bg-dark" : "bg-light"
            } shadow`}
          >
            <nav
              className={`navbar navbar-expand-lg ${
                theme == "dark" ? "bg-dark" : "bg-light"
              } navbar-light py-3
               px-0 row px-xl-5`}
            >
              <div className="col-lg-3 d-none d-lg-block">
                <a href="" className="text-decoration-none">
                  <h1
                    className={`m-0 display-5 font-weight-semi-bold ${
                      theme == "dark" ? "text-light" : "text-dark"
                    }`}
                  >
                    <img
                      src="../assets/img/auction.png"
                      alt="logo"
                      style={{ height: "50px", width: "50px" }}
                    />
                    <span className="text-primary font-weight-bold px-3 mr-1">
                      E
                    </span>
                    Auction
                  </h1>
                </a>
              </div>
              <div className="col-lg-9">
                <nav
                  className={`navbar navbar-expand-lg ${
                    theme === "dark" ? "navbar-dark" : "navbar-light"
                  } py-3 py-lg-0 px-0`}
                >
                  <a href="" className="text-decoration-none d-block d-lg-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold">
                      <span className="text-primary font-weight-bold border px-3 mr-1">
                        E
                      </span>
                      Auction
                    </h1>
                  </a>
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarCollapse"
                  >
                    <div className="navbar-nav ml-auto py-0">
                      <Link to="/user">
                        <a
                          className={`${
                            theme == "dark"
                              ? activeBtn === "UserHome"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "UserHome"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                      `}
                          onClick={() => handleActiveBtn("UserHome")}
                        >
                          UserHome
                        </a>
                      </Link>
                      <Link to="/categories">
                        <a
                          className={`${
                            theme == "dark"
                              ? activeBtn === "View Product"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "View Product"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                      `}
                          onClick={() => handleActiveBtn("View Product")}
                        >
                          View Product
                        </a>
                      </Link>
                      <Link to="/addproduct">
                        <a
                          className={`${
                            theme == "dark"
                              ? activeBtn === "Add Product"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "Add Product"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                      `}
                          onClick={() => handleActiveBtn("Add Product")}
                        >
                          Add Product
                        </a>
                      </Link>
                      <Link to="/bidproductlist">
                        <a
                          className={`${
                            theme == "dark"
                              ? activeBtn === "View Bid Product"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "View Bid Product"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                      `}
                          onClick={() => handleActiveBtn("View Bid Product")}
                        >
                          View Bid Product
                        </a>
                      </Link>
                      <div className="nav-item dropdown">
                        <Link
                          href="#"
                          className={`${
                            theme == "dark"
                              ? activeBtn === "Settings"
                                ? "dropdown-toggle nav-link active"
                                : "dropdown-toggle nav-link"
                              : activeBtn === "Settings"
                              ? "dropdown-toggle nav-link active"
                              : "dropdown-toggle nav-link"
                          }`}
                          data-toggle="dropdown"
                        >
                          Settings
                        </Link>
                        <div
                          className={`dropdown-menu rounded-0 m-0 ${
                            theme == "dark" ? "bg-dark" : "bg-light"
                          }`}
                        >
                          <Link to="/changepassword">
                            <a
                              className={`dropdown-item ${
                                theme == "dark" ? "text-light" : "text-dark"
                              }`}
                              onClick={() => handleActiveBtn("Settings")}
                            >
                              Change Password
                            </a>
                          </Link>
                          <Link to="/editprofile">
                            <a
                              className={`dropdown-item ${
                                theme == "dark" ? "text-light" : "text-dark"
                              }`}
                              onClick={() => handleActiveBtn("Settings")}
                            >
                              Edit Profile
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Link to="#">
                        <a
                          className={`${
                            theme === "dark"
                              ? activeBtn === "Logout"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "Logout"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                              `}
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => handleActiveBtn("Logout")}
                        >
                          Logout
                        </a>
                      </Link>

                      <button
                        className="rounded-circle h-25 mt-3 ml-3"
                        id="mode-button"
                        title={`${theme == "dark" ? "light" : "dark"} mode`}
                        mode={`${theme == "dark" ? "dark" : "light"}`}
                        onClick={toggleTheme}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="gfg-icon"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width={`${theme == "dark" ? "1.5" : "2.0"}`}
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {theme == "dark" ? (
                            <>
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
                              <path d="M6.343 17.657l-1.414 1.414"></path>
                              <path d="M6.343 6.343l-1.414 -1.414"></path>
                              <path d="M17.657 6.343l1.414 -1.414"></path>
                              <path d="M17.657 17.657l1.414 1.414"></path>
                              <path d="M4 12h-2"></path>
                              <path d="M12 4v-2"></path>
                              <path d="M20 12h2"></path>
                              <path d="M12 20v2"></path>
                            </>
                          ) : (
                            <>
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                            </>
                          )}
                        </svg>{" "}
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </nav>
          </div>
          {/* Navbar End */}
        </>
      );
    } else {
      setNavComponent(
        <>
          {/* Navbar Start */}
          <div
            className={`container-fluid sticky-top ${
              theme == "dark" ? "bg-dark" : "bg-light"
            } shadow`}
          >
            <nav
              className={`navbar navbar-expand-lg ${
                theme == "dark" ? "bg-dark" : "bg-light"
              } navbar-light py-3
             px-0 row px-xl-5`}
            >
              <div className="col-lg-3 d-none d-lg-block">
                <a href="" className="text-decoration-none">
                  <h1
                    className={`m-0 display-5 font-weight-semi-bold ${
                      theme == "dark" ? "text-light" : "text-dark"
                    }`}
                  >
                    <img
                      src="../assets/img/auction.png"
                      alt="logo"
                      style={{ height: "50px", width: "50px" }}
                    />
                    <span className="text-primary font-weight-bold px-3 mr-1">
                      E
                    </span>
                    Auction
                  </h1>
                </a>
              </div>
              <div className="col-lg-9">
                <nav
                  className={`navbar navbar-expand-lg ${
                    theme === "dark" ? "navbar-dark" : "navbar-light"
                  } py-3 py-lg-0 px-0`}
                >
                  <a href="" className="text-decoration-none d-block d-lg-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold">
                      <span className="text-primary font-weight-bold border px-3 mr-1">
                        E
                      </span>
                      Auction
                    </h1>
                  </a>
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className={`collapse navbar-collapse justify-content-between`}
                    id="navbarCollapse"
                  >
                    <div className="navbar-nav mr-auto py-0">
                      <Link to="/">
                        <a
                          className={`${
                            theme == "dark"
                              ? activeBtn === "Home"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "Home"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                      `}
                          onClick={() => handleActiveBtn("Home")}
                        >
                          Home
                        </a>
                      </Link>
                      <Link to="/about">
                        <a
                          className={`${
                            theme == "dark"
                              ? activeBtn === "About"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "About"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                      `}
                          onClick={() => handleActiveBtn("About")}
                        >
                          About
                        </a>
                      </Link>
                      <Link to="/contact">
                        <a
                          className={`${
                            theme == "dark"
                              ? activeBtn === "Contact"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "Contact"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                      `}
                          onClick={() => handleActiveBtn("Contact")}
                        >
                          Contact
                        </a>
                      </Link>
                      {/* <div className="nav-item dropdown">
                        <a
                          href="#"
                          className={`${
                            theme == "dark"
                              ? activeBtn === "Pages"
                                ? "dropdown-toggle nav-link active"
                                : "dropdown-toggle nav-link"
                              : activeBtn === "Pages"
                              ? "dropdown-toggle nav-link active"
                              : "dropdown-toggle nav-link"
                          }
                      `}
                          onClick={() => handleActiveBtn("Pages")}
                          data-toggle="dropdown"
                        >
                          Pages
                        </a>
                        <div
                          className={`dropdown-menu rounded-0 m-0 ${
                            theme == "dark" ? "bg-dark" : "bg-light"
                          }`}
                        >
                          <a
                            href="cart.html"
                            className={`dropdown-item ${
                              theme == "dark" ? "text-light" : "text-dark"
                            }`}
                            onClick={() => handleActiveBtn("Pages")}
                          >
                            Shopping Cart
                          </a>
                          <a
                            href="checkout.html"
                            className={`dropdown-item ${
                              theme == "dark" ? "text-light" : "text-dark"
                            }`}
                            onClick={() => handleActiveBtn("Pages")}
                          >
                            Checkout
                          </a>
                        </div>
                      </div> */}
                      <Link to="/service">
                        <a
                          className={`${
                            theme === "dark"
                              ? activeBtn === "Service"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "Service"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                      `}
                          onClick={() => handleActiveBtn("Service")}
                        >
                          Service
                        </a>
                      </Link>
                    </div>

                    <div className="navbar-nav ml-auto py-0">
                      <Link to="/login">
                        <a
                          className={`${
                            theme == "dark"
                              ? activeBtn === "Login"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "Login"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                      `}
                          onClick={() => handleActiveBtn("Login")}
                        >
                          Login
                        </a>
                      </Link>
                      <Link to="/register">
                        <a
                          className={`${
                            theme == "dark"
                              ? activeBtn === "Register"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                              : activeBtn === "Register"
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                      `}
                          onClick={() => handleActiveBtn("Register")}
                        >
                          Register
                        </a>
                      </Link>
                      {/* <button
                      className=""
                      variant="primary"
                      onClick={toggleTheme}
                    >
                      Toggle Theme
                    </button> */}
                      <button
                        className="rounded-circle h-25 mt-3 ml-3"
                        id="mode-button"
                        title={`${theme == "dark" ? "light" : "dark"} mode`}
                        mode={`${theme == "dark" ? "dark" : "light"}`}
                        onClick={toggleTheme}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="gfg-icon"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width={`${theme == "dark" ? "1.5" : "2.0"}`}
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {theme == "dark" ? (
                            <>
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
                              <path d="M6.343 17.657l-1.414 1.414"></path>
                              <path d="M6.343 6.343l-1.414 -1.414"></path>
                              <path d="M17.657 6.343l1.414 -1.414"></path>
                              <path d="M17.657 17.657l1.414 1.414"></path>
                              <path d="M4 12h-2"></path>
                              <path d="M12 4v-2"></path>
                              <path d="M20 12h2"></path>
                              <path d="M12 20v2"></path>
                            </>
                          ) : (
                            <>
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                            </>
                          )}
                        </svg>{" "}
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </nav>
          </div>

          {/* Navbar End */}
        </>
      );
    }
  });

  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className={`${
              theme === "dark" ? "modal-content dark" : "modal-content light"
            }`}
          >
            <div className="modal-header">
              <h5
                className={`modal-title ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
                id="exampleModalLabel"
              >
                Logout
              </h5>
              <button
                type="button"
                className={`close ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <span>Are you sure you want to logout ?</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                No
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/logout")}
                data-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      {NavComponent}
    </>
  );
}

export default Nav;
