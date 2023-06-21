import { useUser } from "../hooks/useUserRole";
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/dashboard">
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
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/workouts">
                Workouts
              </Link>
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
              <div className="d-flex">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
                {info.isLoggedIn && (
                  <Link className="nav-link" onClick={onLogoutHandler}>
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
