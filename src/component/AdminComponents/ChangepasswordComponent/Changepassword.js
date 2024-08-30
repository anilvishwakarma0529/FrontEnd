import "./Changepassword.css";
import { useContext, useState } from "react";
import { FetchUserApiUrl, UpdateUserApiUrl } from "../../APIURL/apiUrl";
import axios from "axios";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import Alert from "../../AlertComponent/Alert";

function Changepassword() {
  const { theme } = useContext(ThemeContext);
  const [currentPassword, setCurrentPassword] = useState();
  const [currentPass, setCurrentPass] = useState();
  const [currentPlaceholder, setCurrentPlaceholder] = useState(
    "Enter Current Password"
  );
  const [disableCurrent, setDisableCurrent] = useState(false);
  const [newPassword, setNewPassword] = useState();
  const [enableNew, setEnableNew] = useState(false);
  const [cnewPassword, setCNewPassword] = useState();
  const [output, setOutput] = useState();
  const [output2, setOutput2] = useState();
  const [alertOutput, setAlertOutput] = useState(false);

  const eventNext = (e) => {
    if (e.keyCode === 13) document.getElementById("chngbtn").click();
  };

  const handleNewFocus = () => {
    setOutput2("");
    setCurrentPassword("");
    setCurrentPlaceholder("You Successfully Entered Current Password");
    setDisableCurrent(true);
  };

  const handleCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);

    let condition = { _id: localStorage.getItem("_id") };
    axios
      .get(FetchUserApiUrl, {
        params: {
          condition_obj: condition,
        },
      })
      .then((response) => {
        setCurrentPass(response.data[0].password);
      });

    if (currentPass == e.target.value) {
      setOutput("");
      setOutput2("Current Password is correct");
      setEnableNew(true);
    } else {
      setOutput2("");
      setOutput("Current Password is incorrect.");
      setEnableNew(false);
    }
  };

  const handleChangeCnewpass = (e) => {
    setCNewPassword(e.target.value);
    if (newPassword !== e.target.value) {
      setOutput2("");
      setOutput("New Password & Confirm New Password are not same");
    } else {
      setOutput("");
      setOutput2("New Password & Confirm New Password matched..");
      setTimeout(() => {
        setOutput2("");
      }, 3000);
    }
  };

  const handleChangepassword = () => {
    console.log(newPassword);
    console.log(cnewPassword);
    if (newPassword === cnewPassword) {
      var condition_obj = {
        condition_obj: { _id: localStorage.getItem("_id") },
        content_obj: { password: newPassword },
      };
      axios
        .patch(UpdateUserApiUrl, condition_obj)
        .then((result) => {
          setAlertOutput(true);
          setTimeout(() => {
            setAlertOutput(false);
          }, 4000);
          setCurrentPassword("");
          setCurrentPlaceholder("Enter Current Password");
          setNewPassword("");
          setCNewPassword("");
          setEnableNew(false);
          setDisableCurrent(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setOutput("New Password & Confirm New Password are not same");
      setTimeout(() => {
        setOutput("");
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
            <span className="text-primary">Change</span> Password !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Admin Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Change Password</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {alertOutput && (
        <Alert type="success" message="Change Password Successfully..." />
      )}

      <h5 className="text-danger text-center">{output}</h5>
      <h5 className="text-success text-center">{output2}</h5>
      <div className="d-flex align-items-center justify-content-center mb-5">
        <div
          className={`login-form ${
            theme == "dark" ? "bg-dark" : "bg-secondary"
          }`}
        >
          <form action="">
            <div className="row">
              <div className="form-group col-sm-12">
                <input
                  type="password"
                  className="form-control border-0 py-4"
                  placeholder={currentPlaceholder}
                  required="required"
                  disabled={disableCurrent}
                  value={currentPassword}
                  onChange={(e) => handleCurrentPassword(e)}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-12">
                <input
                  type="password"
                  className="form-control border-0 py-4"
                  placeholder="Enter New Password"
                  required="required"
                  disabled={!enableNew}
                  value={newPassword}
                  onFocus={() => handleNewFocus()}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-12">
                <input
                  type="password"
                  className="form-control border-0 py-4"
                  placeholder="Confirm New Password"
                  lllll
                  required="required"
                  disabled={!enableNew}
                  value={cnewPassword}
                  onKeyDown={(e) => eventNext(e)}
                  onChange={(e) => handleChangeCnewpass(e)}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <button
                className="btn btn-primary btn-block border-0 py-3 rounded-lg font-weight-bold"
                id="chngbtn"
                type="button"
                disabled={
                  !currentPass ||
                  !newPassword ||
                  !cnewPassword ||
                  cnewPassword != newPassword
                }
                data-toggle="modal"
                data-target="#exampleModal2"
              >
                Change Password
              </button>
            </div>

            <div
              className="modal fade"
              id="exampleModal2"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div
                  className={`${
                    theme === "dark"
                      ? "modal-content dark"
                      : "modal-content light"
                  }`}
                >
                  <div className="modal-header">
                    <h5
                      className={`modal-title ${
                        theme === "dark" ? "text-light" : "text-dark"
                      }`}
                      id="exampleModalLabel"
                    >
                      Change Password
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
                    <span>Are you sure you want to Change Password ?</span>
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
                      onClick={handleChangepassword}
                      data-dismiss="modal"
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Changepassword;
