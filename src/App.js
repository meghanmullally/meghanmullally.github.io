import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProjectSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;