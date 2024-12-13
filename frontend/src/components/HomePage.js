import React from 'react';
import {useNavigate} from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/profile-customization');
    };

    return (
        <div className="homepage">
            {/* Header with Navbar */}
            <header className="header">
                <div className="logo">Profile Customizer</div>
                <nav className="navbar">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="/profile-customization">Customize</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <main id="home" className="hero">
                <div className="hero-content">
                    <h1>Your Dream Profile</h1>
                    <p>Create a profile and customize it.</p>
                    <div className="cta">
                        <button onClick={handleNavigation}>Get Started</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/chillbackend.png" alt="Profile Customizer" width="400" height="400"/>
                </div>
            </main>

            {/* Features Section */}
            <section id="features" className="features">
                <h2>Features</h2>
                <ul>
                    <li>Customize your profile with colors.</li>
                    <li>Preview your profile.</li>
                </ul>
            </section>

            {/* Footer */}
            <footer id="contact" className="footer">
                <p>Contact: <a href="mailto:profilecostumizer@support.ch">profilecostumizer@support.ch</a></p>
                <p>© 2024 Profile Customizer. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;