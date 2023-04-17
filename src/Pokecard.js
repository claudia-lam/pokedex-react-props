function Pokecard({name, id, type}) {
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return (
    <div className="Pokecard">
      <h2>{name}</h2>
      <img src={image} alt={name}></img>
      <p>{type}</p>
    </div>
  )
}

export default Pokecard;