import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUserRole";
import { useNavigate } from "react-router-dom";

const Usernavbar = ()=>{
    const info = useUser();
    const navigate = useNavigate();
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            style={{ width: "100%" }}
          >
            <div className="navbar-nav" style={{ width: "100%" }}>
              <Link className="nav-link active" to="/usertrainerlist">
                Trainers
              </Link>
              <Link className="nav-link active" to="/userprogramlist">
                Programs
              </Link>
              <Link className="nav-link active" to="/membershipregister">
                Membership Registration
              </Link>
              <Link className="nav-link active" to="/membership/view">
              Membership List
              </Link>
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
    )
}
export default Usernavbar;