import React from "react";
import "./../assets/styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} TaskMaster. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
