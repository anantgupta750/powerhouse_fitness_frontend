import { useUser } from "../hooks/useUserRole";
import "./css/Navbar.css";
// import Login from './Login';
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const info = useUser();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    info?.logout();
    navigate("/dashboard");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/dashboard">
            PowerHouse Fitness
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav" style={{ width: "100%" }}>
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
              <Link className="nav-link active" to="/workouts">
                Workouts
              </Link>
              <Link className="nav-link active" to="/contactus">
                Contact Us
              </Link>
              <div style={{ display: "flex", marginLeft: "auto" }}>
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
                <Link className="nav-link active" to="/register">
                  Register
                </Link>

                {info.isLoggedIn && (
                  <Link className="nav-link active" onClick={onLogoutHandler}>
                    Logout
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
