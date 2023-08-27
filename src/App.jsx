import React from 'react';
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import './App.css';
import './index.css';

function App() {
  return (
    <div className='font-mono'> 
     <Header />
     <MainSection />
     <Portfolio />
     <Footer />
    </div>
  );
}

export default App;
