import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Clients } from './components/Clients';
import { Services } from './components/Services';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SectorsPage from './pages/SectorsPage';
import GalleryPage from './pages/GalleryPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function Home() {
  return (
    <div className="size-full bg-[#FAF8F5] overflow-x-hidden">
      <Header />
      <Hero />
      <Clients />
      <Services />
      <About />
      <Projects />
      <CTA />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/sectors"  element={<SectorsPage />} />
        <Route path="/gallery"  element={<GalleryPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact"  element={<ContactPage />} />
        <Route path="/privacy"  element={<PrivacyPage />} />
        <Route path="/terms"    element={<TermsPage />} />
      </Routes>
    </>
  );
}
