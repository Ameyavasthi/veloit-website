import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import InnovationLab from './components/InnovationLab'
import CaseStudies from './components/CaseStudies'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Hero />
                <Solutions />
                <InnovationLab />
                <CaseStudies />
                <WhyChooseUs />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
