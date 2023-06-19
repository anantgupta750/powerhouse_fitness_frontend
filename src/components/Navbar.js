import './css/Navbar.css'
import Login from './Login';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

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
                            <a className="nav-link active" aria-current="page" href="#">About</a>
                            <a className="nav-link active" href="#">Workouts</a>
                            <a className="nav-link active" href="#">Contact Us</a>
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