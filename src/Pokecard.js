import "./Pokecard.css";

function Pokecard({name, id, type, exp}) {
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return (
    <li className="Pokecard">
      <h2>{name}</h2>
      <img src={image} alt={name}></img>
      <p>{type}</p>
      <p>{exp}</p>
    </li>
  )
}

export default Pokecard;