import { useContext, useEffect, useState } from "react";
import "./BidProductList.css";
import axios from "axios";
import { FetchProductApiUrl, DeleteProductApiUrl } from "../../APIURL/apiUrl";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import Alert from "../../AlertComponent/Alert";

function BidProductList() {
  const { theme } = useContext(ThemeContext);
  const [bidproductDetails, setBidProductDetails] = useState([]);
  const [alertOutput, setAlertOutput] = useState(true);
  const [trigger, setTrigger] = useState(false);
  const navigate = useNavigate();

  const manageBid = (id) => {
    var condition_obj = { data: { _id: id } };
    axios
      .delete(DeleteProductApiUrl, condition_obj)
      .then((result) => {
        setTrigger(!trigger);
        navigate("/bidproductlist");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    var condition_obj = { useremail: localStorage.getItem("email") };
    axios
      .get(FetchProductApiUrl, {
        params: {
          condition_obj: condition_obj,
        },
      })
      .then((response) => {
        setBidProductDetails(response.data);
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
            <span className="text-primary">View Bid</span> Product Here !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Userhome</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">View Bid Product</p>
          </div>
        </div>
      </div>
      {alertOutput &&
        (bidproductDetails.length > 0 ? (
          <Alert
            type="success"
            message={`There are ${bidproductDetails.length} bid product added.. `}
          />
        ) : (
          <Alert
            type="danger"
            message={`Oops!! There are ${bidproductDetails.length} bid product added..`}
          />
        ))}

      <div className="px-5 my-4">
        <table className="text-center table table-bordered">
          <thead className="bg-dark text-white">
            <tr>
              <th>ProductId</th>
              <th>Title</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Description</th>
              <th>Base Price</th>
              <th>Product Icon</th>
              <th>Action</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody className="tbody-light border-dark">
            {bidproductDetails.map((row) => (
              <tr key={row._id}>
                <td>{row._id}</td>
                <td>{row.title}</td>
                <td>{row.catnm}</td>
                <td>{row.subcatnm}</td>
                <td>{row.description}</td>
                <td>{row.baseprice}</td>
                <td className="w-25">
                  <img
                    className="w-50 h-50"
                    src={`../assets/uploads/producticon/${row.piconnm}`}
                    alt={`${row.piconnm}`}
                  />
                </td>
                <td>
                  <Link
                    className="text-decoration-none"
                    to={`/biddingdetails/${row._id}`}
                  >
                    <span className="text-blue">Show Bid</span>
                  </Link>
                  <br />
                  <Link className="text-decoration-none">
                    <span
                      onClick={() => manageBid(row._id)}
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

export default BidProductList;
