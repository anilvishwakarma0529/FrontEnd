import { useContext, useState, useEffect } from "react";
import "./AddSubCategory.css";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import axios from "axios";
import {
  FetchCategoryApiUrl,
  SaveSubCategoryApiUrl,
} from "../../APIURL/apiUrl";

function AddCategory() {
  const { theme } = useContext(ThemeContext);
  const [cList, setCList] = useState([]);
  const [categorynm, setCategorynm] = useState();
  const [subCategorynm, setSubCategorynm] = useState();
  const [file, setFile] = useState();
  const [output, setOutput] = useState();

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

  const handleSubCategoryIcon = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAddSubCategory = () => {
    var formData = new FormData();

    formData.append("catnm", categorynm);
    formData.append("subcatnm", subCategorynm);
    formData.append("subcaticon", file);

    const config = {
      "content-type": "multipart/form-data",
    };

    axios
      .post(SaveSubCategoryApiUrl, formData, config)
      .then((response) => {
        setOutput(response.data.status);
        setTimeout(() => {
          setOutput("");
        }, 3000);
        setCategorynm("");
        setSubCategorynm("");
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
            <span className="text-primary">Add Sub Category</span> Here !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Admin Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Add Sub Category</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      <h5 className="text-success text-center">{output}</h5>
      <div className="d-flex align-items-center justify-content-center mb-5">
        <div
          className={`login-form ${
            theme == "dark" ? "bg-dark" : "bg-secondary"
          }`}
        >
          <form action="">
            <div className="row">
              <div className="form-group col-sm-12">
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
              <div className="form-group col-sm-12">
                <input
                  type="text"
                  className="form-control border-0 py-4"
                  placeholder="Sub Category Name"
                  required="required"
                  // disabled={disableCurrent}
                  value={subCategorynm}
                  onChange={(e) => setSubCategorynm(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-12">
                <input
                  type="file"
                  id="myfile"
                  className="form-control border-0 h-100"
                  placeholder="Category Icon"
                  required="required"
                  // disabled={!enableNew}
                  // value={file}
                  // onFocus={() => handleNewFocus()}
                  onChange={handleSubCategoryIcon}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <button
                className="btn btn-primary btn-block border-0 py-3 rounded-lg font-weight-bold"
                id="addcatbtn"
                type="button"
                // disabled={
                //   !currentPass ||
                //   !newPassword ||
                //   !cnewPassword ||
                //   cnewPassword != newPassword
                // }
                onClick={() => handleAddSubCategory()}
              >
                Add Sub Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
