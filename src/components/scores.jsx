function Scores( {current, high} ) {
  return (
    <div className="scores">
      <div className="current-score">
        <span>Your Score: </span>
        <span className="current-score-indicator">{current}</span>
      </div>
      <div className="high-score">
        <span>High Score: </span>
        <span className="high-score-indicator">{high}</span>
      </div>
    </div>
  )
}

export default Scores
