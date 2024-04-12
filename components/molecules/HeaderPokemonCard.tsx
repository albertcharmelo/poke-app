'use client';
import { handleNumberPokemon } from '@/utils/handleText';
import React from 'react';
import BackGroundImagePokemon from '../atoms/BackGroundImagePokemon';
import PokemonImageWithCircle from '../atoms/PokemonImageWithCircle';

interface HeaderPokemonCardProps {
  pokemon: {
    name: string;
    types: { type: { name: string } }[];
    sprites: { front_default: string };
    id: number;
  };
}

const HeaderPokemonCard = ({ pokemon }: HeaderPokemonCardProps) => {
  return (
    <BackGroundImagePokemon typeName={pokemon.types[0].type.name}>
      <div>
        <h1 className=" capitalize text-3xl font-bold text-white">
          {pokemon.name}
        </h1>
      </div>
      <PokemonImageWithCircle
        pokemonName={pokemon.name}
        imageSrc={pokemon.sprites.front_default}
        typeName={pokemon.types[0].type.name}
      />
      {/* numero de pokemon */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-white text-xl font-bold">
          #{handleNumberPokemon(pokemon.id)}
        </p>
      </div>
    </BackGroundImagePokemon>
  );
};

export default HeaderPokemonCard;
