'use client';

import { Search } from 'lucide-react';
import PokemonCard from './PokemonCard';
import usePokemons from '@/hooks/usePokemons';

const Container = () => {
  const { pokemons, error, isLoading } = usePokemons(0);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <div className="flex flex-col gap-2 justify-center">
        <h1 className="text-4xl font-bold  text-pokeTitle">Pokedex</h1>
        <h2 className="text-md font-bold  text-pokeSecondary">
          Tu fuente de información confiable sobre todas las especies de
          Pokémon, sus habilidades y hábitats. ¡Atrápalos a todos!
        </h2>
        <div className="w-full relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            className="
            bg-neutral-50
            w-full
            p-2
            pl-10
            border-none
            border-gray-300
            rounded-md
            focus:outline-none
            focus:ring-2
            focus:ring-pokePrimary
            focus:border-transparent
            placeholder-gray-500
            transition-all
            duration-300
            ease-linear
            "
          />
        </div>
        <div
          className="grid grid-cols-2 
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5

        
        
        gap-4 containerPokemons"
        >
          {pokemons?.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              imageUrl={pokemon.image}
              type={pokemon.types[0]}
              number={pokemon.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Container;
