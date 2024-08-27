import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProjectSection from './components/ProjectSection/ProjectSection';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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