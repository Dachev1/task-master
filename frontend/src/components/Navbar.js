import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f9f9f9', boxShadow: 'none' }}>
      <Toolbar className="navbar-toolbar">
        <Box>
          <Link to="/" className="navbar-logo-link" data-aos="fade-down">
            <svg
              className="navbar-logo"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v18M7 3h10c.833 0 1.667.333 2.5 1 .833.667 1.667 1.667 2.5 3v12c-.833-1.333-1.667-2.333-2.5-3s-1.667-1-2.5-1H7V3z"
              />
            </svg>
          </Link>
        </Box>
        <Box className="navbar-links">
          <Button className="navbar-link" data-aos="fade-down" data-aos-delay="200">
            About
          </Button>
          <Button className="navbar-link" data-aos="fade-down" data-aos-delay="300">
            Features
          </Button>
          <Button className="navbar-link" data-aos="fade-down" data-aos-delay="400">
            Contact
          </Button>
          <Button className="navbar-link" data-aos="fade-down" data-aos-delay="500">
            Log In
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="navbar-signup-button"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
