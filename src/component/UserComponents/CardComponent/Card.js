import { useContext } from "react";
import "./Card.css";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import { Link } from "react-router-dom";
import CountdownTimer from "../CountdownTimerComponent/CountdownTimer";

function Card(props) {
  const { theme } = useContext(ThemeContext);
  const now = new Date();
  const endTime = new Date(
    new Date(props.timer).getTime() + 48 * 60 * 60 * 1000
  );
  const difference = endTime - now;
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
                className={`card-title text-center text-uppercase ${
                  theme === "dark" ? "text-dark" : "text-light"
                }`}
              >
                Title : {props.name}
              </h5>

              <p
                className={`card-text text-center ${
                  theme === "dark" ? "text-dark" : "text-light"
                }`}
              >
                Description : {props.description}
              </p>
              <p
                className={`card-text text-center ${
                  theme === "dark" ? "text-dark" : "text-light"
                }`}
              >
                {" "}
                Base Price : ₹ {props.baseprice}
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
                <Link className="btn btn-primary w-100 rounded-lg" to="#">
                  Bid Closed
                </Link>
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
