'use client';
import Header from '@/components/Header';
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
  if (!pokemon || loading) return <div>Cargando...</div>;

  return (
    <div className="flex flex-col justify-center px-8">
      <div className="flex flex-col gap-2 justify-center items-center">
        <Header />
        <div className="w-full lg:w-1/2 containerPokemons rounded-3xl min-h-[80vh]">
          <PokemonCardDetail pokemon={pokemon} evolutions={dataEvolution} />
        </div>
      </div>
    </div>
  );
}

export default PokemonPage;
