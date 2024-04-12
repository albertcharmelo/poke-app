'use client';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { handleNumberPokemon } from '@/utils/handleText';
import {
  handleTypeBackgroundImage,
  handleTypeColors,
} from '@/utils/handleTypeColors';
import Image from 'next/image';
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

  if (error) return <div>Error al cargar la información del Pokémon.</div>;
  if (!pokemon) return <div>Cargando...</div>;

  return (
    <div className="flex flex-col justify-center px-8">
      <div className="flex flex-col gap-2 justify-center items-center">
        <Header />
        <div className="w-full lg:w-1/2 containerPokemons rounded-3xl">
          <div className="bg-white  flex flex-col items-center  min-h-screen">
            <div
              className="w-full flex flex-col py-4 items-center justify-center relative"
              style={{
                backgroundImage: handleTypeBackgroundImage(
                  pokemon.types[0].type.name,
                ),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div>
                <h1 className=" capitalize text-3xl font-bold text-white">
                  {pokemon.name}
                </h1>
              </div>

              <Image
                style={{
                  backgroundColor: handleTypeColors(pokemon.types[0].type.name),
                  borderRadius: '50%',
                }}
                className="p-4"
                src={pokemon.sprites.front_default}
                width={200}
                height={200}
                alt={pokemon.name}
              />
              {/* numero de pokemon */}
              <div className="flex flex-col items-center justify-center">
                <p className="text-white text-xl font-bold">
                  #{handleNumberPokemon(pokemon.id)}
                  {pokemon.types.map((type: { type: { name: string } }) => (
                    <span
                      key={type.type.name}
                      className="text-white text-sm font-bold"
                    >
                      {type.type.name}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center p-4">
              <Tabs defaultValue="stats" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="stats">Caracteristicas</TabsTrigger>
                  <TabsTrigger value="moves">Movimientos</TabsTrigger>
                  <TabsTrigger value="evolution">Evoluciones</TabsTrigger>
                </TabsList>
                <TabsContent value="stats">
                  Make changes to your account here.
                </TabsContent>
                <TabsContent value="moves">
                  Change your password here.
                </TabsContent>
                <TabsContent value="evolution">Evolution</TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonPage;