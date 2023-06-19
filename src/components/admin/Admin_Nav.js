import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUserRole";
import { useNavigate } from "react-router-dom";
const AdminNav = () => {
  const info = useUser();
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            PowerHouse Fitness
          </a>
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
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            style={{ width: "100%" }}
          >
            <div className="navbar-nav" style={{ width: "100%" }}>
              <Link className="nav-link active" to="/trainerlist">
                Trainers List
              </Link>
              <Link className="nav-link active" to="/membership/view">
                Membership List
              </Link>
              <Link to="/userlist" className="nav-link active">
                User List
              </Link>
              <Link className="nav-link active" to="/programlist">
                Program List
              </Link>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle active"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
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
              <div style={{ marginLeft: "auto" }}>
                <Link
                  className="nav-link active "
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
        </div>
      </nav>
    </>
  );
};
export default AdminNav;
