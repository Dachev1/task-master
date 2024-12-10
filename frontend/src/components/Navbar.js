import React, { useState } from "react";
import "./../assets/styles/Navbar.css";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="/">TaskMaster</a>
                </div>
                <nav className="nav-links-container">
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li
                            className="dropdown"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <a href="#features">Features</a>
                            <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                                <li><a href="#goals">Goals</a></li>
                                <li><a href="#tasks">Tasks</a></li>
                                <li><a href="#kanban">Kanban Dashboard</a></li>
                            </ul>
                        </li>
                        <li><a href="#register">Register</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </nav>
                <button className="contact-button">Contact</button>
            </div>
        </header>
    );
};

export default Navbar;
