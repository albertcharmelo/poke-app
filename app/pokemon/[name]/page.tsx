'use client';
import Header from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
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

  const { data: evolutionData, error: evolutionError } = useSWR(
    pokemon ? `https://pokeapi.co/api/v2/evolution-chain/${pokemon.id}` : null,
    fetcher,
  );

  if (error || evolutionError)
    return <div>Error al cargar la información del Pokémon.</div>;
  if (!pokemon || !evolutionData) return <div>Cargando...</div>;

  return (
    <div className="flex flex-col justify-center px-8">
      <div className="flex flex-col gap-2 justify-center items-center">
        <Header />
        <div className="w-full lg:w-1/2 containerPokemons rounded-3xl min-h-[80vh]">
          <div className="bg-white  flex flex-col items-center min-h-[80vh] ">
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
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center px-4 pb-10 pt-4">
              <Tabs defaultValue="stats" className="w-full">
                <TabsList>
                  <TabsTrigger value="stats">Caracteristicas</TabsTrigger>
                  <TabsTrigger value="moves">Movimientos</TabsTrigger>
                  <TabsTrigger value="evolution">Evoluciones</TabsTrigger>
                </TabsList>
                <TabsContent value="stats">
                  <div className="flex gap-2">
                    {pokemon.types.map((type: { type: { name: string } }) => (
                      <Badge
                        style={{
                          backgroundColor: handleTypeColors(type.type.name),
                        }}
                        key={type.type.name}
                        variant="outline"
                      >
                        <span
                          className="capitalize  
                          text-white
                          font-bold
                          "
                        >
                          {type.type.name}
                        </span>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 w-full pt-4">
                    {pokemon.stats.map(
                      (stat: { base_stat: number; stat: { name: string } }) => (
                        <div
                          key={stat.stat.name}
                          className="flex justify-between gap-8 items-center"
                        >
                          <p className="capitalize">{stat.stat.name}</p>
                          <Progress value={stat.base_stat} />
                          <p>{stat.base_stat}</p>
                        </div>
                      ),
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="moves">
                  <div className="grid grid-cols-2 gap-4">
                    {pokemon.moves.map(
                      (move: { move: { name: string } }, index: number) => (
                        <div
                          key={index}
                          className="bg-white p-4 rounded-lg shadow-md"
                        >
                          <p className="capitalize">{move.move.name}</p>
                        </div>
                      ),
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="evolution">
                  <div className="flex flex-col items-center justify-center"></div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonPage;
