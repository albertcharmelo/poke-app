'use client';
import React from 'react';

interface MovePokemonProps {
  name: string;
}
const MovePokemon = ({ name }: MovePokemonProps, index: number) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p className="capitalize">{name}</p>
    </div>
  );
};

export default MovePokemon;
