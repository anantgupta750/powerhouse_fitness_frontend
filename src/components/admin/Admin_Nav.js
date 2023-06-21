import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUserRole";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {
  const info = useUser();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
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
          <div className="navbar-nav ml-auto">
            <Link className="nav-link" to="/trainerlist">
              Trainers List
            </Link>
            <Link className="nav-link" to="/membership/view">
              Membership List
            </Link>
            <Link className="nav-link" to="/userlist">
              User List
            </Link>
            <Link className="nav-link" to="/programlist">
              Program List
            </Link>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Register
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/Trainerregister">
                  Trainer
                </Link>
                <Link className="dropdown-item" to="/programregister">
                  Program
                </Link>
              </div>
            </li>
            <Link
              className="nav-link"
              onClick={() => {
                info.logout();
                navigate("/");
              }}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
