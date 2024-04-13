'use client';

import PokemonDetails from '@/components/pages/PokemonDetails';
import { useParams } from 'next/navigation';
function PokemonPage() {
  const params = useParams<{ name: string }>();
  const { name } = params;

  return <PokemonDetails name={name} />;
}

export default PokemonPage;
