import { ExternalLink } from 'lucide-react';
import '../styles/CaseStudies.css';

const studies = [
    {
        title: "Fintech AI Platform",
        desc: "Deployed a high-frequency trading prediction engine that reduced latency by 45% and increased portfolio yield.",
        imageClass: "cs-bg-fintech"
    },
    {
        title: "Healthcare Prediction System",
        desc: "Built a diagnostic aid system using deep learning to identify anomalies in thousands of medical scans hourly.",
        imageClass: "cs-bg-health"
    },
    {
        title: "Smart Manufacturing Dashboard",
        desc: "Integrated predictive maintenance IoT models across 50+ factory floors, cutting downtime by 30%.",
        imageClass: "cs-bg-mfg"
    }
];

const CaseStudies = () => {
    return (
        <section id="case-studies" className="cs-section">
            <div className="section-container">
                <h2 className="section-title">Case <span className="text-gradient">Studies</span></h2>
                <p className="section-subtitle">Real-world applications of our AI infrastructure driving measurable business value.</p>

                <div className="cs-grid">
                    {studies.map((study, idx) => (
                        <div key={idx} className={`cs-card ${study.imageClass} animate-slide-up delay-${(idx + 1) * 100}`}>
                            <div className="cs-content glass-panel">
                                <h3 className="cs-title">{study.title}</h3>
                                <p className="cs-desc">{study.desc}</p>
                                <a href="#contact" className="btn-link" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    View Case Study <ExternalLink size={16} className="ml-2" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
