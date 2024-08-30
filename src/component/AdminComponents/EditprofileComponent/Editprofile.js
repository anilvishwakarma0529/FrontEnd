import "./Editprofile.css";
import { useContext, useState } from "react";
import axios from "axios";
import { UpdateUserApiUrl, FetchUserApiUrl } from "../../APIURL/apiUrl";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import Alert from "../../AlertComponent/Alert";

function Editprofile() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [alertOutput, setAlertOutput] = useState(false);
  const [hover, setHover] = useState(false);
  const [name, setName] = useState(localStorage.getItem("name"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [mobile, setMobile] = useState(localStorage.getItem("mobile"));
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [city, setCity] = useState(localStorage.getItem("city"));
  const [gender, setGender] = useState(localStorage.getItem("gender"));
  const [output2, setOutput2] = useState();

  const eventNext = (e) => {
    if (e.key === "Enter") document.getElementById("updatebtn").click();
  };

  const handleUpdate = () => {
    if (!name) return setOutput2("*Name is required");
    if (!email || !email.includes("@") || !email.includes("."))
      return setOutput2("*Email is required (Example : example@gmail.com)");
    if (!mobile || mobile.length < 10 || mobile.length > 10)
      return setOutput2("*Mobile is required & must be 10 digit");
    if (!address) return setOutput2("*Address is required");
    if (!city) return setOutput2("*City is required");

    var condition_obj = {
      condition_obj: { _id: localStorage.getItem("_id") },
      content_obj: {
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        city: city,
        gender: gender,
      },
    };
    axios
      .patch(UpdateUserApiUrl, condition_obj)
      .then((result) => {
        setOutput2("");
        setAlertOutput(true);
        setTimeout(() => {
          setAlertOutput(false);
        }, 4000);

        let condition = { _id: localStorage.getItem("_id") };
        axios
          .get(FetchUserApiUrl, {
            params: {
              condition_obj: condition,
            },
          })
          .then((response) => {
            localStorage.setItem("name", response.data[0].name);
            localStorage.setItem("email", response.data[0].email);
            localStorage.setItem("mobile", response.data[0].mobile);
            localStorage.setItem("city", response.data[0].city);
            localStorage.setItem("address", response.data[0].address);
            localStorage.setItem("gender", response.data[0].gender);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
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
            <span className="text-primary">Edit</span> Profile !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Admin Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Edit Profile</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {alertOutput && (
        <Alert type="success" message="Profile Updated Successfully..." />
      )}

      <h5 className="text-danger text-center">{output2}</h5>

      <div
        className={`register-form2 ${
          theme == "dark" ? "bg-dark" : "bg-secondary"
        } mb-5`}
      >
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
            </div>
          </div>
          <div className="row">
            <div
              className="form-group col-sm-6"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <button
                  className="form control btn btn-primary btn-block border-0 py-3 rounded-lg font-weight-bold"
                  type="button"
                  onClick={() => navigate("/changepassword")}
                >
                  Change Password
                </button>
              ) : (
                <input
                  type="password"
                  className="form-control border-0 py-4"
                  placeholder="Password"
                  required="required"
                  disabled
                />
              )}
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
                checked={gender === "male"}
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
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <textarea
                className="form-control border-0 py-4"
                rows="2"
                placeholder="Address"
                value={address}
                onKeyDown={(e) => eventNext(e)}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group col-6">
              <button
                className="btn btn-primary btn-block border-0 py-3 rounded-lg font-weight-bold"
                type="button"
                id="updatebtn"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Editprofile;
