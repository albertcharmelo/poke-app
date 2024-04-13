import { handleNumberPokemon } from '@/utils/handleText';
import { handleTypeColors } from '@/utils/handleTypeColors';
import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <Link
      href={`/pokemon/${name}`}
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
      }}
      className={`p-8 md:p-2 rounded-2xl bg-white flex flex-col justify-center items-center gap-2 cursor-pointer`}
    >
      <Image
        src={imageUrl}
        alt={name}
        width={112}
        height={96}
        className=" mx-auto"
      />
      <h3
        style={{ color: handleTypeColors(type) }}
        className="text-lg capitalize font-bold text-center"
      >
        {name}
      </h3>
      <p className="text-center text-sm text-pokeTitle">
        #{handleNumberPokemon(number)}
      </p>
    </Link>
  );
};

export default PokemonCard;
