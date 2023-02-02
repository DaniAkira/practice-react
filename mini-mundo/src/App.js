import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/script';
import BannerSection from './components/BannerSection/script';
import WorkSection from './components/WorkSection/script';
import Footer from './components/Footer/script';

function App() {
  const [mode, setMode] = useState(false);

  const setTheme = () => {
    setMode(!mode)
  };

  return (
    <div className="App">
      <Header
        clickSwapMode = {setTheme}
        mode = {mode}
      />
      <BannerSection 
        mode = {mode}
      />
      <WorkSection 
        mode = {mode}
      />
      <Footer 
        mode = {mode}
      />
    </div>
  );
}

export default App;
