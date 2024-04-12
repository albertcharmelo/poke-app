'use client';
import React from 'react';
import StatPokemon from '../atoms/StatPokemon';

interface StatsPokemonProps {
  stats: { base_stat: number; stat: { name: string } }[];
}

function StatsPokemon({ stats }: StatsPokemonProps) {
  return (
    <div className="flex flex-col gap-4 w-full pt-4">
      {stats.map((stat: { base_stat: number; stat: { name: string } }) => (
        <StatPokemon key={stat.stat.name} stat={stat} />
      ))}
    </div>
  );
}

export default StatsPokemon;
