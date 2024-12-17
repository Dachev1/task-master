import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main', boxShadow: 'none' }}>
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
          {['About', 'Features', 'Contact', 'Log In'].map((text, index) => (
            <Button
              key={text}
              className="navbar-link"
              color="secondary"
              data-aos="fade-down"
              data-aos-delay={`${200 + index * 100}`}
            >
              {text}
            </Button>
          ))}
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
