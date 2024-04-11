import { handleTypeColors } from '@/utils/handleTypeColors';
import Image from 'next/image';

interface PokemonCardProps {
  name: string;
  imageUrl: string;
  type: string;
  number: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  imageUrl,
  type,
  number,
}) => {
  const handleNumberPokemon = (number: number) => {
    return number < 10 ? `00${number}` : number < 100 ? `0${number}` : number;
  };

  return (
    <div
      style={{
        backgroundColor: handleTypeColors(type),
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
      }}
      className={`p-8 rounded-2xl`}
    >
      <p className="text-center text-sm text-white">
        #{handleNumberPokemon(number)}
      </p>
      <Image
        src={imageUrl}
        alt={name}
        width={112}
        height={96}
        className=" mx-auto"
      />
      <h3 className="text-lg text-pokeTitle font-bold text-center">{name}</h3>
    </div>
  );
};

export default PokemonCard;
