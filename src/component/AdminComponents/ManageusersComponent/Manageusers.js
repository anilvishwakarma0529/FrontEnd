import { useContext, useEffect, useState } from "react";
import "./Manageusers.css";
import axios from "axios";
import {
  DeleteUserApiUrl,
  FetchUserApiUrl,
  UpdateUserApiUrl,
} from "../../APIURL/apiUrl";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import Alert from "../../AlertComponent/Alert";

function Manageusers() {
  const { theme } = useContext(ThemeContext);
  const [userDetails, setUserDetails] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [alertOutput, setAlertOutput] = useState(true);
  const navigate = useNavigate();

  const manageUserStatus = (id, task) => {
    if (task === "block") {
      var condition_obj = {
        condition_obj: { _id: id },
        content_obj: { status: 0 },
      };
      axios
        .patch(UpdateUserApiUrl, condition_obj)
        .then((result) => {
          setTrigger(!trigger);
          navigate("/manageusers");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (task === "verify") {
      let condition_obj = {
        condition_obj: { _id: id },
        content_obj: { status: 1 },
      };
      axios
        .patch(UpdateUserApiUrl, condition_obj)
        .then((result) => {
          setTrigger(!trigger);
          navigate("/manageusers");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      var condition_obj = { data: { _id: id } };
      axios
        .delete(DeleteUserApiUrl, condition_obj)
        .then((result) => {
          setTrigger(!trigger);
          navigate("/manageusers");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    var condition_obj = { role: "user" };
    axios
      .get(FetchUserApiUrl, {
        params: {
          condition_obj: condition_obj,
        },
      })
      .then((response) => {
        setUserDetails(response.data);
        setTimeout(() => {
          setAlertOutput(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        setTimeout(() => {
          setAlertOutput(false);
        }, 3000);
      });
  }, [trigger]);

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
            <span className="text-primary">View & Manage</span> Users !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Admin Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Manage Users</p>
          </div>
        </div>
      </div>
      {alertOutput &&
        (userDetails.length > 0 ? (
          <Alert
            type="success"
            message={`There are ${userDetails.length} users registered..`}
          />
        ) : (
          <Alert
            type="danger"
            message={`Oops!! There are ${userDetails.length} users registered..`}
          />
        ))}

      <div className="px-5 my-4">
        <table className="text-center table table-bordered">
          <thead className="bg-dark text-white">
            <tr>
              <th>RegId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>City</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody className="tbody-light border-dark">
            {userDetails.map((row) => (
              <tr key={row._id}>
                <td>{row._id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.mobile}</td>
                <td>{row.address}</td>
                <td>{row.city}</td>
                <td>{row.gender}</td>
                <td>
                  {row.status === 1 && (
                    <span className="text-success">Verified</span>
                  )}
                  {row.status === 0 && (
                    <span className="text-warning">Blocked</span>
                  )}
                </td>
                <td>
                  {row.status === 1 && (
                    <Link className="text-decoration-none">
                      <span
                        onClick={() => manageUserStatus(row._id, "block")}
                        className="text-blue"
                      >
                        Change Status
                      </span>
                    </Link>
                  )}
                  {row.status === 0 && (
                    <Link className="text-decoration-none">
                      <span
                        onClick={() => {
                          manageUserStatus(row._id, "verify");
                        }}
                        className="text-blue"
                      >
                        Change Status
                      </span>
                    </Link>
                  )}
                  <br />
                  <Link className="text-decoration-none">
                    <span
                      onClick={() => manageUserStatus(row._id, "delete")}
                      className="text-danger"
                    >
                      Delete
                    </span>
                  </Link>
                </td>
                <td>{row.info}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Page Header End */}
    </>
  );
}

export default Manageusers;
