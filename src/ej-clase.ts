import { PokemonCreator } from "./pokemoncreator";
import { WaterCreator } from "./watercreator";
import { GrassCreator } from "./grasscreator";
import { FireCreator } from "./firecreator";

/**
 * Client code for create a pokemon.
 * @param pokemonCreator the creators type that we want to create.
 */
export function clientCode(pokemonCreator: PokemonCreator) {
  console.log(pokemonCreator.logic());
}

clientCode(new WaterCreator('Squirtle', 'Azul', '1ª'));
clientCode(new GrassCreator('Ivysaur', 'Verde', '2ª'));
clientCode(new FireCreator('Charizard', 'Rojo', '3ª'));