'use client';

import Image from 'next/image';

function Loader() {
  return (
    <div className="pokeball_loader" data-testid="pokeball_loader">
      <Image src="/pokeball.png" width={100} height={100} alt="pokeball" />
    </div>
  );
}

export default Loader;
