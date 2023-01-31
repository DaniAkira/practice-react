import './App.css';
import { useState } from 'react';
import CardInfo from './components/CardInfo';
import CardSide from './components/CardSide';


function App() {
  const [sideCard, setSideCard] = useState("CT");

  const SetState = () => {
    if (sideCard === "CT") {
      setSideCard("TR");
    } else {
      setSideCard("CT");
    }
  };

  


  return (
    <div className="App">
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Click no botão para alterar os times</p>
        <button onClick={SetState}>Mudar Time</button>
      </header>
      <CardSide side={sideCard} />
      <CardInfo side={sideCard} />
    
    </div>
  );
}

export default App;
