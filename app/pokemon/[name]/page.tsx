'use client';
import Loader from '@/components/atoms/Loader';
import PokemonCardDetail from '@/components/organisms/PokemonCardDetail';
import { usePokemonEvolutions } from '@/hooks/usePokemonEvolutions';

import { useParams } from 'next/navigation';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function PokemonPage() {
  const params = useParams<{ name: string }>();
  const { name } = params;

  const { data: pokemon, error } = useSWR(
    name ? `https://pokeapi.co/api/v2/pokemon/${name}` : null,
    fetcher,
  );

  const { dataEvolution, dataError, loading } = usePokemonEvolutions(name);

  if (error || dataError)
    return <div>Error al cargar la información del Pokémon.</div>;
  if (!pokemon || loading) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="w-auto">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col justify-center px-8 pb-10 ">
      <div className="flex flex-col gap-2 justify-center items-center ">
        <div className="w-full lg:w-1/2 containerPokemonsDetails rounded-3xl ">
          <PokemonCardDetail pokemon={pokemon} evolutions={dataEvolution} />
        </div>
      </div>
    </main>
  );
}

export default PokemonPage;
