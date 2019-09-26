import React from 'react';

import Hero from './components/Hero/Hero'
import ShowCase from './components/Showcase/Showcase'
import Founders from './components/Founders/Founders'
// import Testimonial from './components/Testimonial/Testimonial'


import './App.css';


function App() {
  return (
    <div>
      <Hero />
      <ShowCase />
      <Founders />
      {/* <Testimonial /> */}
    </div>
  );
}

export default App;
