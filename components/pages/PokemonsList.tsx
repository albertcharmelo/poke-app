'use client';
import PokemonCard from '../atoms/PokemonCard';
import usePokemons from '@/hooks/usePokemons';
import PaginateButtons from '../atoms/PaginateButtons';
import Loader from '../atoms/Loader';
import usePagination from '@/hooks/usePagination';
import { usePokemonStore } from '@/store/usePokemonStore';
const PokemonsList = () => {
  const [pageIndex, setPageIndex] = usePagination('page', 0);
  const { pokemons, error, isLoading } = usePokemons(pageIndex);
  const checkPokemonInStore = usePokemonStore((state) => state.pokemons);
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="w-auto">
          <Loader />
        </div>
      </div>
    );
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <div className="flex flex-col gap-2 justify-center">
        <PaginateButtons setPageIndex={setPageIndex} currentPage={pageIndex} />
        <div className="grid grid-cols-2   md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5  gap-4 containerPokemons">
          {pokemons?.map((pokemon: Pokemon) => {
            const isPokemonInStore = checkPokemonInStore.some(
              (p) => p.id === pokemon.id,
            );
            return (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                imageUrl={pokemon.image}
                type={pokemon.types[0]}
                number={pokemon.id}
                check={isPokemonInStore}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PokemonsList;
