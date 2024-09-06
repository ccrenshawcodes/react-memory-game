function Card( {img, title, cardId, onClick} ) {

    function handleClick () {
      onClick(cardId);
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