'use client';
import PokemonCard from './atoms/PokemonCard';
import usePokemons from '@/hooks/usePokemons';

import { useState } from 'react';
import PaginateButtons from './atoms/PaginateButtons';

const Container = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { pokemons, error, isLoading } = usePokemons(pageIndex);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <div className="flex flex-col gap-2 justify-center">
        <PaginateButtons setPageIndex={setPageIndex} currentPage={pageIndex} />
        <div className="grid grid-cols-2   md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5  gap-4 containerPokemons">
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
