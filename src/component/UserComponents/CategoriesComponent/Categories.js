import { useContext, useEffect, useState } from "react";
import "./Categories.css";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import Card from "../CardComponent/Card";
import axios from "axios";
import { FetchCategoryApiUrl } from "../../APIURL/apiUrl";

function Categories() {
  const { theme } = useContext(ThemeContext);
  const [cList, setCList] = useState([]);

  useEffect(() => {
    axios
      .get(FetchCategoryApiUrl)
      .then((response) => {
        console.log(response.data);
        setCList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <span className="text-primary">View Categories</span> Here !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Userhome</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Categories</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      <div className="d-flex flex-wrap px-xl-5 mb-5 justify-content-center">
        {/* <div className="d-none d-lg-block"> */}
        {cList.map((row) => (
          <Card
            iconnm={row.caticonnm}
            name={row.catnm}
            folder="caticon"
            path={`/subcategories/${row.catnm}`}
          />
        ))}
        {/* </div> */}
      </div>
    </>
  );
}

export default Categories;
