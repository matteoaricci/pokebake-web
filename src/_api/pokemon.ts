import {GQLFetchAllPokemon} from "@/models";
import {fetchGraphQL} from "./index";

export function fetchPokemon(): Promise<GQLFetchAllPokemon> {
    const query = `
    query gen_one_pokemon {
        pokemon_v2_pokemon(where: {id: {_gte: 1, _lte: 151}}) {
            id
            name
            pokemon_v2_pokemontypes {
              pokemon_v2_type {
                name
              }
            }
            pokemon_v2_pokemonsprites {
              sprites
            }
        }
    }`

    return fetchGraphQL(query, {}, "gen_one_pokemon")
}