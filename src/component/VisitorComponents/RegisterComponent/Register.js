import { useState, useContext } from "react";
import "./Register.css";
import axios from "axios";
import { SaveUserApiUrl } from "../../APIURL/apiUrl";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import Alert from "../../AlertComponent/Alert";
import { checkValidData } from "../../ValidationComponent/Validate";

function Register() {
  const { theme } = useContext(ThemeContext);
  const [alertOutput, setAlertOutput] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [output2, setOutput2] = useState();

  const [emailErr, setEmailErr] = useState(<></>);
  const [passwordErr, setPasswordErr] = useState(<></>);
  const [mobileErr, setMobileErr] = useState(<></>);

  const eventNext = (e) => {
    if (e.key === "Enter") document.getElementById("submitbtn").click();
  };

  const handleSubmit = () => {
    if (!name) return setOutput2("*Name is required");
    if (!email) return setOutput2("*Email is required");
    if (!password) return setOutput2("*Password is required");
    if (!mobile) return setOutput2("*Mobile is required");
    if (!address) return setOutput2("*Address is required");
    if (!city) return setOutput2("*City is required");

    const message = checkValidData(email);

    setOutput2(message);
    if (message) return;

    var userDetail = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      address: address,
      city: city,
      gender: gender,
    };

    axios
      .post(SaveUserApiUrl, userDetail)
      .then((result) => {
        setOutput2("");
        setAlertOutput(true);
        setTimeout(() => {
          setAlertOutput(false);
        }, 4000);
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setAddress("");
        setCity("");
        // console.log("success");
      })
      .catch((error) => {
        var err = error.response.data.status;
        console.log(err);

        if (err.search("email") > 0) {
          setEmailErr(
            <span className="text-danger pl-1">
              <i className="fa fa-info-circle"></i>&nbsp; Email Id is incorrect
            </span>
          );
          setTimeout(() => {
            setEmailErr("");
          }, 4000);
        }

        if (err.search("password") > 0) {
          setPasswordErr(
            <span className="text-danger pl-1">
              <i className="fa fa-info-circle"></i>&nbsp; Password must be
              greater than 5 and less than 10
            </span>
          );
          setTimeout(() => {
            setPasswordErr("");
          }, 4000);
        }

        if (err.search("mobile") > 0) {
          setMobileErr(
            <span className="text-danger pl-1">
              <i className="fa fa-info-circle"></i>&nbsp; Mobile number must be
              10 digit.
            </span>
          );
          setTimeout(() => {
            setMobileErr("");
          }, 4000);
        }

        setOutput2("User Registration Failed....");
        setTimeout(() => {
          setOutput2("");
        }, 4000);
      });

    setTimeout(() => {
      setOutput2("");
    }, 4000);
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
            <span className="text-primary">Register</span> Here !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Register</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {alertOutput && (
        <Alert type="success" message="User Register Successfully..." />
      )}

      <div
        className={`register-form2 ${
          theme == "dark" ? "bg-dark" : "bg-secondary"
        } w-100 h-100`}
      >
        <h5 className="text-danger text-center">{output2}</h5>
        <form action="">
          <div className="row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                className="form-control border-0 py-4"
                placeholder="Name"
                required="required"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="email"
                className="form-control border-0 py-4"
                placeholder="Email"
                required="required"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailErr}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <input
                type="password"
                className="form-control border-0 py-4"
                placeholder="Password"
                required="required"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordErr}
            </div>
            <div className="form-group col-sm-6">
              <input
                type="text"
                className="form-control border-0 py-4"
                placeholder="Mobile"
                required="required"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              {mobileErr}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <select
                id="option"
                className="form-control border-0 px-2"
                required="required"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option>Select City</option>
                <option>Indore</option>
                <option>Ujjain</option>
                <option>Bhopal</option>
              </select>
            </div>
            <div className="form-group col-sm-6">
              <label for="gender">Gender:</label>
              &nbsp;&nbsp;&nbsp;
              <label for="male" style={{ cursor: "pointer" }}>
                {" "}
                Male &nbsp;
              </label>
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                onChange={(e) => setGender(e.target.value)}
              />
              &nbsp;&nbsp;&nbsp;
              <label for="female" style={{ cursor: "pointer" }}>
                {" "}
                Female &nbsp;
              </label>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <textarea
                className="form-control border-0 py-4"
                rows="5"
                placeholder="Address"
                value={address}
                onKeyDown={(e) => eventNext(e)}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary btn-block border-0 py-3 rounded-lg font-weight-bold"
              type="button"
              id="submitbtn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
