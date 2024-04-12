import useSWR from 'swr';

function usePokemonDataAndEvolutions(pokemonName: string) {
  const fetchPokemonData = async (name: string) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (res) => res.json(),
    );
    return {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
    };
  };

  const fetchPokemonSpecies = async (name: string) => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${name}`,
    ).then((res) => res.json());
    return data.evolution_chain.url;
  };

  const fetcherEvolution = async (url: string) => {
    const evolutionChainUrl = await fetchPokemonSpecies(pokemonName);
    const data = await fetch(evolutionChainUrl).then((res) => res.json());

    const evolutionChain = [];
    let currentStage = data.chain;

    while (currentStage) {
      evolutionChain.push(currentStage.species.name);
      currentStage = currentStage.evolves_to[0];
    }

    return evolutionChain;
  };

  const { data: pokemon, error: pokemonError } = useSWR(
    pokemonName ? `https://pokeapi.co/api/v2/pokemon/${pokemonName}` : null,
    fetchPokemonData,
  );

  const { data: evolutionData, error: evolutionError } = useSWR(
    pokemon ? `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}` : null,
    fetcherEvolution,
  );

  return {
    pokemon,
    evolutionData,
    isLoading: !pokemonError && !pokemon,
    isError: pokemonError || evolutionError,
  };
}

export default usePokemonDataAndEvolutions;
