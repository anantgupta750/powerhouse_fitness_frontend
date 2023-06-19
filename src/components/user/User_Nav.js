import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUserRole";

const UserNav = () => {
  const info = useUser();
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
              <a className="nav-link active" href="#">
                Trainers
              </a>
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
export default UserNav;
