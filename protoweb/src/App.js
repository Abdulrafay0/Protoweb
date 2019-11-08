import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import TeamCards from './Components/Team/Cards';
import Contact from './Components/Contact';
import Footer from './Components/footer';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className='App'>
      <Home/>
      <About/>
      <TeamCards/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
