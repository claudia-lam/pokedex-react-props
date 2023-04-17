import Pokecard from "./Pokecard";
import {pokemonobjs} from './pokemon.js'

function Pokedex({pokemon = pokemonobjs}) {
  return (
    <div className="Pokedex">
      <ul>
      {pokemon.map(p =>
        <li>
          <Pokecard
            name={p.name}
            id={p.id}
            type={p.type}
          />
        </li>
      )}
      </ul>
    </div>
  )
}

export default Pokedex;