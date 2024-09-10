import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';  
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProjectSection from './components/ProjectSection/ProjectSection';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <div className="App">
        <Header />
        <Hero />
        <About />
        <ProjectSection />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;