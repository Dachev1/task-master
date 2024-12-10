import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./../assets/styles/Home.css";
import homePageImage from "./../assets/images/homePage.png"; // Import the image

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <main className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Landing Page for Developers & Startups</h1>
                        <p>
                            Beautifully designed templates using React.js, Ant Design, and Styled Components!
                            Save weeks of time and build your landing page in minutes.
                        </p>
                        <div className="cta-buttons">
                            <button className="explore-btn">Explore</button>
                            <button className="learn-more-btn">Learn More</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={homePageImage} alt="Landing Page Illustration" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
