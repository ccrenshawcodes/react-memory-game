import { useState } from 'react'
import Card from './components/Card.jsx';
import RulesModal from './components/RulesModal.jsx';
import Scores from './components/scores.jsx';
import { data } from '../data.js';
import './App.css'

function App() {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function controlRulesModalDisplay() {
    if (!modalIsActive) {
      setModalIsActive(true);
    } else {
      setModalIsActive(false);
    }
  }

  function handleScoreReset() {
    setCurrentScore(0);
    setHighScore(0);
  }

/*   function handleCardClick (cardId, isUnique) {
    if (isUnique) {
      setCurrentScore(currentScore + 1);
      //  mark cardId as clicked
    }
    if (!isUnique) {
      setCurrentScore(0);
      //  mark all cardIds as unclicked
    }
  } */

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
            <button 
              onClick={handleScoreReset}
            >
              Reset
            </button>
            <button
              onClick={controlRulesModalDisplay}
            >
              How to Play
            </button>
            <button><a href="https://github.com/ccrenshawcodes/react-memory-game" target="_blank">See the Code</a></button>
          </div>
        </div>

        <Scores
          current={currentScore}
          high={highScore} 
        />

        <div className="game-board">
          {
            data.map((cat) => (
              <Card 
                img={cat.photo}
                title={cat.catName}
                key={cat.id}
              />
            ))
          }
        </div>

      </div>
    </>

  )
}

export default App

/* 
TODO:
  - figure out how to set scores based on Card clicks
  - set up cards data file - DONE
  - grab cats from the cat api
  - figure out how to shuffle cards after click (useEffect probs)
  - implement confetti on win

NIT:
  - Fix grid spacing so it doesn't overflow the page
  - Fix "see the code" button - <a> is currently smaller than its parent button,
    making the experience of clicking it a little weird
  - Fix header positions/spacing 
*/