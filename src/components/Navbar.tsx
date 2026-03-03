import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="navbar-logo">VELOIT</a>

                <div className="navbar-links">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#solutions" className="nav-link">Solutions</a>
                    <a href="#innovation-lab" className="nav-link">Innovation Lab</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>

                <button className="navbar-mobile-toggle">
                    {/* Mobile menu toggle placeholder */}
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
