'use client';
import React from 'react';
import { Badge } from '../ui/badge';
import { handleTypeColors } from '@/utils/handleTypeColors';

interface BagdesTypesPokemonProps {
  types: { type: { name: string } }[];
}

function BagdesTypesPokemon({ types }: BagdesTypesPokemonProps) {
  return (
    <div className="flex gap-2">
      {types.map((type: { type: { name: string } }) => (
        <Badge
          style={{ backgroundColor: handleTypeColors(type.type.name) }}
          key={type.type.name}
          variant="outline"
        >
          <span className="capitalize text-white  font-bold">
            {type.type.name}
          </span>
        </Badge>
      ))}
    </div>
  );
}

export default BagdesTypesPokemon;
