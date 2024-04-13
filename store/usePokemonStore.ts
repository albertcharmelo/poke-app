import { create } from 'zustand';

export const usePokemonStore = create<PokemonStore>((set) => ({
  pokemons: [],
  addPokemon: (pokemon) =>
    set((state) => ({ pokemons: [...state.pokemons, pokemon] })),
}));
