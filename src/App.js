import { About } from './components/About/About';
import { Client } from './components/Client/Client';
import { Contact } from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import { Product } from './components/Product/Product';
import { Service } from './components/Service/Service';
import { Technology } from './components/Technology/Technology';
import React, { Component }  from 'react';
import './css/base.css'
import Logo from './components/Client/Logo/Logo';

function App() {
  return (
    <>
        <Hero />
        <Service/>
        <Product />
        <Technology />
        <About />
        <Client/>
        <Logo></Logo>
        <Contact />
    </>
  );
}

export default App;
