import React from 'react';

import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Founders from './components/Founders/Founders'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'


import './App.css';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Founders />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
