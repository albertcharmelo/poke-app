import { handleTypeColors } from '@/utils/handleTypeColors';
import Image from 'next/image';
import React from 'react';

interface PokemonImageWithCircleProps {
  pokemonName: string;
  imageSrc: string;
  typeName: string;
}
const PokemonImageWithCircle = ({
  pokemonName,
  imageSrc,
  typeName,
}: PokemonImageWithCircleProps) => {
  return (
    <Image
      style={{
        backgroundColor: handleTypeColors(typeName),
        borderRadius: '50%',
      }}
      className="p-4"
      src={imageSrc}
      width={200}
      height={200}
      alt={pokemonName}
    />
  );
};

export default PokemonImageWithCircle;
