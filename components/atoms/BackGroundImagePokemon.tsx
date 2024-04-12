'use client';

import { handleTypeBackgroundImage } from '@/utils/handleTypeColors';

interface BackGroundImagePokemonProps {
  typeName: string;
}

function BackGroundImagePokemon({
  typeName,
  children,
}: React.PropsWithChildren<BackGroundImagePokemonProps>) {
  return (
    <div
      className="w-full flex flex-col py-4 items-center justify-center relative"
      style={{
        backgroundImage: handleTypeBackgroundImage(typeName),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
}

export default BackGroundImagePokemon;
