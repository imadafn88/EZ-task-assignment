import React from 'react';
import './styles/globals.css';
import './styles/responsive.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
// Import other components when you create them
// import AboutTeam from './components/AboutTeam/AboutTeam';
// import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        {/* Add other sections when ready */}
        {/* <AboutTeam /> */}
        {/* <AboutUs /> */}
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;