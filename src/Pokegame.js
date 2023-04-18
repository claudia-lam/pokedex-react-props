import {pokemonobjs} from './pokemon.js'
import Pokedex from "./Pokedex";

function Pokegame({pokelist=pokemonobjs}) {

  const hand1 = [];
  const hand2 = [];

  const length = pokelist.length;

  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * pokelist.length);

    if (i % 2 === 0) {
      hand1.push(...pokelist.splice(idx,1));
    } else {
      hand2.push(...pokelist.splice(idx,1));
    }
  }

  const hand1Total = hand1.reduce((acc, curr) => acc += curr.base_experience, 0);
  const hand2Total = hand2.reduce((acc, curr) => acc += curr.base_experience, 0);

  const hand1Winner = hand1Total > hand2Total;
  const hand2Winner = hand1Total < hand2Total;

  return (
    <div className="Pokegame">
      <div>
        <h1>Player 1</h1>
        <Pokedex pokemon={hand1} total_exp={hand1Total} isWinner={hand1Winner} />
      </div>
      <div>
        <h1>Player 2</h1>
        <Pokedex pokemon={hand2} total_exp={hand2Total} isWinner={hand2Winner} />
      </div>
    </div>
  )
}

export default Pokegame;