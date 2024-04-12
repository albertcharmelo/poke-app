import useSWR from 'swr';

async function fetchPokemon(url: string): Promise<Pokemon> {
  const response = await fetch(url);
  const data: PokemonData = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    types: data.types.map((type: { type: { name: string } }) => type.type.name),
  };
}

function usePokemons(page: number, search: string = '') {
  let base_url = `https://pokeapi.co/api/v2/pokemon?offset=${page * 30}&limit=30`;
  if (search) {
    base_url = `https://pokeapi.co/api/v2/pokemon/${search}`;
  }

  const { data, error } = useSWR(
    base_url,
    async (url: string): Promise<Pokemon[]> => {
      const response = await fetch(url);
      const { results }: PokemonListResponse = await response.json();

      // Fetch details for each Pokemon
      const pokemons = await Promise.all(
        results.map((pokemon: PokemonResult) => fetchPokemon(pokemon.url)),
      );

      return pokemons;
    },
  );

  return {
    pokemons: data,
    isLoading: !error && !data,
    error,
  };
}

export default usePokemons;
