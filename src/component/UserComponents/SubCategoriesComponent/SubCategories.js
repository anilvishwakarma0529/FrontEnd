import { useContext, useEffect, useState } from "react";
import "./SubCategories.css";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import Card from "../CardComponent/Card";
import axios from "axios";
import { FetchSubCategoryApiUrl } from "../../APIURL/apiUrl";
import { useParams } from "react-router-dom";

function SubCategories() {
  const { theme } = useContext(ThemeContext);
  const [subcatList, setSubCatList] = useState([]);
  const { catnm } = useParams();

  useEffect(() => {
    var condition_obj = { catnm: catnm };
    axios
      .get(FetchSubCategoryApiUrl, {
        params: {
          condition_obj: condition_obj,
        },
      })
      .then((response) => {
        setSubCatList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [catnm]);

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
            <span className="text-primary">View Sub Categories</span> Here !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Userhome</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Sub Categories</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      <h2
        className={`text-center text-uppercase ${
          theme === "dark" ? "text-light" : "text-dark"
        }`}
      >
        Category : {catnm}
      </h2>
      <div className="d-flex flex-wrap px-xl-5 mb-5 justify-content-center">
        {/* <div className="d-none d-lg-block"> */}
        {subcatList.map((row) => (
          <Card
            iconnm={row.subcaticonnm}
            name={row.subcatnm}
            folder="subcaticon"
            path={`/product/${row.subcatnm}`}
          />
        ))}
        {/* </div> */}
      </div>
    </>
  );
}

export default SubCategories;
