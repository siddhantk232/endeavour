import React from 'react';

import Hero from './components/Hero/Hero'
import ShowCase from './components/Showcase/Showcase'
import Founders from './components/Founders/Founders'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'


import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShowCase />
      <Founders />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
