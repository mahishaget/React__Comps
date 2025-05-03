// src/App.js

import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Section1 from './Components/Section1/Section';
import Section2 from   './Components/Section1/Section2';
import Section3 from './Components/Section1/Section3';
import Section4 from './Components/Section1/Section4';

function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
  
    </div>
  );
}

export default App;
