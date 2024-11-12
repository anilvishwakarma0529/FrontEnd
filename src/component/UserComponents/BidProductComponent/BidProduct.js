import { useContext, useEffect, useState } from "react";
import "./BidProduct.css";
import axios from "axios";
import {
  FetchBidApiUrl,
  FetchProductApiUrl,
  SaveBidApiUrl,
} from "../../APIURL/apiUrl";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import Alert from "../../AlertComponent/Alert";

function BidProduct() {
  const { theme } = useContext(ThemeContext);
  const [bidproductDetail, setBidProductDetail] = useState([]);
  const [auctionBidPrice, setAuctionBidPrice] = useState();
  const [auctionCurrentPrice, setAuctionCurrentPrice] = useState();
  const [alertOutput, setAlertOutput] = useState(false);
  const [output, setOutput] = useState();
  const { _id } = useParams();

  const handleBidProduct = () => {
    if (!auctionBidPrice) return setOutput("*Bid Price is required");
    else if (
      auctionBidPrice < auctionCurrentPrice ||
      auctionBidPrice < bidproductDetail[0].baseprice
    )
      return setOutput(
        "*Bid Price cannot be less than auction current price or base price"
      );
    else setAuctionCurrentPrice(auctionBidPrice);
    setAuctionBidPrice("");

    bidproductDetail.map((row) => {
      var bidDetails = {
        p_id: row._id,
        user_email: localStorage.getItem("email"),
        bidprice: auctionBidPrice,
      };

      axios
        .post(SaveBidApiUrl, bidDetails)
        .then((response) => {
          setOutput("");
          setAlertOutput(true);
          setTimeout(() => {
            setAlertOutput(false);
          }, 4000);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  useEffect(() => {
    var condition_obj = { _id: _id };
    axios
      .get(FetchProductApiUrl, {
        params: {
          condition_obj: condition_obj,
        },
      })
      .then((response) => {
        setBidProductDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    let condition_obj1 = { p_id: _id };
    axios
      .get(FetchBidApiUrl, {
        params: {
          condition_obj: condition_obj1,
        },
      })
      .then((response) => {
        const length = response.data.length;
        setAuctionCurrentPrice(response.data[length - 1].bidprice);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [_id]);

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
            <span className="text-primary">Bid</span> Product Here !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Userhome</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Bid Product</p>
          </div>
        </div>
      </div>

      {alertOutput && (
        <Alert type="success" message="Bid Added Successfully..." />
      )}

      <h5 className="text-danger text-center">{output}</h5>

      {/* <div className="px-5 my-4 text-center">
        <div className="d-flex align-items-center justify-content-center mb-5"> */}
      <div className="container-fluid row mb-5">
        {bidproductDetail.map((row) => (
          <>
            <div className="col-lg-6 d-flex align-items-right justify-content-end">
              <div
                className={`login-form3 ${
                  theme == "dark" ? "bg-dark" : "bg-secondary"
                }`}
              >
                <img
                  src={`../assets/uploads/producticon/${row.piconnm}`}
                  alt="logo_slide"
                  className="w-100 h-100"
                />
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div
                className={`login-form3 ${
                  theme == "dark" ? "bg-dark" : "bg-secondary"
                }`}
              >
                <form action="">
                  <div className="row">
                    <div className="form-group col-sm-12">
                      <p>Product Id : {row._id}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-sm-12">
                      <p>Title : {row.title}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-sm-12">
                      <p>Base Price : ₹ {row.baseprice}</p>
                    </div>
                  </div>
                  {auctionCurrentPrice && (
                    <div className="row">
                      <div className="form-group col-sm-12">
                        <p>Auction Current Price : ₹ {auctionCurrentPrice}</p>
                      </div>
                    </div>
                  )}
                  <div className="row">
                    <div className="form-group col-sm-12">
                      <input
                        type="text"
                        className="form-control border-0 py-4"
                        placeholder="Enter Your Bid Price"
                        required="required"
                        // disabled={!enableNew}
                        value={auctionBidPrice}
                        // onKeyDown={(e) => eventNext(e)}
                        onChange={(e) => setAuctionBidPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <button
                      className="btn btn-primary btn-block border-0 py-3 rounded-lg font-weight-bold"
                      id="chngbtn"
                      type="button"
                      // disabled={
                      //   !currentPass ||
                      //   !newPassword ||
                      //   !cnewPassword ||
                      //   cnewPassword != newPassword
                      // }
                      onClick={() => handleBidProduct()}
                    >
                      Bid Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* Page Header End */}
    </>
  );
}

export default BidProduct;
