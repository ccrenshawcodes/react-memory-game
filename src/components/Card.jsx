function Card( {img, title} ) {

  return (
    <div className="memory-card">
      <img src={img}></img>
      <h2>{title}</h2>
    </div>
  )
}

export default Card