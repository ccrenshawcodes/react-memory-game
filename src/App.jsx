import { useState } from 'react'
import Card from './components/Card.jsx';
import RulesModal from './components/RulesModal.jsx';
import EndGameModal from './components/EndGameModal.jsx';
import Scores from './components/scores.jsx';
import { data } from '../data.js';
import { shuffle } from '../shuffle.js';
import './App.css'

function App() {
  const [rulesModalIsActive, setRulesModalIsActive] = useState(false);
  const [endGameModalActive, setEndGameModalActive] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameResult, setGameResult] = useState('');
  const [clickedCards, setClickedCards] = useState([]);

  let shuffledData = shuffle(data);
  
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
    setGameResult('');
    setEndGameModalActive(false);
    setCurrentScore(0);
  }

  function gameLoss () {
    setEndGameModalActive(true);
    setGameResult('loss');
    setClickedCards([]);
  }

  function gameWin () {
    if (currentScore >= 11) {
      setGameResult('win');
      setEndGameModalActive('true');
      setClickedCards([]);
    }
  }

  const mappedCats = shuffledData.map(cat => (
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
        score={currentScore}
      />

      <div className="main-page">
        <div className="page-header">
          <h1>Studio Ghibli Memory Game</h1>
          <Scores
          current={currentScore}
          high={highScore} 
        />
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
            <a href="https://github.com/ccrenshawcodes/react-memory-game" target="_blank"><button>See the Code</button></a>
          </div>
        </div>

        <div className="game-board">
          {!endGameModalActive && mappedCats}
        </div>
      </div>
    </>
  )
}

export default App

/* 
TODO:
  - delay & flip effect for the cards when they shuffle
  - I probably need to break some of this out into separate components
*/