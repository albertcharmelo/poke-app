import { render, renderHook, screen, waitFor } from '@testing-library/react';
import PokemonsList from '@/components/pages/PokemonsList';
import '@testing-library/jest-dom';
import usePokemons from '../hooks/usePokemons';
import { act } from 'react-dom/test-utils';

const randomPokemons = () => {
  const pokemons = [];
  for (let i = 1; i <= 15; i++) {
    const pokemon = {
      id: i,
      name: 'pokemon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      types: ['type1', 'type2'],
    };
    pokemons.push(pokemon);
  }
  return pokemons;
};

// Crea un mock de usePokemons
jest.mock('../hooks/usePokemons');

describe('PokemonsList', () => {
  it('se muestra un loader cuando se estan obteniendo los pokemons', async () => {
    (usePokemons as jest.Mock).mockReturnValue({
      pokemons: [],
      error: null,
      isLoading: true,
    });

    act(() => {
      render(<PokemonsList />);
    });

    expect(screen.getByAltText('pokeball')).toBeInTheDocument();
  });

  it('Muestra un listado de pokemones despues del si realiza el fetch', async () => {
    (usePokemons as jest.Mock).mockReturnValue({
      pokemons: randomPokemons(),
      error: null,
      isLoading: false,
    });
    act(() => {
      render(<PokemonsList />);
    });

    await waitFor(() => {
      expect(screen.getAllByTestId('pokemonCard').length).toBe(15);
    });
  });

  describe('Boton de paginación', () => {
    it('Muestra el boton de paginación', async () => {
      (usePokemons as jest.Mock).mockReturnValue({
        pokemons: randomPokemons(),
        error: null,
        isLoading: false,
      });
      act(() => {
        render(<PokemonsList />);
      });

      await waitFor(() => {
        expect(screen.getByTestId('nextButton')).toBeInTheDocument();
      });
    });
  });
});
