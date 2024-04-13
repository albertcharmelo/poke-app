'use client';
import React, { use, useEffect } from 'react';
import HeaderPokemonCard from '../molecules/HeaderPokemonCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import BagdesTypesPokemon from '../molecules/BagdesTypesPokemon';
import StatsPokemon from '../molecules/StatsPokemon';
import MovePokemon from '../atoms/MovePokemon';
import Image from 'next/image';
import { usePokemonStore } from '@/store/usePokemonStore';

interface PokemonCardDetailProps {
  pokemon: {
    id: number;
    types: { type: { name: string } }[];
    stats: { base_stat: number; stat: { name: string } }[];
    moves: { move: { name: string } }[];
    sprites: { front_default: string };
    name: string;
  };
  evolutions: { id: number; name: string; image: string }[] | undefined;
}

const PokemonCardDetail = ({ pokemon, evolutions }: PokemonCardDetailProps) => {
  const { addPokemon }: PokemonStore = usePokemonStore();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Registrar que ha sido visto
    addPokemon({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      types: pokemon.types.map(
        (type: { type: { name: string } }) => type.type.name,
      ),
    });
  }, [pokemon, addPokemon]);

  return (
    <div className="bg-white  flex flex-col items-center  rounded-3xl">
      <HeaderPokemonCard pokemon={pokemon} />
      <div className="w-full flex flex-col justify-center px-4 pb-10 pt-4">
        <Tabs defaultValue="stats" className="w-full">
          <TabsList>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="moves">Moves</TabsTrigger>
            <TabsTrigger value="evolution">Evolutions</TabsTrigger>
          </TabsList>
          <TabsContent value="stats">
            <BagdesTypesPokemon types={pokemon.types} />
            <StatsPokemon stats={pokemon.stats} />
          </TabsContent>
          <TabsContent value="moves">
            <div className="grid grid-cols-2 gap-4">
              {pokemon.moves.map(
                (move: { move: { name: string } }, index: number) => (
                  <MovePokemon key={index} name={move.move.name} />
                ),
              )}
            </div>
          </TabsContent>
          <TabsContent value="evolution">
            <div className="flex flex-col items-center justify-center md:flex-row gap-2 md:gap-8">
              {evolutions?.map((evolution) => (
                <div key={evolution.id} className="flex flex-col items-center">
                  <Image
                    src={evolution.image}
                    alt={evolution.name}
                    width={96}
                    height={96}
                  />
                  <p>{evolution.name}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PokemonCardDetail;
