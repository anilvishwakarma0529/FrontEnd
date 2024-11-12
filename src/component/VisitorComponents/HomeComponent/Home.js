import "./Home.css";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";
import { useContext } from "react";

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* Featured Start */}
      <div className="container-fluid">
        <div
          id="header-carousel"
          className="carousel slide pb-5"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: "550px" }}>
              <img
                className="img-fluid"
                src="./assets/img/banner3.jpeg"
                height="1000"
                width="1366"
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "700px" }}>
                  <h4 className="text-light text-uppercase font-weight-medium mb-3"></h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                    We Provide Solution On Your Products
                  </h3>
                  <a
                    href=""
                    className={`btn py-2 px-3 rounded-lg ${
                      theme == "dark"
                        ? "text-light btn-dark"
                        : "text-dark btn-light"
                    }`}
                  >
                    Buy & Sell Anything
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{ height: "550px" }}>
              <img
                className="img-fluid"
                src="./assets/img/banner4.jpeg"
                height="800"
                width="1366"
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "700px" }}>
                  <h4 className="text-light text-uppercase font-weight-medium mb-3"></h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                    We Provide Solution On Your Products
                  </h3>
                  <a
                    href=""
                    className={`btn py-2 px-3 rounded-lg ${
                      theme == "dark"
                        ? "text-light btn-dark"
                        : "text-dark btn-light"
                    }`}
                  >
                    Buy & Sell Anything
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#header-carousel"
            data-slide="prev"
          >
            <div
              className="btn btn-dark"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >
            <div
              className="btn btn-dark"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>

      {/* Vendor End */}
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-lg-12 py-6 px-5">
            <h1
              class={`display-5 mb-4 ${
                theme == "dark" ? "text-light" : "text-dark"
              }`}
            >
              Welcome To <span class="text-primary">E Auction , Home</span>
            </h1>
            <p
              style={{ "text-align": "justify" }}
              class={`mb-4 ${theme == "dark" ? "text-light" : "text-dark"}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              dicta, incidunt quisquam, sunt nesciunt accusantium cumque beatae
              vitae autem voluptatum eum illum necessitatibus. Dolore fuga
              natus, libero dolor officia nam facere tempora delectus fugit
              omnis temporibus reprehenderit ea beatae numquam. Praesentium,
              laudantium esse debitis voluptate sequi minima inventore dolores
              dolore, earum repellat magni fuga illo eius assumenda consequatur
              aperiam totam saepe, natus nemo voluptatem veniam alias possimus
              qui? Aliquam corrupti distinctio quo est harum, velit totam facere
              repellat eaque quibusdam, esse recusandae hic numquam repellendus.
              Libero voluptatem aliquid laudantium placeat? Maxime, eaque, iure
              neque sint sapiente officiis ea nemo aut facere voluptatem sequi
              id a numquam beatae deleniti quibusdam sit enim sunt tempore
              aliquid possimus eveniet ipsum suscipit. Id distinctio recusandae
              esse provident voluptas nulla facilis. Aut tempore amet
              perferendis corporis modi deleniti dolorum placeat laboriosam
              inventore, eaque eum aliquam? Sit maxime vero repudiandae quas ab
              eaque perferendis! Perferendis possimus sequi amet in maiores
              nesciunt dolorem reprehenderit aliquid alias nemo nulla minus
              incidunt sunt ducimus voluptate, suscipit voluptatum nobis iusto
              eligendi, inventore enim itaque voluptatibus velit cupiditate!
              Voluptatum facere alias commodi optio fugit. Itaque ab laborum,
              sint minus recusandae minima natus iure error praesentium sunt
              enim doloribus modi. Doloremque, numquam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
