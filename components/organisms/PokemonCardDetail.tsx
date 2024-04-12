'use client';
import React from 'react';
import HeaderPokemonCard from '../molecules/HeaderPokemonCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import BagdesTypesPokemon from '../molecules/BagdesTypesPokemon';
import StatsPokemon from '../molecules/StatsPokemon';
import MovePokemon from '../atoms/MovePokemon';
import Image from 'next/image';

interface PokemonCardDetailProps {
  pokemon: {
    id: number;
    types: { type: { name: string } }[];
    stats: { base_stat: number; stat: { name: string } }[];
    moves: { move: { name: string } }[];
    sprites: { front_default: string };
    name: string;
  };
}

const PokemonCardDetail = ({ pokemon }: PokemonCardDetailProps) => {
  return (
    <div className="bg-white  flex flex-col items-center min-h-[80vh] ">
      <HeaderPokemonCard pokemon={pokemon} />
      <div className="w-full flex flex-col justify-center px-4 pb-10 pt-4">
        <Tabs defaultValue="stats" className="w-full">
          <TabsList>
            <TabsTrigger value="stats">Caracteristicas</TabsTrigger>
            <TabsTrigger value="moves">Movimientos</TabsTrigger>
            <TabsTrigger value="evolution">Evoluciones</TabsTrigger>
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
            <div className="flex flex-col items-center justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={200}
                height={200}
                alt={pokemon.name}
              />
              <p className="capitalize text-xl font-bold">{pokemon.name}</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PokemonCardDetail;
