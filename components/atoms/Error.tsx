'use client';

import Image from 'next/image';

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image src="/error.png" width={300} height={300} alt="error" />
      <div
        className="
                bg-red-500
                text-white
                text-center
                p-4
                rounded-lg
                shadow-md

              "
      >
        <p>Something went wrong, please try again later.</p>
      </div>
    </div>
  );
};

export default Error;
