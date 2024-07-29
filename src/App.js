import React from 'react';

import { AboutMe, MyWork, Header, MyServices, Talk, Footer } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutMe />
    <MyServices />
    <MyWork />
    <Talk />
    <Footer />
  </div>
);

export default App;