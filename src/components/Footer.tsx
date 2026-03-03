import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container section-container">
                <div className="footer-brand">
                    <h3 className="footer-logo">VELOIT</h3>
                    <p className="footer-desc">
                        Engineering the next generation of intelligent digital systems. Transforming complex challenges into seamless infrastructure.
                    </p>
                </div>

                <div className="footer-links-group">
                    <h4>Platform</h4>
                    <a href="#solutions">Solutions</a>
                    <a href="#innovation-lab">Innovation Lab</a>
                    <a href="#case-studies">Case Studies</a>
                </div>

                <div className="footer-links-group">
                    <h4>Company</h4>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>

            <div className="footer-bottom section-container">
                <p>&copy; {new Date().getFullYear()} Veloit Technologies. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="#">TW</a>
                    <a href="#">LI</a>
                    <a href="#">GH</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
