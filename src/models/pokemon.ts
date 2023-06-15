export type GQLPokemon = {
    id: number,
    name: string,
    pokemon_v2_pokemontypes: {name: string}[],
    pokemon_v2_pokemonsprites: {sprites: string}[],
}

export type GQLFetchAllPokemon = {
    data: {
        pokemon_v2_pokemon: GQLPokemon[]
    }
}