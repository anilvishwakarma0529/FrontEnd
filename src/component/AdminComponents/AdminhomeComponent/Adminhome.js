import { useContext } from "react";
import "./Adminhome.css";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";

function Adminhome() {
  const { theme } = useContext(ThemeContext);
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
          style={{ "min-height": "150px" }}
        >
          <h1
            className={`font-weight-semi-bold text-uppercase mb-3 ${
              theme == "dark" ? "text-light" : "text-dark"
            }`}
          >
            <span className="text-primary">Admin</span> Panel !!!
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Admin Home</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-lg-12 py-6 px-5">
            <h1
              class={`display-5 mb-4 ${
                theme == "dark" ? "text-light" : "text-dark"
              }`}
            >
              Welcome To{" "}
              <span class="text-primary">E Auction , Admin Home</span>
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

export default Adminhome;
