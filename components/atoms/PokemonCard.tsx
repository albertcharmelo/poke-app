import { handleNumberPokemon } from '@/utils/handleText';
import { handleTypeColors } from '@/utils/handleTypeColors';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

interface PokemonCardProps {
  check?: boolean;
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
  check = false,
}) => {
  return (
    <Link
      href={`/pokemon/${name}`}
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
      }}
      className={`p-8 md:p-2 rounded-2xl bg-white flex flex-col justify-center items-center gap-2 cursor-pointer relative`}
    >
      {check && (
        <div
          className="
          rounded-full
          bg-slate-50
          p-2
          shadow-md
          absolute
          top-0
          right-0
          transform
          translate-x-2
          -translate-y-2  
          
        "
        >
          <Check className="  text-green-500" size={24} />
        </div>
      )}
      <Image
        src={imageUrl}
        alt={name}
        width={112}
        height={96}
        className="mx-auto"
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
