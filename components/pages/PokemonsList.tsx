'use client';
import PokemonCard from '../atoms/PokemonCard';
import usePokemons from '@/hooks/usePokemons';
import PaginateButtons from '../atoms/PaginateButtons';
import Loader from '../atoms/Loader';
import usePagination from '@/hooks/usePagination';
const PokemonsList = () => {
  const [pageIndex, setPageIndex] = usePagination('page', 0);
  const { pokemons, error, isLoading } = usePokemons(pageIndex);

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
          {pokemons?.map((pokemon: Pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              imageUrl={pokemon.image}
              type={pokemon.types[0]}
              number={pokemon.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonsList;
