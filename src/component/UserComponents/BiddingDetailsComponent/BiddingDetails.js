import { useContext, useEffect, useState } from "react";
import "./BiddingDetails.css";
import axios from "axios";
import { FetchBidApiUrl } from "../../APIURL/apiUrl";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import Alert from "../../AlertComponent/Alert";
import { useParams } from "react-router-dom";

function BiddingDetails() {
  const { theme } = useContext(ThemeContext);
  const [biddingDetails, setBiddingDetails] = useState([]);
  const [alertOutput, setAlertOutput] = useState(true);
  const { p_id } = useParams();

  useEffect(() => {
    const condition_obj = { p_id: p_id };
    axios
      .get(FetchBidApiUrl, {
        params: {
          condition_obj: condition_obj,
        },
      })
      .then((response) => {
        console.log(response.data);
        setBiddingDetails(response.data);
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
  }, []);

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
            <span className="text-primary">View Bidding</span> Details Here !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Userhome</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Bidding Details</p>
          </div>
        </div>
      </div>
      {alertOutput &&
        (biddingDetails.length > 0 ? (
          <Alert
            type="success"
            message={`There are ${biddingDetails.length} bidding happened..`}
          />
        ) : (
          <Alert
            type="danger"
            message={`Oops!! There are ${biddingDetails.length} bidding happened..`}
          />
        ))}

      <div className="px-5 my-4">
        <table className="text-center table table-bordered">
          <thead className="bg-dark text-white">
            <tr>
              <th>BiddingId</th>
              <th>ProductId</th>
              <th>User Email</th>
              <th>Bidding Price</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody className="tbody-light border-dark">
            {biddingDetails.map((row) => (
              <tr key={row._id}>
                <td>{row._id}</td>
                <td>{row.p_id}</td>
                <td>{row.user_email}</td>
                <td>{row.bidprice}</td>
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

export default BiddingDetails;
