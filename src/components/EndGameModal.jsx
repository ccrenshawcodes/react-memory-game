import confetti from "canvas-confetti";

function EndGameModal ({isActive, onClose, outcome, score}) {

  function determineText(outcome) {
    let headerText, bodyText, buttonText;

    if (outcome === 'win') {
      headerText = 'You win!';
      bodyText = 'You have an amazing memory!';
      buttonText = 'Play again';
      confetti({spread: 180});
    } else if (outcome === 'loss') {
      headerText = 'You lost!';
      bodyText = `Good try! Your score was: ${score} out of 12.`;
      buttonText = 'Try again';
    }
    return {headerText, bodyText, buttonText};
  }

  return (
    <div
    className="end-game-modal-bg"
    style={isActive ? {display: 'block'} : {display: 'none'}}
    >
      <div className="end-game-modal">
        <button className="x-button-modal" onClick={onClose}>X</button>
        <h2>{determineText(outcome).headerText}</h2>
        <p>{determineText(outcome).bodyText}</p>
        <button className="play-again" onClick={onClose}>{determineText(outcome).buttonText}</button>
      </div>
    </div>
  )
}

export default EndGameModal
