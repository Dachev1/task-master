import React from 'react';
import '../assets/styles/Home.css';

function Home() {
    return (
        <div className="hero">
            <div className="container text-center">
                <h1 className="hero-title">Create Your Tasks Efficiently</h1>
                <p className="hero-subtitle">
                    Revolutionizing task management with streamlined workflows, deadlines, and progress tracking.
                </p>
                <div className="hero-buttons">
                    <a href="/register" className="btn btn-primary btn-lg">Get Started</a>
                    <a href="#features" className="btn btn-outline-light btn-lg">See How It Works</a>
                </div>
            </div>
        </div>
    );
}

export default Home;
