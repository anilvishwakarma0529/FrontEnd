import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/VisitorComponents/HomeComponent/Home";
import Footer from "./component/FooterComponent/Footer";
import Header from "./component/HeaderComponent/Header";
import Nav from "./component/NavComponent/Nav";
import About from "./component/VisitorComponents/AboutComponent/About";
import Contact from "./component/VisitorComponents/ContactComponent/Contact";
import Service from "./component/VisitorComponents/ServiceComponent/Service";
import Register from "./component/VisitorComponents/RegisterComponent/Register";
import Login from "./component/VisitorComponents/LoginComponent/Login";
import Adminhome from "./component/AdminComponents/AdminhomeComponent/Adminhome";
import Manageusers from "./component/AdminComponents/ManageusersComponent/Manageusers";
import Changepassword from "./component/AdminComponents/ChangepasswordComponent/Changepassword";
import Editprofile from "./component/AdminComponents/EditprofileComponent/Editprofile";
import Logout from "./component/AdminComponents/LogoutComponent/Logout";
import Userhome from "./component/UserComponents/UserhomeComponent/Userhome";
import AddCategory from "./component/AdminComponents/AddCategoryComponent/AddCategory";
import AddSubCategory from "./component/AdminComponents/AddSubCategoryComponent/AddSubCategory";
import Categories from "./component/UserComponents/CategoriesComponent/Categories";
import SubCategories from "./component/UserComponents/SubCategoriesComponent/SubCategories";
import Verify from "./component/EmailVerifyComponent/EmailVerify";
import AddProduct from "./component/UserComponents/AddProductComponent/AddProduct";
import Product from "./component/UserComponents/ProductComponent/Product";
import BidProductList from "./component/UserComponents/BidProductListComponent/BidProductList";
import BidProduct from "./component/UserComponents/BidProductComponent/BidProduct";
import BiddingDetails from "./component/UserComponents/BiddingDetailsComponent/BiddingDetails";
import EmailVerify from "./component/EmailVerifyComponent/EmailVerify";

function App() {
  return (
    <>
      <Header />

      <Nav />

      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/verify/:email" element={<Verify />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/admin" element={<Adminhome />}></Route>
          <Route path="/manageusers" element={<Manageusers />}></Route>
          <Route path="/addcategory" element={<AddCategory />}></Route>
          <Route path="/addsubcategory" element={<AddSubCategory />}></Route>
          <Route path="/changepassword" element={<Changepassword />}></Route>
          <Route path="/editprofile" element={<Editprofile />}></Route>
          <Route path="/user" element={<Userhome />}></Route>
          <Route path="/verify/:email" element={<EmailVerify />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/bidproductlist" element={<BidProductList />}></Route>
          <Route
            path="/biddingdetails/:p_id"
            element={<BiddingDetails />}
          ></Route>
          <Route path="/bidproduct/:_id" element={<BidProduct />}></Route>
          <Route path="/product/:subcatnm" element={<Product />}></Route>
          <Route
            path="/subcategories/:catnm"
            element={<SubCategories />}
          ></Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
