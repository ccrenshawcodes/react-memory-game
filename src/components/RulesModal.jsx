function RulesModal( {isActive, onClose} ) {

  return (
    <div 
    className="rules-modal-bg"
    style={isActive ? {display: 'block'} : {display: 'none'}}
    >
      <div className="rules-modal">
        <button className="x-button-modal" onClick={onClose}>X</button>
        <h2>How This Works</h2>
        <p>Its easy: click each unique cat picture. Dont click anything twice.</p>
        <p>If you click something twice, your current score will be reset.</p>
        <p>Reset both your current and high score with the Reset button.</p>
        <p>Play until you reach 12, the perfect score!</p>
        <button className="ok-button-modal" onClick={onClose}>OK</button>
      </div>
    </div>
  )
}

export default RulesModal
