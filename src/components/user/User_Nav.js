const UserNav = () => {
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">
                Trainers
              </a>
              <a className="nav-link active" href="#">
                Membership Registration
              </a>
              <a className="nav-link active" href="#">
                Contact Us
              </a>
              <div className="right">
                <a className="nav-link active  ">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default UserNav;
