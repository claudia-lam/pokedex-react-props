import Pokecard from './Pokecard';
import { pokemonobjs } from './pokemon.js';
import './Pokedex.css';

function Pokedex({ pokemon = pokemonobjs, total_exp, isWinner }) {
	return (
		<div className="Pokedex">
			<h2>Total: {total_exp} {isWinner ? <p>This hand wins!</p> : null}</h2>
			<div className="Pokedex-subdiv">
				<ul>
					{pokemon.map(p => (
            <Pokecard
              name={p.name}
              id={p.id}
              type={p.type}
              exp={p.base_experience}
            />
					))}
				</ul>
			</div>
		</div>
	);
}

export default Pokedex;
