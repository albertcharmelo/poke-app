// FILEPATH: /c:/Users/alber/dev/poke-app/__tests__/PokemonCardDetail.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import PokemonCardDetail from '@/components/organisms/PokemonCardDetail';
import { usePokemonStore } from '@/store/usePokemonStore';
import '@testing-library/jest-dom';

jest.mock('../store/usePokemonStore');

const mockPokemon = {
  id: 1,
  name: 'pokemon',
  sprites: {
    front_default: 'https://example.com/pokemon.png',
  },
  types: [{ type: { name: 'type1' } }, { type: { name: 'type2' } }],
  stats: [],
  moves: [{ move: { name: 'move1' } }, { move: { name: 'move2' } }],
};

const mockEvolutions = [
  {
    id: 2,
    name: 'evolution1',
    image: 'https://example.com/evolution1.png',
  },
  {
    id: 3,
    name: 'evolution2',
    image: 'https://example.com/evolution2.png',
  },
];

describe('PokemonCardDetail', () => {
  let addPokemon: jest.Mock;

  beforeEach(() => {
    addPokemon = jest.fn();
    (usePokemonStore as unknown as jest.Mock).mockReturnValue({
      addPokemon,
    });
  });

  it('Componente detalle renderizado correctamente', () => {
    render(
      <PokemonCardDetail pokemon={mockPokemon} evolutions={mockEvolutions} />,
    );

    expect(screen.getByText(mockPokemon.name)).toBeInTheDocument();
    expect(screen.getByText('Stats')).toBeInTheDocument();
    expect(screen.getByText('Moves')).toBeInTheDocument();
    expect(screen.getByText('Evolutions')).toBeInTheDocument();
  });

  it('Guarda el pokemon como pokemon visto en la lista ', () => {
    render(
      <PokemonCardDetail pokemon={mockPokemon} evolutions={mockEvolutions} />,
    );

    expect(addPokemon).toHaveBeenCalledWith({
      id: mockPokemon.id,
      name: mockPokemon.name,
      image: mockPokemon.sprites.front_default,
      types: mockPokemon.types.map((type) => type.type.name),
    });
  });
});
