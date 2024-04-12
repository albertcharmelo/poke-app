export function handleTypeColors(type: string = '') {
  const colorMap: { [key: string]: string } = {
    normal: '#A8A878',
    fighting: '#C03028',
    flying: '#A890F0',
    poison: '#A040A0',
    ground: '#E0C068',
    rock: '#B8A038',
    bug: '#A8B820',
    ghost: '#705898',
    steel: '#B8B8D0',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    psychic: '#F8A0E0',
    ioce: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    fairy: '#EE99AC',
  };
  return colorMap[type];
}
export function handleSecondaryTypeColors(type: string = '') {
  const secondaryColorMap: { [key: string]: string } = {
    normal: '#8C8C6D',
    fighting: '#9C1C1C',
    flying: '#8C79B3',
    poison: '#8C238C',
    ground: '#A58C4B',
    rock: '#9C8C2B',
    bug: '#8C9120',
    ghost: '#594B6B',
    steel: '#9C9CB3',
    fire: '#B35919',
    water: '#5679B3',
    grass: '#6B8C42',
    electric: '#B39C1C',
    psychic: '#B373A3',
    ice: '#7C9C9C',
    dragon: '#5938B3',
    dark: '#594C4C',
    fairy: '#B37D8C',
  };
  return secondaryColorMap[type];
}
export function handleTypeBackgroundImage(type: string = '') {
  const imageMap: { [key: string]: string } = {
    normal: 'url(/details/normal.png)',
    fighting: '#C03028',
    flying: '#A890F0',
    poison: '#A040A0',
    ground: '#E0C068',
    rock: '#B8A038',
    bug: 'url(/details/bug.jpg)',
    ghost: '#705898',
    steel: 'url(/details/steel.png)',
    fire: 'url(/details/fire.webp)',
    water: 'url(/details/water.png)',
    grass: 'url(/details/grass.jpeg)',
    electric: '#F8D030',
    psychic: '#F8A0E0',
    ioce: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    fairy: '#EE99AC',
  };

  return imageMap[type];
}
