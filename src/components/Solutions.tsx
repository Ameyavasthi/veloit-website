import { Brain, Cpu, Network, Database } from 'lucide-react';
import '../styles/Solutions.css';

const solutionsData = [
    {
        icon: <Brain className="solution-icon" size={32} />,
        title: "AI Product Development",
        description: "End-to-end design and deployment of bespoke AI applications tailored to your business needs."
    },
    {
        icon: <Cpu className="solution-icon" size={32} />,
        title: "Machine Learning Systems",
        description: "Robust ML pipelines and models structured for scale, accuracy, and real-time inference."
    },
    {
        icon: <Network className="solution-icon" size={32} />,
        title: "Intelligent Automation",
        description: "Automate complex workflows and cognitive tasks using state-of-the-art intelligent agents."
    },
    {
        icon: <Database className="solution-icon" size={32} />,
        title: "Data Engineering & Analytics",
        description: "High-performance data architectures that turn raw information into strategic foresight."
    }
];

const Solutions = () => {
    return (
        <section id="solutions" className="solutions-section">
            <div className="section-container">
                <h2 className="section-title">Core <span className="text-gradient">Solutions</span></h2>
                <p className="section-subtitle">
                    We build enterprise-grade systems capable of transforming vast data into actionable intelligence and automated workflows.
                </p>

                <div className="solutions-grid">
                    {solutionsData.map((sol, index) => (
                        <div key={index} className="solution-card glass-panel">
                            <div className="icon-wrapper glass-panel">
                                {sol.icon}
                            </div>
                            <h3 className="solution-title">{sol.title}</h3>
                            <p className="solution-desc">{sol.description}</p>

                            <div className="card-hover-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
