import './css/Navbar.css'
// import Login from './Login';
import {  Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">PowerHouse Fitness</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            <Link className="nav-link active" href="workouts">Workouts</Link>
                            <Link className="nav-link active" href="#">Contact Us</Link>
                            <Link className="nav-link active" to="/login">Login</Link>
                            <Link className="nav-link active" to="/register">Register</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;