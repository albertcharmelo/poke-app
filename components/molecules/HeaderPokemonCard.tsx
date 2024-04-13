'use client';

import React from 'react';
import BackGroundImagePokemon from '../atoms/BackGroundImagePokemon';
import PokemonImageWithCircle from '../atoms/PokemonImageWithCircle';
import { handleNumberPokemon } from '@/utils/handleText';

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
        <h1
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
          className=" capitalize text-3xl font-bold text-white"
        >
          {pokemon.name}
        </h1>
      </div>
      <PokemonImageWithCircle
        pokemonName={pokemon.name}
        imageSrc={pokemon.sprites.front_default}
        typeName={pokemon.types[0].type.name}
      />
      <div>
        <h1
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
          className=" capitalize text-3xl font-bold text-white"
        >
          #{handleNumberPokemon(pokemon.id)}
        </h1>
      </div>
    </BackGroundImagePokemon>
  );
};

export default HeaderPokemonCard;
