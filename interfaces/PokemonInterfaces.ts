interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
}

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

interface PokemonResult {
  url: string;
}

interface PokemonListResponse {
  results: PokemonResult[];
}

interface PokemonStore {
  pokemons: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
}
