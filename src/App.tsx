import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { setupScrollAnimations } from './utils/scrollAnimation';

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
