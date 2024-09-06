import { useState } from 'react';

function Card( {img, title, endGame, adjustScore} ) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  function handleClick () {
    if (hasBeenClicked) {
      endGame();
    } else {
      setHasBeenClicked(true);
      adjustScore();
    }
  }

  return (
    <div 
      className="memory-card"
      onClick={handleClick}
    >
      <img src={img}></img>
      <h2>{title}</h2>
    </div>
  )
}

export default Card