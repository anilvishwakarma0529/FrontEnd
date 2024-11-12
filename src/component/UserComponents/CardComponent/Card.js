import { useContext, useState } from "react";
import "./Card.css";
import axios from "axios";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import { FetchBidApiUrl } from "../../APIURL/apiUrl";
import { Link } from "react-router-dom";
import CountdownTimer from "../CountdownTimerComponent/CountdownTimer";

function Card(props) {
  const [bidData, setBidData] = useState([]);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const { theme } = useContext(ThemeContext);

  const now = new Date();
  const endTime = new Date(
    new Date(props.timer).getTime() + 48 * 60 * 60 * 1000
  );
  const difference = endTime - now;

  if (props.path === "#") {
    const condition_obj = { p_id: props._id };
    axios
      .get(FetchBidApiUrl, {
        params: {
          condition_obj: condition_obj,
        },
      })
      .then((response) => {
        const highBid = response.data.length - 1;
        setBidData(response.data[highBid]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const buyFunction = async () => {
    var pDetails = {
      user_email: bidData.user_email,
      title: props.name,
      description: props.description,
      bidprice: bidData.bidprice,
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/payment",
        pDetails
      );
      if (response.status === 200) {
        let paymentUrl = response.data.url; // Open a mini window
        let width = 600;
        let height = 700;
        let left = window.screen.width / 2 - width / 2;
        let top = window.screen.height / 2 - height / 2;
        let myWindow = window.open(
          paymentUrl,
          "Payment Gateway",
          `width=${width},height=${height},top=${top},left=${left}`
        );

        if (response.data.success_url === "http://localhost:3000/success") {
          // myWindow.close();
        }
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <>
      {props.path === "#" ? (
        <>
          <div
            to={props.path}
            className={`card p-2 m-3 rounded-lg ${
              theme === "dark" ? "bg-light" : "bg-dark"
            } shadow-lg`}
            style={{ width: "18rem" }}
          >
            <img
              className="card-img-top rounded-lg"
              src={`../assets/uploads/${props.folder}/${props.iconnm}`}
              alt={props.iconnm}
              style={{ height: "15rem" }}
            />
            <div className="card-body">
              <h5
                className={`card-title text-center text-uppercase font-bold ${
                  theme === "dark" ? "text-dark" : "text-light"
                }`}
              >
                <strong
                  className={`${theme === "dark" ? "text-dark" : "text-light"}`}
                >
                  {" "}
                  Title{" "}
                </strong>{" "}
                : {props.name}
              </h5>
              <p className={`card-text text-center text-primary`}>
                <strong
                  className={`${theme === "dark" ? "text-dark" : "text-light"}`}
                >
                  {" "}
                  Description{" "}
                </strong>{" "}
                : {props.description}
              </p>
              <p className={`card-text text-center text-primary`}>
                {" "}
                <strong
                  className={`${theme === "dark" ? "text-dark" : "text-light"}`}
                >
                  {" "}
                  Base Price
                </strong>{" "}
                : ₹ {props.baseprice}
              </p>
              <p className={`card-text text-center text-primary`}>
                {" "}
                <strong
                  className={`${theme === "dark" ? "text-dark" : "text-light"}`}
                >
                  {" "}
                  Product Added
                </strong>{" "}
                : {props.timer.slice(0, 24)}
              </p>
              <CountdownTimer createdAt={props.timer} />
              {difference > 0 ? (
                <Link
                  className="btn btn-primary w-100 rounded-lg"
                  to={`/bidproduct/${props._id}`}
                >
                  Bid Running
                </Link>
              ) : (
                <>
                  {bidData.user_email === email ? (
                    <>
                      <p
                        className={`card-text text-center ${
                          theme === "dark" ? "text-dark" : "text-light"
                        }`}
                      >
                        {" "}
                        Bid Price : ₹ {bidData.bidprice}
                      </p>
                      <button
                        className="btn btn-primary w-100 rounded-lg"
                        onClick={buyFunction}
                      >
                        Buy Now
                      </button>
                    </>
                  ) : (
                    <button className="btn btn-primary w-100 rounded-lg">
                      Bid Closed
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <Link
            to={props.path}
            className={`card p-2 m-3 rounded-lg ${
              theme === "dark" ? "bg-light" : "bg-dark"
            } shadow-lg`}
            style={{ width: "18rem" }}
          >
            <img
              className="card-img-top rounded-lg"
              src={`../assets/uploads/${props.folder}/${props.iconnm}`}
              alt={props.iconnm}
              style={{ height: "15rem" }}
            />
            <div className="card-body">
              <h5
                className={`card-title text-center text-uppercase ${
                  theme === "dark" ? "text-dark" : "text-light"
                }`}
              >
                {props.name}
              </h5>
            </div>
          </Link>
        </>
      )}
    </>
  );
}

export default Card;
