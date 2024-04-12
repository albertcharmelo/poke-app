import useSWR from 'swr';
const fetcher = async (url: string) => {
  const res = await fetch(url);
  const response = await res.json();
  const url_chain = response.evolution_chain.url;
  const res_chain = await fetch(url_chain);
  const chain = await res_chain.json();

  let currentEvolution = chain.chain;
  let evolutions = [];

  while (currentEvolution) {
    const pokemonRes = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${currentEvolution.species.name}`,
    );
    const pokemonData = await pokemonRes.json();

    evolutions.push({
      id: pokemonData.id,
      name: pokemonData.name,
      image: pokemonData.sprites.front_default,
    });
    currentEvolution = currentEvolution.evolves_to[0];
  }

  return evolutions;
};
export const usePokemonEvolutions = (name: string) => {
  const { data, error, isLoading } = useSWR(
    name ? `https://pokeapi.co/api/v2/pokemon-species/${name}` : null,
    fetcher,
  );

  return {
    dataEvolution: data,
    dataError: error,
    loading: isLoading,
  };
};
