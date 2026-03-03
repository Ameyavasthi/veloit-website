import { FlaskConical } from 'lucide-react';
import '../styles/InnovationLab.css';

const InnovationLab = () => {
    return (
        <section id="innovation-lab" className="lab-section">
            <div className="section-container lab-container">
                <div className="lab-content">
                    <div className="lab-badge glass-panel animate-fade-in">
                        <FlaskConical size={16} className="text-gradient" />
                        <span>Veloit Innovation Lab</span>
                    </div>
                    <h2 className="section-title text-left animate-slide-up delay-100">
                        Pioneering the <br />
                        <span className="text-gradient title-highlight">Unknown</span>
                    </h2>
                    <p className="lab-desc animate-slide-up delay-200">
                        The Veloit Innovation Lab is our dedicated research and development hub. Here, our engineers and data scientists build prototypes, explore emerging AI paradigms, and test experimental architectures before they hit the enterprise market.
                    </p>
                    <ul className="lab-features animate-slide-up delay-300">
                        <li>Experimental AI research & foundation models</li>
                        <li>Rapid prototype building for edge cases</li>
                        <li>Emerging tech exploration (Quantum ML, Neuromorphic structures)</li>
                    </ul>
                    <div className="animate-fade-in delay-400">
                        <a href="#about" className="btn btn-secondary glass-panel mt-2">Explore Our Research</a>
                    </div>
                </div>

                <div className="lab-visual">
                    <div className="abstract-shape shape-1 glass-panel"></div>
                    <div className="abstract-shape shape-2 glass-panel"></div>
                    <div className="glass-panel lab-stat-card">
                        <span className="stat-number text-gradient">15+</span>
                        <span className="stat-label">Active Patents</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationLab;
