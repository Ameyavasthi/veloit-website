import { Layers, ShieldCheck, Cloud, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import '../styles/WhyChooseUs.css';

const features = [
    {
        icon: <Layers size={28} />,
        title: "Scalable Architecture",
        desc: "Start lean and scale to petabytes of throughput. Our microservices approach ensures elasticity."
    },
    {
        icon: <ShieldCheck size={28} />,
        title: "Enterprise Security",
        desc: "Zero-trust environments, End-to-end encryption, and robust access management by default."
    },
    {
        icon: <Cloud size={28} />,
        title: "Cloud Native Design",
        desc: "Agnostic deployment across AWS, GCP, Azure, or on-premise clusters with Kubernetes."
    },
    {
        icon: <Zap size={28} />,
        title: "Rapid Deployment",
        desc: "From initial prototype to production API in weeks, not months, utilizing our internal SDKs."
    }
];

const WhyChooseUs = () => {
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.why-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-slide-up');
                        }, index * 150);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (triggerRef.current) {
            observer.observe(triggerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="why-section">
            <div className="section-container">
                <h2 className="section-title"><span className="text-gradient">Why Choose</span> Veloit</h2>
                <p className="section-subtitle">We build infrastructure that stands the test of scale and time.</p>
                <div className="why-grid" ref={triggerRef}>
                    {features.map((ft, idx) => (
                        <div key={idx} className="why-card glass-panel" style={{ opacity: 0 }}>
                            <div className="why-icon text-gradient">{ft.icon}</div>
                            <h3 className="why-title">{ft.title}</h3>
                            <p className="why-desc">{ft.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
