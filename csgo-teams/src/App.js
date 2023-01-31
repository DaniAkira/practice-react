import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import CardInfo from './components/CardInfo';
import CardSide from './components/CardSide';


function App() {
  const [sideCard, setSideCard] = useState("CT");

  const setState = () => {
    sideCard === "CT" ? setSideCard("TR") : setSideCard("CT")
  };

  
  return (
    <div className="App">
      <Header clickSawpTeam = {setState} />
      <CardSide side = {sideCard} />
      <CardInfo side = {sideCard} />
    
    </div>
  );
}

export default App;
