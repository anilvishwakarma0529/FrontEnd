import { useContext, useState, useEffect } from "react";
import "./AddProduct.css";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import axios from "axios";
import {
  SaveProductApiUrl,
  FetchCategoryApiUrl,
  FetchSubCategoryApiUrl,
} from "../../APIURL/apiUrl";
import Alert from "../../AlertComponent/Alert";

function AddProduct() {
  const { theme } = useContext(ThemeContext);
  const [title, setTitle] = useState();
  const [categorynm, setCategorynm] = useState();
  const [subcategorynm, setSubCategorynm] = useState();
  const [description, setDescription] = useState();
  const [baseprice, setBaseprice] = useState();
  const [file, setFile] = useState();
  const [alertOutput, setAlertOutput] = useState(false);
  const [cList, setCList] = useState([]);
  const [scList, setSCList] = useState([]);

  useEffect(() => {
    axios
      .get(FetchCategoryApiUrl)
      .then((response) => {
        // console.log(response.data);
        setCList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (categorynm) {
      var condition_obj = { catnm: categorynm };
      axios
        .get(FetchSubCategoryApiUrl, {
          params: {
            condition_obj: condition_obj,
          },
        })
        .then((response) => {
          setSCList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categorynm]);

  const handleProductIcon = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAddProduct = () => {
    var formData = new FormData();

    formData.append("title", title);
    formData.append("catnm", categorynm);
    formData.append("subcatnm", subcategorynm);
    formData.append("description", description);
    formData.append("baseprice", baseprice);
    formData.append("useremail", localStorage.getItem("email"));
    formData.append("producticon", file);

    const config = {
      "content-type": "multipart/form-data",
    };

    axios
      .post(SaveProductApiUrl, formData, config)
      .then((response) => {
        console.log(response);
        setAlertOutput(true);
        setTimeout(() => {
          setAlertOutput(false);
        }, 4000);
        setTitle("");
        setCategorynm("");
        setSubCategorynm("");
        setDescription("");
        setBaseprice("");
        document.getElementById("myfile").value = "";
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <span className="text-primary">Add Product</span> Here !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Userhome</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Add Product</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {alertOutput && (
        <Alert type="success" message="Product Added Successfully..." />
      )}

      <div
        className={`register-form2 ${
          theme == "dark" ? "bg-dark" : "bg-secondary"
        } mb-5`}
      >
        <form action="">
          <div className="row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                className="form-control border-0 py-4"
                placeholder="Title"
                required="required"
                // disabled={disableCurrent}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group col-sm-6">
              <select
                id="option"
                className="form-control border-0 px-2"
                required="required"
                value={categorynm}
                onChange={(e) => setCategorynm(e.target.value)}
              >
                <option>Select Category</option>
                {cList.map((row) => (
                  <option>{row.catnm}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <select
                id="option"
                className="form-control border-0 px-2"
                required="required"
                value={subcategorynm}
                onChange={(e) => setSubCategorynm(e.target.value)}
              >
                <option>Select Sub Category</option>
                {scList.map((row) => (
                  <option>{row.subcatnm}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-sm-6">
              <input
                type="text"
                className="form-control border-0 py-4"
                placeholder="Description"
                required="required"
                // disabled={disableCurrent}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                className="form-control border-0 py-4"
                placeholder="Base Price"
                required="required"
                // disabled={disableCurrent}
                value={baseprice}
                onChange={(e) => setBaseprice(e.target.value)}
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="file"
                id="myfile"
                className="form-control border-0 h-100"
                placeholder="Product Icon"
                required="required"
                // disabled={!enableNew}
                // value={file}
                // onFocus={() => handleNewFocus()}
                onChange={handleProductIcon}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <button
                className="btn btn-primary btn-block border-0 py-3 rounded-lg font-weight-bold"
                id="addproductbtn"
                type="button"
                // disabled={
                //   !currentPass ||
                //   !newPassword ||
                //   !cnewPassword ||
                //   cnewPassword != newPassword
                // }
                onClick={() => handleAddProduct()}
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
