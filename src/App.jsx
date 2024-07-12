import { useState } from 'react'
import Card from './components/Card.jsx';
import RulesModal from './components/RulesModal.jsx';
import './App.css'

function App() {
  const [modalIsActive, setModalIsActive] = useState(false);

  function controlRulesModalDisplay() {
    if (!modalIsActive) {
      setModalIsActive(true);
      console.log('you can now see the rules modal');
    } else {
      setModalIsActive(false);
      console.log('the rules modal is now hidden');
    }

  }

  return (
    <>
      <RulesModal 
        isActive={modalIsActive}
        onClose={controlRulesModalDisplay}
      />
      <div className="main-page">
        <div className="page-header">
          <h1>Memory Game</h1>
          <div className="header-buttons">
            <button>Reset</button>
            <button
            onClick={controlRulesModalDisplay}>How it Works</button>
            <button>See the Code</button>
          </div>
        </div>
        <div className="scores">
          <span>Your Score: </span>
          <span>High Score: </span>
        </div>
        <div className="game-board">
          <Card 
            img="https://upload.wikimedia.org/wikipedia/en/f/fd/Pusheen_the_Cat.png"
            title="Pusheen"
          />
          <Card 
            img="https://upload.wikimedia.org/wikipedia/en/f/fd/Pusheen_the_Cat.png"
            title="Pusheen"
          />
          <Card 
            img="https://upload.wikimedia.org/wikipedia/en/f/fd/Pusheen_the_Cat.png"
            title="Pusheen"
          />
          <Card 
            img="https://upload.wikimedia.org/wikipedia/en/f/fd/Pusheen_the_Cat.png"
            title="Pusheen"
          />
          <Card 
            img="https://upload.wikimedia.org/wikipedia/en/f/fd/Pusheen_the_Cat.png"
            title="Pusheen"
          />
        </div>
      </div>
    </>

  )
}

export default App
