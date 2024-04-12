'use client';

import { Search } from 'lucide-react';
import PokemonCard from './PokemonCard';
import usePokemons from '@/hooks/usePokemons';
import Image from 'next/image';
import { useState } from 'react';
import Header from './Header';

const Container = () => {
  const [search, setSearch] = useState('');
  const { pokemons, error, isLoading } = usePokemons(0, search);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  const handleSearchPokemon = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 3) {
      setSearch(e.target.value);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2 justify-center">
        <Header />
        <div className="w-full relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            onChange={handleSearchPokemon}
            placeholder="Buscar Pokemon..."
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
          {pokemons?.map((pokemon: Pokemon) => (
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
