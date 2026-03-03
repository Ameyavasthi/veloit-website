import { FormEvent, useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="section-container">
                <h2 className="section-title">Ready to <span className="text-gradient">Innovate?</span></h2>
                <p className="section-subtitle">Reach out to our strategic engineering team for a technical consultation.</p>

                <div className="contact-form-wrapper glass-panel">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" placeholder="John Doe" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company</label>
                                <input id="company" type="text" placeholder="Enterprise Corp" className="form-input" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Directory</label>
                            <input id="email" type="email" placeholder="john@company.com" className="form-input" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="details">Project Details</label>
                            <textarea id="details" placeholder="Describe your architecture challenges..." rows={4} className="form-input form-textarea"></textarea>
                        </div>

                        <button type="submit" className={`btn btn-primary submit-btn ${isSubmitted ? 'submitted' : ''}`}>
                            {isSubmitted ? '✔ Message Received' : 'Initialize Connection'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
