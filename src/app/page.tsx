import {fetchPokemon} from "../_api";

export default async function Home() {
    const {data} = await fetchPokemon()
  return (
    <main>
      <h1>All Pokemon</h1>
        <ul>{data.pokemon_v2_pokemon.map(pokemon => {
            return <div key={pokemon.id}>{pokemon.name}</div>
        })}</ul>
    </main>
  )
}
