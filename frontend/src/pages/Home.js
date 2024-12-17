import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Typography, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/Home.css';
import banner from '../assets/images/banner.png';

const features = [
    { title: 'Smart Task Management', description: 'Boost productivity and simplify your work.' },
    { title: 'Seamless Collaboration', description: 'Work seamlessly with your team.' },
    { title: 'Insightful Analytics', description: 'Track progress and make data-driven decisions.' },
];

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, []);

    return (
        <>
            <Navbar />
            <Box className="hero-section">
                <Box className="hero-content">
                    <Typography variant="h1" className="hero-title" data-aos="fade-up">
                        Redefine How You Work with <span className="highlight">TaskMaster</span>
                    </Typography>
                    <Typography variant="body1" className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
                        Organize, collaborate, and analyze with ease. TaskMaster helps you achieve your goals faster.
                    </Typography>
                    <Box className="button-container" data-aos="fade-up" data-aos-delay="400">
                        <Button variant="contained" size="large" className="hero-button" color="primary">
                            Get Started
                        </Button>
                        <Button variant="outlined" size="large" className="hero-button" color="secondary">
                            Learn More
                        </Button>
                    </Box>
                </Box>
                <Box className="hero-image-container" data-aos="zoom-in">
                    <img src={banner} alt="TaskMaster Productivity" className="hero-image" />
                </Box>
            </Box>
            <Box className="features-container">
                {features.map((feature, index) => (
                    <Box className="feature-card" data-aos="fade-up" data-aos-delay={index * 200} key={feature.title}>
                        <Typography variant="h6">{feature.title}</Typography>
                        <Typography variant="body1">{feature.description}</Typography>
                    </Box>
                ))}
            </Box>
            <Footer />
        </>
    );
};

export default Home;
