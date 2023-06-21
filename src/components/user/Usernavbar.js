import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUserRole";
import { useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const info = useUser();
  const navigate = useNavigate();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/usernav">
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
          <div className="navbar-nav mr-auto">
            <Link className="nav-link" to="/usertrainerlist">
              Trainers
            </Link>
            <Link className="nav-link" to="/userprogramlist">
              Programs
            </Link>
            <Link className="nav-link" to="/membershipregister">
              Membership Registration
            </Link>
            <Link className="nav-link" to="/membership/view">
              Membership List
            </Link>
          </div>
          <div className="navbar-nav ml-auto">
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

export default UserNavbar;
