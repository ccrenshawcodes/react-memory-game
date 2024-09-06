import { useState } from 'react'
import Card from './components/Card.jsx';
import RulesModal from './components/RulesModal.jsx';
import EndGameModal from './components/EndGameModal.jsx';
import Scores from './components/scores.jsx';
import { data } from '../data.js';
import './App.css'

function App() {
  const [rulesModalIsActive, setRulesModalIsActive] = useState(false);
  const [endGameModalActive, setEndGameModalActive] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameResult, setGameResult] = useState('');

  function controlRulesModalDisplay() {
    if (!rulesModalIsActive) {
      setRulesModalIsActive(true);
    } else {
      setRulesModalIsActive(false);
    }
  }

  function handleCloseEndGameModal() {
    setEndGameModalActive(false);
    setCurrentScore(0);
  }

  function handleScoreReset() {
    setCurrentScore(0);
    setHighScore(0);
  }

  function gameLoss () {
    setGameResult('loss');
    setHighScore(currentScore);
    setCurrentScore(0)
    setEndGameModalActive(true);
  }

  function gameWin () {
    if (currentScore >= 11) {
      setGameResult('win');
      setEndGameModalActive('true');
    }
  }

  function incrementScore() {
    let newScore = currentScore + 1;
    setCurrentScore(newScore);
    if (newScore > highScore) {
      setHighScore(newScore);
    }
    gameWin();
  }

  const mappedCats = data.map(cat => (
    <Card 
      img={cat.photo}
      title={cat.catName}
      key={cat.id}
      endGame={gameLoss}
      adjustScore={incrementScore}
    />
  ))

  return (
    <>
      <RulesModal 
        isActive={rulesModalIsActive}
        onClose={controlRulesModalDisplay}
      />

      <EndGameModal
        isActive={endGameModalActive}
        onClose={handleCloseEndGameModal}
        outcome={gameResult}
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
          {mappedCats}
        </div>

      </div>
    </>

  )
}

export default App

/* 
TODO:
  - figure out how to reset card 'clicked' state when game restarts
  - set up cards data file - DONE
  - grab cats from the cat api
  - figure out how to shuffle cards after click (useEffect probs)
  - implement confetti on win
  - add 'your score' on the 'you lost' modal

NIT:
  - Fix "see the code" button - <a> is currently smaller than its parent button,
    making the experience of clicking it a little weird
  - Fix header positions/spacing 

BUGS:
  -
*/