'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <Link href={'/'} className="w-full flex justify-center items-center">
      <Image
        src={'/pokemon_logo.png'}
        width={300}
        height={300}
        alt="pokemon logo"
      />
    </Link>
  );
};

export default Header;
