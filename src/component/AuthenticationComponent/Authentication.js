import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const navigate = useNavigate();

  useEffect(() => {
    var path = window.location.pathname;

    if (path === "/admin" || path === "/manageusers") {
      if (
        !localStorage.getItem("token") ||
        localStorage.getItem("role") != "admin"
      )
        navigate("/logout");
    } else if (path === "/user") {
      if (
        !localStorage.getItem("token") ||
        localStorage.getItem("role") != "user"
      )
        navigate("/logout");
    } else {
      if (localStorage.getItem("role") == "admin") navigate("/admin");
      else if (localStorage.getItem("role") == "user") navigate("/user");
      else navigate("/");
    }
  }, []);

  return <></>;
}

export default Authentication;