import React from 'react';

const PokemonDetails = () => {
  const params = useParams<{ name: string }>();
  const { name } = params;

  const { data: pokemon, error } = useSWR(
    name ? `https://pokeapi.co/api/v2/pokemon/${name}` : null,
    fetcher,
  );

  const {} = usePokemonEvolutions(name);

  // if (error || isError)
  //   return <div>Error al cargar la información del Pokémon.</div>;
  // if (!pokemon || !evolutionList) return <div>Cargando...</div>;

  return (
    <div className="flex flex-col justify-center px-8">
      <div className="flex flex-col gap-2 justify-center items-center">
        <Header />
        <div className="w-full lg:w-1/2 containerPokemons rounded-3xl min-h-[80vh]">
          {/* <PokemonCardDetail pokemon={pokemon} evolutions={evolutionList} /> */}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
