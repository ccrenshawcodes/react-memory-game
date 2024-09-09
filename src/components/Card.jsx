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
      <p>{title}</p>
    </div>
  )
}

export default Card