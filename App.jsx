import React from 'react';
import Navbar from './navbar.jsx'; 
import Home from './Home.jsx';
import MyWork from './Mywork.jsx'; 
import About from './about.jsx';
import Contact from './contact.jsx';
// import Resume from './resume.jsx';
import './App.css'; 
import photo from './a.jpg';

function App() {
  return (
    <>
      <Navbar />
      <div id="home" style={{ padding: '100px', marginTop: '60px' }}>
        <h2>Home Section</h2>
      </div>
      <Home />
      <MyWork />
      <div id="about" style={{ padding: '100px', marginTop: '60px' }}>
        <h2>About Section</h2>
        <img src={photo} alt="Aadi Jain" className="h-24 w-24 rounded-full" />
      </div>
      <About />
      <div id="contact" style={{ padding: '100px', marginTop: '60px' }}>
        <h2>Contact Section</h2>
      </div>
      <Contact />
      {/* <Resume/> */}
    </>
  );
}
export default App;