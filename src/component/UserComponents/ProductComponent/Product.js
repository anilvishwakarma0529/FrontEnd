import { useContext, useEffect, useState } from "react";
import "./Product.css";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import Card from "../CardComponent/Card";
import axios from "axios";
import { FetchProductApiUrl } from "../../APIURL/apiUrl";
import { useParams } from "react-router-dom";

function Product() {
  const { theme } = useContext(ThemeContext);
  const [pList, setPList] = useState([]);
  const { subcatnm } = useParams();

  useEffect(() => {
    var condition_obj = { subcatnm: subcatnm };
    axios
      .get(FetchProductApiUrl, {
        params: {
          condition_obj: condition_obj,
        },
      })
      .then((response) => {
        setPList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [subcatnm]);

  return (
    <>
      {/* Page Header Start */}
      <div
        className={`container-fluid ${
          theme === "dark" ? "bg-dark" : "bg-secondary"
        } mb-5`}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "150px" }}
        >
          <h1
            className={`font-weight-semi-bold text-uppercase mb-3 ${
              theme === "dark" ? "text-light" : "text-dark"
            }`}
          >
            <span className="text-primary">View Product</span> Here !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Userhome</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Product</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      <h2
        className={`text-center text-uppercase ${
          theme === "dark" ? "text-light" : "text-dark"
        }`}
      >
        Sub Category : {subcatnm}
      </h2>
      <div className="d-flex flex-wrap px-xl-5 mb-5 justify-content-center">
        {/* <div className="d-none d-lg-block"> */}
        {pList.map((row) => (
          <Card
            iconnm={row.piconnm}
            name={row.title}
            folder="producticon"
            path="#"
            description={row.description}
            baseprice={row.baseprice}
            _id={row._id}
            timer={row.info}
          />
        ))}

        {/* </div> */}
      </div>
    </>
  );
}

export default Product;
