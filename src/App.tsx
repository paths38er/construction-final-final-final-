import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyJothom from './components/WhyJothom';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProjectInquiry from './pages/ProjectInquiry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
            <Hero />
            <WhoWeAre />
            <Services />
            <Portfolio />
            <WhyJothom />
            <Testimonials />
            <CTA />
            <Footer />
          </div>
        } />
        <Route path="/project-inquiry" element={
          <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
            <ProjectInquiry />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
