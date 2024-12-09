import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    TaskMaster<span className="dot">.</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Product
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="#">
                                        Feature 1
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">
                                        Feature 2
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Company
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Jobs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Contacts
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-buttons">
                        <Link className="btn btn-outline" to="/login">
                            Log In
                        </Link>
                        <Link className="btn btn-gradient" to="/register">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
