import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UpdateUserApiUrl } from "../APIURL/apiUrl";
import { ThemeContext } from "../ThemeComponent/ThemeContext";

function Verify() {
  const [verified, setVerified] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { email } = useParams();
  const navigate = useNavigate();

  console.log(email);
  useEffect(() => {
    let condition_obj = {
      condition_obj: { email: email },
      content_obj: { status: 1 },
    };
    axios
      .patch(UpdateUserApiUrl, condition_obj)
      .then((response) => {
        // window.location.assign("http://localhost:3000");
        navigate("/login");
        setVerified(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [verified]);

  return (
    <>
      {/* <Navigate to="/login" /> */}

      {/* {verified && (
        <div
          className="modal fade"
          id="exampleModal3"
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
                  Verified
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
                <span>User verified successfully...</span>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => <Navigate to="/login" />}
                  data-dismiss="modal"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Verify;
