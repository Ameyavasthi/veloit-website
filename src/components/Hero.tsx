import { ArrowRight, Calendar } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <div className="hero" id="home">
            {/* Background elements */}
            <div className="hero-bg-glow glow-1"></div>
            <div className="hero-bg-glow glow-2"></div>
            <div className="hero-grid"></div>

            <div className="hero-content section-container">
                <div className="hero-badge glass-panel animate-fade-in">
                    <span className="badge-dot"></span>
                    Next-Generation AI Infrastructure
                </div>

                <h1 className="hero-title animate-slide-up delay-100">
                    Engineering Intelligent <br />
                    <span className="text-gradient">Digital Systems</span>
                </h1>

                <p className="hero-subtitle animate-slide-up delay-200">
                    We design AI-powered platforms that transform complex challenges into scalable, future-ready solutions. Drive unprecedented growth and automation for your enterprise.
                </p>

                <div className="hero-cta animate-fade-in delay-300">
                    <a href="#solutions" className="btn btn-primary">
                        Explore Solutions
                        <ArrowRight size={18} className="btn-icon" />
                    </a>
                    <a href="#contact" className="btn btn-secondary glass-panel">
                        <Calendar size={18} className="btn-icon-left" />
                        Schedule Consultation
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
