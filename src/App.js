import React from 'react';
import Header from './components/header/Header';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Work from './components/work/Work';


function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Qualification/>
      <Contact/>
    </main>
    <Footer/>
    <Scrollup/>
    </>
  );
}

export default App;
