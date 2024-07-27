import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import SkillsSection from './components/SkillsSection';
import CertificateSection from './components/CertificateSection';
import '@fortawesome/fontawesome-free/css/all.css';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Anggaplah data selesai dimuat dalam 2 detik
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'Home';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className={`loader ${loading ? '' : 'hidden'}`}>
        <div className="spinner"></div>
      </div>
      <Header activeSection={activeSection} />
      <HomeSection />
      <SkillsSection />
      <CertificateSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      {/*Tambahkan komponen-komponen lain di sini */}
    </div>
  );
}

export default App;
