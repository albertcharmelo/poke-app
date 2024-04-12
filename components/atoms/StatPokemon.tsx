'use client';
import React from 'react';

import { Progress } from '../ui/progress';

interface StatPokemonProps {
  stat: { base_stat: number; stat: { name: string } };
}

const StatPokemon = ({ stat }: StatPokemonProps) => {
  return (
    <div
      key={stat.stat.name}
      className="flex justify-between gap-8 items-center"
    >
      <p className="capitalize">{stat.stat.name}</p>
      <Progress value={stat.base_stat} />
      <p>{stat.base_stat}</p>
    </div>
  );
};

export default StatPokemon;
