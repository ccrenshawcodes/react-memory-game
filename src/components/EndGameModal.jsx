function EndGameModal ({isActive, onClose, outcome}) {

  function determineText(outcome) {
    let headerText, buttonText;

    if (outcome === 'win') {
      headerText = 'You win!';
      buttonText = 'Play again';
    } else if (outcome === 'loss') {
      headerText = 'You lost!';
      buttonText = 'Try again';
    }
    return {headerText, buttonText};
  }

  return (
    <div
    className="end-game-modal-bg"
    style={isActive ? {display: 'block'} : {display: 'none'}}
    >
      <div className="end-game-modal">
        <button className="x-button-modal" onClick={onClose}>X</button>
        <h2>{determineText(outcome).headerText}</h2>
        <button className="play-again" onClick={onClose}>{determineText(outcome).buttonText}</button>
      </div>
    </div>
  )
}

export default EndGameModal

/* 
  why is "outcome" undefined every time? No matter if I set it as "win" when this component
  is called, or if I set gameResult to "win" and set outcome = gameResult...? 
*/