'use client';
import { usePokemonEvolutions } from '@/hooks/usePokemonEvolutions';
import React from 'react';
import useSWR from 'swr';
import Loader from '../atoms/Loader';
import PokemonCardDetail from '../organisms/PokemonCardDetail';
import Error from '../atoms/Error';

interface PokemonDetailsProps {
  name: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const PokemonDetails = ({ name }: PokemonDetailsProps) => {
  const { data: pokemon, error } = useSWR(
    name ? `https://pokeapi.co/api/v2/pokemon/${name}` : null,
    fetcher,
  );

  const { dataEvolution, dataError, loading } = usePokemonEvolutions(name);

  if (error || dataError)
    return (
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="w-auto">
          <Error />
        </div>
      </div>
    );

  if (!pokemon || loading) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="w-auto">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col justify-center px-8 pb-10 ">
      <div className="flex flex-col gap-2 justify-center items-center ">
        <div className="w-full lg:w-1/2 containerPokemonsDetails rounded-3xl ">
          <PokemonCardDetail pokemon={pokemon} evolutions={dataEvolution} />
        </div>
      </div>
    </main>
  );
};

export default PokemonDetails;
