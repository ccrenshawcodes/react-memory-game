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
  const [clickedCards, setClickedCards] = useState([]);

  function handleCardClick(index) {
    if (clickedCards.includes(index)) {
      gameLoss();
    } else {
      setClickedCards(clickedCards.concat(index));
      incrementScore();
      gameWin();
    }
  }

  function handleScoreReset() {
    setCurrentScore(0);
    setHighScore(0);
  }

  function incrementScore() {
    let newScore = currentScore + 1;
    setCurrentScore(newScore);
    if (newScore > highScore) {
      setHighScore(newScore);
    }
  }

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

  function gameLoss () {
    setGameResult('loss');
    setHighScore(currentScore);
    setCurrentScore(0)
    setEndGameModalActive(true);
    setClickedCards([]);

  }

  function gameWin () {
    if (currentScore >= 11) {
      setGameResult('win');
      setEndGameModalActive('true');
      setClickedCards([]);
    }
  }

  const mappedCats = data.map(cat => (
    <Card 
      img={cat.photo}
      title={cat.catName}
      key={cat.id}
      cardId={cat.id}
      onClick={handleCardClick}
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
  - decide on a theme and import everything
  - figure out how to shuffle cards after click (useEffect probs?)
  - implement confetti on win
  - add 'your score' on the 'you lost' modal

NIT:
  - Fix "see the code" button - <a> is currently smaller than its parent button,
    making the experience of clicking it a little weird
  - Fix header positions/spacing 

BUGS:
  -
*/