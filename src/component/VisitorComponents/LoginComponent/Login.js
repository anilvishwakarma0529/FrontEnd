import axios from "axios";
import "./Login.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUserApiUrl } from "../../APIURL/apiUrl";
import RCG from "react-captcha-generator";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import Alert from "../../AlertComponent/Alert";

function Login() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaEnter, setCaptchaEnter] = useState();
  const [toggleCaptcha, setToggleCaptcha] = useState(true);
  const [type, setType] = useState("password");
  const [trueCheckbox, setTrueCheckbox] = useState("Show");
  const [output, setOutput] = useState();
  const [alertOutput, setAlertOutput] = useState();

  const result = (text) => {
    setCaptcha(text);
  };

  const refreshCaptcha = () => {
    result("");
    setCaptchaEnter("");
    setToggleCaptcha(false);
    setTimeout(() => {
      setToggleCaptcha(true);
    });
  };

  const eventNext = (e) => {
    if (e.keyCode === 13) document.getElementById("loginbtn").click();
  };

  const handleToggle = () => {
    if (type === "password") {
      // setIcon(eye);
      setTrueCheckbox("Hide");
      setType("text");
    } else {
      // setIcon(eyeOff);
      setTrueCheckbox("Show");
      setType("password");
    }
  };

  const handleLogin = () => {
    if (!email) return setOutput("*Email is required");
    if (!password) return setOutput("*Password is required");
    if (!captchaEnter) return setOutput("*Captcha is required");

    if (captcha === captchaEnter) {
      var userDetail = {
        email: email,
        password: password,
      };

      axios
        .post(LoginUserApiUrl, userDetail)
        .then((response) => {
          var user = response.data.userDetails;
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("_id", user._id);
          localStorage.setItem("name", user.name);
          localStorage.setItem("email", user.email);
          localStorage.setItem("mobile", user.mobile);
          localStorage.setItem("address", user.address);
          localStorage.setItem("city", user.city);
          localStorage.setItem("gender", user.gender);
          localStorage.setItem("role", user.role);
          localStorage.setItem("info", user.info);

          user.role == "admin" ? navigate("/admin") : navigate("/user");
        })
        .catch(() => {
          setAlertOutput("invalid");
          setTimeout(() => {
            setAlertOutput("");
          }, 4000);
          setEmail("");
          setPassword("");
        });
    } else {
      refreshCaptcha();
      setAlertOutput("captcha");
      setTimeout(() => {
        setAlertOutput("");
      }, 4000);
    }
  };

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
          style={{ minHeight: "150px" }}
        >
          <h1
            className={`font-weight-semi-bold text-uppercase mb-3 ${
              theme == "dark" ? "text-light" : "text-dark"
            }`}
          >
            <span className="text-primary">Login</span> Here !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Login</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {alertOutput === "captcha" && (
        <Alert type="danger" message="Captcha validation failed..." />
      )}
      {alertOutput === "invalid" && (
        <Alert type="danger" message="Invalid user or varify your account..." />
      )}

      <div className="container-fluid row">
        <div className="col-lg-7">
          <img
            src="./assets/img/login_slide3.jpg"
            alt="logo_slide"
            className="w-100 h-100"
          />
        </div>
        <div className="col-lg-5">
          <div
            className={`login-form ${
              theme == "dark" ? "bg-dark" : "bg-secondary"
            } w-100 h-100`}
          >
            <h5 className="text-danger text-center">{output}</h5>
            <form action="">
              <div className="row">
                <div className="form-group col-sm-12">
                  <input
                    type="email"
                    className="form-control border-0 py-4"
                    placeholder="Email"
                    required="required"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-12">
                  <input
                    type={type}
                    className="form-control border-0 py-4"
                    placeholder="Password"
                    required="required"
                    value={password}
                    onKeyDown={(e) => eventNext(e)}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-12">
                  <input type="checkbox" value="Show" onClick={handleToggle} />
                  <label for="Show">&nbsp;{trueCheckbox} Password</label>
                </div>
              </div>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="form-group col-sm-3 bg-light rounded-lg ml-3">
                  {toggleCaptcha && <RCG result={result} />}
                </div>
                <div className="pl-5">
                  <i
                    onClick={refreshCaptcha}
                    className="fa fa-refresh"
                    style={{ color: "red", cursor: "pointer" }}
                  ></i>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-12">
                  <input
                    type="text"
                    className="form-control border-0 py-4"
                    placeholder="Captcha"
                    required="required"
                    value={captchaEnter}
                    onChange={(e) => setCaptchaEnter(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-primary btn-block border-0 py-3 rounded-lg font-weight-bold"
                  id="loginbtn"
                  type="button"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
